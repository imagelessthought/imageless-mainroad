/*!
* gallery.js v0.1
* MIT licensed
* M Baggett (baggett.michael@gmail.com)
*/
function myFunction() {
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

        displayedEntries.forEach((filename, i) => {
          const imageWrapper = document.createElement("div");
          imageWrapper.classList.add("image-wrapper");

          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-container");
          imageContainer.id = `image-${i}`;

          const imageLink = document.createElement("a");
          imageLink.classList.add("image-link");
          imageLink.href = `images/${filename.trim()}`;

          const image = document.createElement("img");
          const imagePath = `images/${filename.trim()}`;
          image.src = imagePath;
          image.alt = filename.trim();

          imageLink.appendChild(image);
          imageContainer.appendChild(imageLink);
          imageWrapper.appendChild(imageContainer);

          // Add caption container
          const captionContainer = document.createElement("div");
          captionContainer.classList.add("caption-container");
          captionContainer.textContent = filename.trim();
          imageWrapper.appendChild(captionContainer);

          gallery.appendChild(imageWrapper);
        });

        totalPages = Math.ceil(imageEntries.length / imagesPerPage);

        // Add navigation buttons and spacer
        paginationContainer.innerHTML = "";

        // Add previous button
        const prevButton = document.createElement("button");
        prevButton.textContent = "<";
        prevButton.id = "prevPage";
        prevButton.style.display = currentPage === 1 ? "none" : "inline-block";
        prevButton.addEventListener("click", handlePrevClick);
        paginationContainer.appendChild(prevButton);

        // Add pages
        for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement("button");
          pageButton.classList.add("page-link");
          pageButton.textContent = i < 10 ? `0${i}` : i;
          if (i === currentPage) {
            pageButton.classList.add("active");
          }
          pageButton.addEventListener("click", () => changePage(i));
          paginationContainer.appendChild(pageButton);
        }

        // Add next button
        const nextButton = document.createElement("button");
        nextButton.textContent = ">";
        nextButton.id = "nextPage";
        nextButton.style.display = currentPage < totalPages ? "inline-block" : "none";
        nextButton.addEventListener("click", handleNextClick);
        paginationContainer.appendChild(nextButton);
      })
      .catch((error) => console.error("Error fetching or processing images:", error));
  }

  function handlePrevClick() {
    changePage(currentPage - 1);
  }

  function handleNextClick() {
    changePage(currentPage + 1);
  }

  function changePage(page) {
    currentPage = Math.min(Math.max(1, page), totalPages);
    gallery.innerHTML = "";
    displayImages();
    history.pushState({
      page: currentPage
    }, `Page ${currentPage}`, `?page=${currentPage}`);
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
}