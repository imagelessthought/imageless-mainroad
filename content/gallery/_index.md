---
title: Image Gallery
layout: list-status
authorbox: "True"
---
  <style>
    html {
      background-color: #2d2c2c;
      font-family: 'Open Sans', sans-serif;
      color: white;
    }

    body-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2rem;
      margin-top: 0;
      padding: 0 1rem 1rem 1rem;
    }

    .main__title {
        margin-bottom: 1rem!important;   
    }

    #gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start; /* Left align items horizontally */
      width: 100%;
    }

    #gallery .image-container {
      width: 150px;
  /*  height: 340px;  */
      margin: 5px;
      padding: 5px;
      overflow: hidden;
      border: 1px solid transparent;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color:  #2d2c2c; /* #707B7C; */
   /* box-shadow: white 0 0 1px 1px;  */
    }


    #gallery .image-container img {
      width: 150px;
      box-shadow: #53565A 0 0 3px 1px;
      outline: 1px solid transparent;
      padding: .5rem!important;
    }

    .image-link {
      display: block;
      text-decoration: none;
    }

    img:hover {
      box-shadow: #B9DCD2 0 0 3px 3px;
      outline: 1px solid #336699;
      background-color: white;
    }

    .caption {
      text-align: center;
      padding: 5px;
      font-size: 0.65rem;
      background-color: #2d2c2c;
      color: white;
      margin-top: 1rem;
      border-radius: 4px;
      box-shadow: #2d2c2c 0 0 1px 1px;
      height: 3rem;
    }

    body::after {
      content: '';
      flex: auto;
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
      width: calc(50% - 40px);
      height: auto;
    }

    #gallery {
      justify-content: center; /* Left align items horizontally */
    }
  }
    .page-link {
      margin: 0 5px;
      padding: 5px;
      color: white;
      background-color: #2d2c2c;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-decoration-color: transparent!important;
    }

    a.page-link:link, a.page-link:visited, a.page-link:hover, a.page-link:active {
    text-decoration-color: transparent!important;
    }

    button.page-link:hover {
        background-color: #B9DCD2!important;
        color: black!important;
    }

    button.page-link.active {
      background-color: #336699;
      text-decoration-color: transparent!important;
      color: white;
    }

        .spacer {
      /* Adjust spacer styles as needed */
      width:30px; /* Example width */
      height: 30px; /* Example height */
      display: inline-block;
    }

    #prevPage, #nextPage {
    background-color: var(--galnav);
    color: white;
    font-size: 2rem;
    border: 0;
    border-radius: 4px;
    }

   #prevPage:active, #nextPage:active {
    background-color: #C0392B!important;
    color: #ffa500!important;
  }

   #prevPage:hover, #nextPage:hover {
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

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const gallery = document.getElementById("gallery");
      const paginationContainer = document.getElementById("pagination");
      const imagesPerPage = 24;
      let currentPage = 1;
      let totalPages = 1;

      function displayImages() {
        const indexFile = "index.dat";
        fetch(indexFile)
          .then(response => response.text())
          .then(data => {
            const imageFiles = data.trim().split('\n');
            const filteredFiles = imageFiles.filter(filename => /\.[a-zA-Z0-9]{3,4}$/i.test(filename.trim()));
            const startIdx = (currentPage - 1) * imagesPerPage;
            const endIdx = startIdx + imagesPerPage;

            for (let i = startIdx; i < endIdx && i < filteredFiles.length; i++) {
              const filename = filteredFiles[i];
              const container = document.createElement("div");
              container.classList.add("image-container");
              container.id = `image-${i}`;

              const imageLink = document.createElement("a");
              imageLink.classList.add("image-link");

              const image = document.createElement("img");
              const imagePath = `images/${filename.trim()}`;
              image.src = imagePath;
              image.alt = filename.trim();

              imageLink.href = imagePath;
              imageLink.target = "_self";
              imageLink.appendChild(image);
              container.appendChild(imageLink);

              const caption = document.createElement("div");
              caption.classList.add("caption");
              caption.textContent = filename.trim();
              container.appendChild(caption);

              gallery.appendChild(container);
            }

            totalPages = Math.ceil(filteredFiles.length / imagesPerPage);

            // Add navigation buttons and spacer
            const prevButton = document.createElement("button");
            prevButton.textContent = "<";
            prevButton.id = "prevPage";
            prevButton.style.display = currentPage === 1 ? "none" : "inline-block";
            prevButton.addEventListener("click", handlePrevClick);
            paginationContainer.innerHTML = "";
            paginationContainer.appendChild(prevButton);

            if (currentPage === 1) {
              const spacer = document.createElement("div");
              spacer.classList.add("spacer");
              spacer.style.display = "inline-block";
              paginationContainer.appendChild(spacer);
            }

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
          .catch(error => console.error("Error fetching images:", error));
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
        history.pushState({ page: currentPage }, `Page ${currentPage}`, `?page=${currentPage}`);
      }

      window.onpopstate = function(event) {
        const page = event.state ? event.state.page : 1;
        changePage(page);
      };

      const initialPage = parseInt(new URLSearchParams(window.location.search).get('page'), 10) || 1;
      currentPage = initialPage;
      displayImages();
    });
  </script>

</div>
</body>
</html>
