// gallery.js - Updated with custom dimension text
document.addEventListener("DOMContentLoaded", function () {
  initGallery();
});

function initGallery() {
  const genreButtons = document.querySelectorAll(".genre-btn");
  const artGrid = document.getElementById("artGrid");
  const galleryTitle = document.getElementById("galleryTitle");
  const artworkCount = document.getElementById("artworkCount");
  const initialState = document.getElementById("initialState");
  const galleryContent = document.getElementById("galleryContent");
  const emptyState = document.getElementById("emptyState");

  // Updated artwork data with custom dimension text
  const artworks = [
    // Sketches
    {
      id: 1,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch1.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 2,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch2.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 3,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch3.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 4,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch4.jpg"],
      size: "Customized by style and size",
      featured: true,
    },
    {
      id: 5,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch5.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 6,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch6.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 7,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch7.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 8,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch8.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 9,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch9.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 10,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch10.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 11,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch11.jpg"],
      size: "Customized by style and size",
      featured: false,
    },
    {
      id: 12,
      title: "",
      description: "",
      genre: "sketches",
      images: ["images/art/sketch12.jpg"],
      size: "Customized by style and size",
      featured: false,
    },

    // Wall Pieces
    {
      id: 13,
      title: "Leaf n Line.",
      description: "Geomatric Design, With Monstera & Banana Leaves.",
      genre: "wallpieces",
      images: ["images/art/wallpiece1.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 14,
      title: "Saraswati Kala.",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece2.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 15,
      title: "Lippan Lipi",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece3.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 16,
      title: "Haryali Trio",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece4.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: true,
    },
    {
      id: 17,
      title: "Divine Masculine",
      description: "An art work showcasing the blend of 'lord Krishna & lord shiva'.",
      genre: "wallpieces",
      images: ["images/art/wallpiece5.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 18,
      title: "Pankhi Trio",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece6.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 19,
      title: "Midas Touch",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece7.jpg", "images/art/wallpiece7_2.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: true,
    },
    {
      id: 20,
      title: "Collector's Edition Leaf Fossil(Set of 3)",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece9.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 21,
      title: "Kala :- Make Your Customized Name Plates.",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece8.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },
    {
      id: 22,
      title: "Meditating Buddha.",
      description: "",
      genre: "wallpieces",
      images: ["images/art/wallpiece10.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: false,
    },

    // Other Art (Conceptual Interior)
    {
      id: 23,
      title: "Play Palette",
      description: "",
      genre: "other",
      images: ["images/art/conc_int1.jpg", "images/art/conc_int1_2.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: true,
    },
    {
      id: 24,
      title: "Crescent Dreams",
      description: "",
      genre: "other",
      images: ["images/art/conc_int2.jpg", "images/art/conc_int2_2.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: true,
    },
    {
      id: 25,
      title: "Intertwined Devotion",
      description: "",
      genre: "other",
      images: ["images/art/conc_int3.jpg", "images/art/conc_int3_2.jpg"],
      size: "Customized by style and size | Handcrafted",
      featured: true,
    }
  ];

  let currentGenre = null;

  // Genre filter functionality
  genreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const genre = this.getAttribute("data-genre");

      // Update active button
      genreButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter and display artworks
      filterArtworks(genre);
    });
  });

  function filterArtworks(genre) {
    initialState.style.display = "none";
    galleryContent.style.display = "block";
    emptyState.style.display = "none";
    artGrid.style.display = "grid";

    let filteredArtworks = artworks.filter((art) => art.genre === genre);

    const genreTitles = {
      sketches: "Make to Orders Sketches",
      wallpieces: "Customized Wallpieces",
      other: "Conceptual Interior",
    };
    galleryTitle.textContent = genreTitles[genre];

    artworkCount.textContent = filteredArtworks.length;
    displayArtworks(filteredArtworks);

    if (filteredArtworks.length === 0) {
      artGrid.style.display = "none";
      emptyState.style.display = "block";
    }
  }

  function displayArtworks(artworksToShow) {
    artGrid.innerHTML = "";

    artworksToShow.forEach((artwork) => {
      const artCard = createArtCard(artwork);
      artGrid.appendChild(artCard);
    });
  }

  function createArtCard(artwork) {
    const artCard = document.createElement("div");
    artCard.className = `art-card ${artwork.featured ? "featured" : ""}`;
    artCard.setAttribute("data-genre", artwork.genre);
  
    // Use first image as thumbnail
    const thumbnail = artwork.images[0];
    
    artCard.innerHTML = `
      <div class="art-image-container">
          <img src="${thumbnail}" alt="${artwork.title}" class="art-image">
          <div class="art-overlay">
              <div class="art-actions">
                  <button class="art-view-btn" data-art-id="${artwork.id}">
                      👁️ View Details
                  </button>
              </div>
          </div>
          ${artwork.featured ? '<div class="featured-badge">Featured</div>' : ''}
          ${artwork.images.length > 1 ? '<div class="multi-image-badge">📷 ' + artwork.images.length + '</div>' : ''}
      </div>
      <div class="art-info">
          <h3 class="art-title">${artwork.title}</h3>
          <p class="art-description">${artwork.description}</p>
          <div class="art-meta">
              <span class="art-genre">${getGenreDisplayName(artwork.genre)}</span>
              <span class="art-size">${artwork.size}</span>
          </div>
      </div>
    `;
  
    // Add click event for viewing details
    const viewBtn = artCard.querySelector(".art-view-btn");
    viewBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      openArtworkModal(artwork);
    });
  
    // Add click event for the entire card
    artCard.addEventListener("click", function () {
      openArtworkModal(artwork);
    });
  
    return artCard;
  }

  function getGenreDisplayName(genre) {
    const genreNames = {
      sketches: "Sketch",
      wallpieces: "Wall Piece",
      other: "Other Art",
    };
    return genreNames[genre] || genre;
  }

  // Modal functionality with slider
  function openArtworkModal(artwork) {
    const modal = document.getElementById("imageModal");
    const modalContent = document.querySelector(".modal-content");

    // Clear previous modal content
    modalContent.innerHTML = "";

    // Create slider structure
    modalContent.innerHTML = `
      <span class="modal-close" id="modalClose">&times;</span>
      <div class="slider-container">
        <div class="slider-track" id="sliderTrack">
          ${artwork.images.map((image, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}">
              <img src="${image}" alt="${artwork.title} - Image ${index + 1}" class="modal-image">
            </div>
          `).join('')}
        </div>
        
        ${artwork.images.length > 1 ? `
          <button class="slider-nav slider-prev" id="sliderPrev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="slider-nav slider-next" id="sliderNext">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
          
          <div class="slider-dots" id="sliderDots">
            ${artwork.images.map((_, index) => `
              <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
            `).join('')}
          </div>
        ` : ''}
      </div>
      <div class="modal-info">
        <h3 class="modal-title">${artwork.title}</h3>
        <p class="modal-description" id="modalDescription">${artwork.description}</p>
        <div class="modal-meta">
          <span class="modal-genre" id="modalGenre">${getGenreDisplayName(artwork.genre)}</span>
          <span class="modal-size" id="modalSize">${artwork.size}</span>
          ${artwork.images.length > 1 ? `<span class="image-counter">1 / ${artwork.images.length}</span>` : ''}
        </div>
      </div>
    `;

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Initialize slider if multiple images
    if (artwork.images.length > 1) {
      initSlider(artwork);
    }

    // Close modal events
    const modalClose = document.getElementById("modalClose");
    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });
  }

  function initSlider(artwork) {
    const sliderTrack = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    const imageCounter = document.querySelector(".image-counter");

    let currentSlide = 0;
    const totalSlides = artwork.images.length;

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update active states
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
      });

      // Update counter
      if (imageCounter) {
        imageCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
      }
    }

    // Next slide
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    });

    // Previous slide
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    // Dot navigation
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentSlide = parseInt(dot.getAttribute("data-index"));
        updateSlider();
      });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      } else if (e.key === "ArrowRight") {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }
    });

    // Swipe support for touch devices
    let startX = 0;
    let endX = 0;

    sliderTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    sliderTrack.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = startX - endX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next
          currentSlide = (currentSlide + 1) % totalSlides;
        } else {
          // Swipe right - previous
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        updateSlider();
      }
    }
  }

  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}