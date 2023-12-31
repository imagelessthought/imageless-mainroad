---
title: Gallery
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

    .image-link {
      display: block;
      text-decoration: none;
    }

    #gallery .image-container img {
      width: 130px;
      box-shadow: black 0 0 3px 1px;
      outline: 1px solid black;
      padding: 4px;
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

    a.page-link:hover {
        background-color: #B9DCD2;
        color: black;
    }

    .page-link.active {
      background-color: #336699;
      text-decoration-color: transparent!important;
    }
  </style>
</head>
<body>
  <div class="body-container">
  <div class="pagination" id="pagination"></div>
  <div id="gallery"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const gallery = document.getElementById("gallery");
      const paginationContainer = document.getElementById("pagination");
      const imagesPerRow = 4;
      const imagesPerPage = 16; // Change the number of images per page
      let currentPage = 1;

      function displayImages() {
        const imageFolder = "images/index.dat";

        fetch(imageFolder)
          .then(response => response.text())
          .then(data => {
            const imageFiles = data.trim().split('\n');
            const filteredFiles = imageFiles.filter(filename => filename.trim() !== "index.dat");

            const startIdx = (currentPage - 1) * imagesPerPage;
            const endIdx = startIdx + imagesPerPage;

            for (let i = startIdx; i < endIdx && i < filteredFiles.length; i++) {
              const filename = filteredFiles[i];
              const container = document.createElement("div");
              container.classList.add("image-container");

              const imageLink = document.createElement("a");
              imageLink.classList.add("image-link");

              const image = document.createElement("img");
              const imagePath = `images/${filename.trim()}`;

              image.src = imagePath;
              image.alt = filename.trim();

              imageLink.href = imagePath;
              imageLink.target = "_blank";

              imageLink.appendChild(image);
              container.appendChild(imageLink);

              const caption = document.createElement("div");
              caption.classList.add("caption");
              caption.textContent = filename.trim();
              container.appendChild(caption);

              gallery.appendChild(container);
            }

            const totalPages = Math.ceil(filteredFiles.length / imagesPerPage);

            for (let i = 1; i <= totalPages; i++) {
              const pageLink = document.createElement("a");
              pageLink.classList.add("page-link");
              pageLink.href = "#";
              pageLink.textContent = i < 10 ? `0${i}` : i;
              pageLink.addEventListener("click", () => changePage(i));
              if (i === currentPage) {
                pageLink.classList.add("active");
              }
              paginationContainer.appendChild(pageLink);
            }
          })
          .catch(error => console.error("Error fetching images:", error));
      }

      function changePage(page) {
        currentPage = page;
        gallery.innerHTML = "";
        paginationContainer.innerHTML = "";
        displayImages();
      }

      displayImages();
    });
  </script>
</div>
</body>
</html>
