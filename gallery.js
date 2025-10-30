// gallery.js - Interactive Art Gallery Functionality
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

  // Sample artwork data - Replace with your actual artwork information
  const artworks = [
    // Sketches
    {
      id: 1,
      title: "",
      description: "Blessed ✨❤",
      genre: "sketches",
      image: "images/art/sketch1.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 2,
      title: "",
      description:
        "This is how art rewards u ,when u spend 13-14 hrs with it.❤❣👁️ ...",
      genre: "sketches",
      image: "images/art/sketch2.jpg",
      size: "9x12 inches",
      featured: false,
    },
    {
      id: 3,
      title: "",
      description: "Thomas Shelby..🚬🖤",
      genre: "sketches",
      image: "images/art/sketch3.jpg",
      size: "11x14 inches",
      featured: false,
    },
    {
      id: 4,
      title: "",
      description: "🧿..",
      genre: "sketches",
      image: "images/art/sketch4.jpg",
      size: "14x20 inches",
      featured: true,
    },
    {
      id: 5,
      title: "",
      description: "⚔️💯❣️✏️",
      genre: "sketches",
      image: "images/art/sketch5.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 6,
      title: "",
      description: "⚔️.",
      genre: "sketches",
      image: "images/art/sketch6.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 7,
      title: "",
      description: "✏️",
      genre: "sketches",
      image: "images/art/sketch7.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 8,
      title: "",
      description: "✏️",
      genre: "sketches",
      image: "images/art/sketch8.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 9,
      title: "",
      description: "Ocean eyes👁",
      genre: "sketches",
      image: "images/art/sketch9.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 10,
      title: "",
      description: "✏️",
      genre: "sketches",
      image: "images/art/sketch10.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 11,
      title: "",
      description: "One of my best sketch till date💯❤️🖌️",
      genre: "sketches",
      image: "images/art/sketch11.jpg",
      size: "12x16 inches",
      featured: true,
    },
    {
      id: 12,
      title: "",
      description: "My first 3D wall piece🖼️♥️",
      genre: "sketches",
      image: "images/art/sketch12.jpg",
      size: "12x16 inches",
      featured: true,
    },

    // Wall Pieces
    {
      id: 13,
      title: "",
      description: "3D Feather work.",
      genre: "wallpieces",
      image:
        "images/art/wallpiece1.jpg",
      size: "24x36 inches",
      featured: true,
    },
    {
      id: 14,
      title: "",
      description: "Abstract 'MANDALA - LIPPEN ART' Wallpiece.",
      genre: "wallpieces",
      image:
        "images/art/wallpiece2.jpg",
      size: "30x40 inches",
      featured: false,
    },
    {
      id: 15,
      title: "",
      description: "Tropical Monstra leaf wall piece.",
      genre: "wallpieces",
      image:
        "images/art/wallpiece3.jpg",
      size: "20x20 inches",
      featured: true,
    },
    {
      id: 16,
      title: "",
      description: "An art work showcasing the blend of 'lord Krishna & lord shiva'.",
      genre: "wallpieces",
      image:
        "images/art/wallpiece4.jpg",
      size: "20x20 inches",
      featured: true,
    },

    // Other Art
    {
      id: 17,
      title: "Sculpture Study",
      description: "Three-dimensional art exploring form and space",
      genre: "other",
      image:
        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "Variable dimensions",
      featured: false,
    },
    {
      id: 18,
      title: "Digital Art Print",
      description: "Contemporary digital artwork with traditional influences",
      genre: "other",
      image:
        "https://images.unsplash.com/photo-1578321272171-5076154c54da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "18x24 inches",
      featured: true,
    },
    {
      id: 19,
      title: "Mixed Media",
      description: "Experimental piece combining various materials",
      genre: "other",
      image:
        "https://images.unsplash.com/photo-1578321272177-56bda9db4310?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "16x20 inches",
      featured: false,
    },
    {
      id: 20,
      title: "Ceramic Art",
      description: "Handcrafted ceramic piece with organic forms",
      genre: "other",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "8x8x6 inches",
      featured: true,
    },
    {
      id: 21,
      title: "Textile Art",
      description: "Fiber art exploring traditional weaving techniques",
      genre: "other",
      image:
        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "22x28 inches",
      featured: false,
    },
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
    // Hide initial state and show gallery content
    initialState.style.display = "none";
    galleryContent.style.display = "block";
    emptyState.style.display = "none";
    artGrid.style.display = "grid";

    let filteredArtworks = artworks.filter((art) => art.genre === genre);

    // Update gallery title based on genre
    const genreTitles = {
      sketches: "Sketches",
      wallpieces: "Wall Pieces",
      other: "Other Art",
    };
    galleryTitle.textContent = genreTitles[genre];

    // Update artwork count
    artworkCount.textContent = filteredArtworks.length;

    // Display filtered artworks
    displayArtworks(filteredArtworks);

    // Show empty state if no artworks
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

    artCard.innerHTML = `
    <div class="art-image-container">
        <img src="${artwork.image}" alt="${artwork.description}" class="art-image">
        <div class="art-overlay">
            <div class="art-actions">
                <button class="art-view-btn" data-art-id="${artwork.id}">
                    👁️ View Details
                </button>
            </div>
        </div>
        ${artwork.featured ? '<div class="featured-badge">Featured</div>' : ''}
    </div>
    <div class="art-info">
        <p class="art-description">${artwork.description}</p>
        <p class="art-genre">${getGenreDisplayName(artwork.genre)}</p>
        <p class="art-size">${artwork.size}</p>
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

  // Modal functionality
  function openArtworkModal(artwork) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalGenre = document.getElementById('modalGenre');
    const modalSize = document.getElementById('modalSize');
    const modalClose = document.getElementById('modalClose');
    
    // Set modal content (removed title)
    modalImage.src = artwork.image;
    modalImage.alt = artwork.description; // Use description for alt text
    modalDescription.textContent = artwork.description;
    modalGenre.textContent = getGenreDisplayName(artwork.genre);
    modalSize.textContent = artwork.size;

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Close modal events
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

  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}
