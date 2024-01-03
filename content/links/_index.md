---
title: Online Portals
layout: list-status
authorbox: "True"
---
   <style>
    html {
      background-color: #2d2c2c;
      font-family: 'Open Sans', sans-serif;
      color: white;
    }

  <style>
    /* Your existing CSS styles here */

    .body-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;

    }

    #gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      margin-top: 2rem;
    }

    .image-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center images horizontally */
      margin: 0;
    }

.image-container {
  position: relative;
  width: 75px;
  height: 75px; /* Maintain a fixed height */
  box-sizing: content-box;
  overflow: hidden;
  box-shadow: #B9DCD2 0 0 10px 3px;
  border: 3px solid #336699;
  outline: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center; /* Center images vertically */
  transition: background-color 0.3s; /* Add transition for smooth color change */
}

.image-container:hover {
  background-color: #00A9E0;
}

.image-container img {
  width: 100%; /* Adjusted to fill the container */
  height: 100%; /* Adjusted to fill the container */
  padding: 0.5rem !important;
}

.caption-container {
  width: 150px;
  text-align: center;
  background-color: transparent;
  color: white;
  font-size: .85em;
  padding: .5rem .5rem 1rem .5rem!important;
  box-sizing: border-box;
  height: 4rem; /* Set the height for multi-line captions */
  display: flex;
  justify-content: center;
  align-items: top;
  margin-top: 1em;
}

    .image-link {
      display: block;
      text-decoration: none;
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

      .image-container {
        width: calc(50% - 10px); /* Adjusted to accommodate margin */
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
<p>This is a new module I created and am currently testing.  It can be used with any static page solution or content management system (CMS).  It is intended to create a database of links that a user may search using a query or tags.  In development.  <b>This is a Github CoPilot</b> software development test project.  
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

            displayedEntries.forEach((entry, i) => {
              const parts = entry.split(",").map(part => part.trim());

              if (parts.length === 3) {
                const [filename, description, url] = parts;

                const imageWrapper = document.createElement("div");
                imageWrapper.classList.add("image-wrapper");

                const imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");
                imageContainer.id = `image-${i}`;

                const imageLink = document.createElement("a");
                imageLink.classList.add("image-link");
                imageLink.href = url;
                imageLink.target = "_blank";

                const image = document.createElement("img");
                const imagePath = `images/${filename}`;
                image.src = imagePath;
                image.alt = description;

                imageLink.appendChild(image);
                imageContainer.appendChild(imageLink);
                imageWrapper.appendChild(imageContainer);

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