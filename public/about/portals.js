
/* portals.js v.02 : does not show the page number in page navigation even when only one page */
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const paginationContainer = document.getElementById("pagination");
  const imagesPerPage = 24;
  let currentPage = 1;
  let totalPages = 1;

  function displayImages() {
    const indexFile = "index.dat";
    fetch(indexFile)
      .then((response) => response.text())
      .then((data) => {
        const imageEntries = data.trim().split("\n");

        if (imageEntries.length === 0) {
          console.error("No image entries found in index.dat");
          return;
        }

        gallery.innerHTML = ""; // Clear existing content

        const startIdx = (currentPage - 1) * imagesPerPage;
        const endIdx = startIdx + imagesPerPage;
        const displayedEntries = imageEntries.slice(startIdx, endIdx);

displayedEntries.forEach((entry, i) => {
  const parts = entry.split('!;');
  if (parts.length === 4) {
    const [filename, description, url, flipInfo] = parts.map(part => part.trim());
    
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const imageLink = document.createElement("a");
    imageLink.href = url; // Use the third value as the URL
    imageLink.target = "_blank";
    imageWrapper.appendChild(imageLink);

    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    // Constructing the front of the card
    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");

    const image = document.createElement("img");
    image.src = `${filename}`; // image.src = `images/${filename}`;
    image.alt = description; // Use the description as alt text

    flipCardFront.appendChild(image);

    // Constructing the back of the card
    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");
    flipCardBack.textContent = flipInfo.slice(1, -1); // Remove the first and last characters (quotation marks)
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    imageLink.appendChild(flipCard);

    // Add caption container
    const captionContainer = document.createElement("div");
    captionContainer.classList.add("caption-container");
    captionContainer.textContent = description;
    imageWrapper.appendChild(captionContainer);

    gallery.appendChild(imageWrapper);
  } else {
    console.error(`Invalid entry format for entry ${i + 1}: ${entry}`);
  }
});

totalPages = Math.ceil(imageEntries.length / imagesPerPage);
  updatePagination();
      })
      .catch((error) => console.error("Error fetching or processing images:", error));
  }

  function updatePagination() {
    paginationContainer.innerHTML = "";

    // If there is only one page, don't display any pagination controls
    if (totalPages === 1) {
        return;
    }

    // Add previous button with conditional display only if not on the first page
    if (currentPage > 1) {
        createNavigationButton("prevPage", "<", true, handlePrevClick);
    } else {
        // Add spacer for alignment when on the first page
        const spacer = document.createElement("div");
        spacer.classList.add("spacer");
        paginationContainer.appendChild(spacer);
    }

    // Add page buttons for all pages
    for (let i = 1; i <= totalPages; i++) {
        createPageButton(i);
    }

    // Add next button with conditional display only if not on the last page
    if (currentPage < totalPages) {
        createNavigationButton("nextPage", ">", true, handleNextClick);
    }
}


  /*

  function updatePagination() {
    paginationContainer.innerHTML = "";
    // Add spacer for page 1
    if (currentPage === 1) {
      const spacer = document.createElement("div");
      spacer.classList.add("spacer");
      paginationContainer.appendChild(spacer);
    }
    // Add previous button
    createNavigationButton("prevPage", "<", currentPage > 1, handlePrevClick);
    // Add pages
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i);
    }
    // Add next button
    createNavigationButton("nextPage", ">", currentPage < totalPages, handleNextClick);
  }

  */

  function createNavigationButton(id, text, shouldDisplay, eventHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    button.id = id;
    button.style.display = shouldDisplay ? "inline-block" : "none";
    button.addEventListener("click", eventHandler);
    paginationContainer.appendChild(button);
  }

  function createPageButton(pageNumber) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("page-link");
    pageButton.textContent = pageNumber < 10 ? `0${pageNumber}` : pageNumber;
    if (pageNumber === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => changePage(pageNumber));
    paginationContainer.appendChild(pageButton);
  }

  function handlePrevClick() {
    changePage(currentPage - 1);
  }

  function handleNextClick() {
    changePage(currentPage + 1);
  }

  function changePage(page) {
    currentPage = Math.min(Math.max(1, page), totalPages);
    displayImages();
    history.pushState({ page: currentPage }, `Page ${currentPage}`, `?page=${currentPage}`);
  }

  window.onpopstate = function (event) {
    const page = event.state ? event.state.page : 1;
    changePage(page);
  };

  // Initial page load
  const initialPage = parseInt(new URLSearchParams(window.location.search).get('page'), 10) || 1;
  currentPage = initialPage;
  displayImages();
});