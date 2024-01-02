---
title: Image Gallery
layout: list-status
authorbox: "True"
---

<style>
  /* Your existing CSS styles here */

  .body-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 0;
    padding: 0 1rem 1rem 1rem;
  }

  #gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center images horizontally */
    margin: 5px;
  }

  .image-container {
    position: relative;
    width: 150px;
    height: 200px; /* Maintain a fixed height */
    box-sizing: content-box;
    overflow: hidden;
    box-shadow: #53565A 0 0 3px 1px;
    outline: 1px solid transparent;
    border-radius: 4px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center; /* Center images vertically */
    transition: background-color 0.3s; /* Add transition for smooth color change */
  }

  .image-container:hover {
    background-color: white;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    padding: 0.5rem !important;
  }

  .caption-container {
    width: 150px;
    text-align: center;
    background-color: transparent;
    color: white;
    font-size: .85em;
    padding: 1rem .5rem!important;
    box-sizing: border-box;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  .pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
    margin: 2rem 0 2rem 0;
    gap: .5rem 0;
  }

  @media screen and (max-width: 900px) {
    .pagination {
      justify-content: center;
    }

    .image-wrapper {
      width: calc(50% - 10px);
      height: auto;
    }

    #gallery {
      justify-content: center;
    }
  }

  .page-link {
    margin: 0 5px;
    padding: 5px;
    color: white;
    background-color: #2d2c2c;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-decoration-color: transparent !important;
  }

  a.page-link:link,
  a.page-link:visited,
  a.page-link:hover,
  a.page-link:active {
    text-decoration-color: transparent !important;
  }

  button.page-link:hover {
    background-color: #B9DCD2 !important;
    color: black !important;
  }

  button.page-link.active {
    background-color: #336699;
    text-decoration-color: transparent !important;
    color: white;
  }

  .spacer {
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  #prevPage,
  #nextPage {
    background-color: var(--galnav);
    color: white;
    font-size: 2rem;
    border: 0;
    border-radius: 4px;
  }

  #prevPage:active,
  #nextPage:active {
    background-color: #C0392B !important;
    color: #ffa500 !important;
  }

  #prevPage:hover,
  #nextPage:hover {
    background-color: #B9DCD2;
    color: black;
  }
</style>
</head>

<body>
  <div class="body-container">
    <div class="pagination" id="pagination">
      <button id="prevPage">&lt;</button>
    </div>
    <div id="gallery"></div>
  </div>

  <script>
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
  </script>
</body>