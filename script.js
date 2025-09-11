// script.js for Nakkashi Art Gallery - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is fully loaded
    initNavigation();
    initImageZoom();
    initContactForm();
    initSmoothScrolling();
    initNewsletterForm();
    initScrollAnimations();
    initSearchBar();
    initCartIcon();
    initUserIcon();
    
    // Initialize Twemoji for consistent emoji rendering
    if (typeof twemoji !== 'undefined') {
        twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg'
        });
    }
  });
  
  // Navigation functionality - FIXED
  function initNavigation() {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if elements exist before adding event listeners
    if (!header || !mobileMenuBtn || !navLinks) {
      console.warn('Navigation elements not found. Skipping navigation initialization.');
      return;
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        
        // Prevent body scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('active') && 
          !navLinks.contains(event.target) && 
          !mobileMenuBtn.contains(event.target)) {
          navLinks.classList.remove('active');
          mobileMenuBtn.textContent = '☰';
          document.body.style.overflow = '';
      }
    });
  }
  
  // Search functionality - NEW
  function initSearchBar() {
    const searchIcon = document.querySelector('.nav-icon');
    
    if (!searchIcon) {
      console.warn('Search icon not found. Skipping search initialization.');
      return;
    }
    
    // Create search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
      <div class="search-container">
        <input type="text" placeholder="Search products..." class="search-input">
        <button class="search-close">✕</button>
      </div>
    `;
    
    document.body.appendChild(searchOverlay);
    
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchClose = searchOverlay.querySelector('.search-close');
    
    // Toggle search overlay
    searchIcon.addEventListener('click', function() {
      searchOverlay.classList.add('active');
      searchInput.focus();
    });
    
    // Close search overlay
    searchClose.addEventListener('click', function() {
      searchOverlay.classList.remove('active');
    });
    
    // Close when clicking outside search container
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });
    
    // Handle search input
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(searchInput.value);
      }
    });
    
    function performSearch(query) {
      if (!query || query.trim() === '') {
        showNotification('Please enter a search term', 'error');
        return;
      }
      
      showNotification(`Searching for: ${query}`, 'info');
      // In a real implementation, you would redirect to a search page or filter results
      searchOverlay.classList.remove('active');
    }
  }
  
  // Cart icon functionality - NEW
  function initCartIcon() {
    const cartIcon = document.querySelectorAll('.nav-icon')[1]; // Second icon is cart
    
    if (!cartIcon) return;
    
    cartIcon.addEventListener('click', function() {
      showNotification('Cart functionality coming soon!', 'info');
    });
  }
  
  // User icon functionality - NEW
  function initUserIcon() {
    const userIcon = document.querySelectorAll('.nav-icon')[2]; // Third icon is user
    
    if (!userIcon) return;
    
    userIcon.addEventListener('click', function() {
      showNotification('User account functionality coming soon!', 'info');
    });
  }
  
  // Image zoom functionality
  function initImageZoom() {
    const productImages = document.querySelectorAll('.product-image');
    
    productImages.forEach(image => {
        image.addEventListener('click', function() {
            // Create overlay for image zoom
            const overlay = document.createElement('div');
            overlay.className = 'image-zoom-overlay';
            
            // Create zoomed image
            const zoomedImg = document.createElement('img');
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            zoomedImg.className = 'zoomed-image';
            
            // Add to overlay
            overlay.appendChild(zoomedImg);
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-zoom';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(overlay);
                document.body.style.overflow = ''; // Re-enable scrolling
            });
            
            overlay.appendChild(closeBtn);
            
            // Close when clicking on overlay
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            });
            
            // Add to page
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
  }
  
  // Contact form functionality
  function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Create WhatsApp message
            const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/917623861655?text=${whatsappMessage}`, '_blank');
            
            // Show success message
            showNotification('Message prepared for WhatsApp! Please send it to complete your inquiry.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
  }
  
  // Newsletter form functionality
  function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Simulate subscription success
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
  }
  
  // Smooth scrolling for navigation links
  function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
  }
  
  // Scroll animations for elements
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .value-card, .team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Set initial state for animated elements
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
  }
  
  // Utility function to validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Notification system
  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
  }
  
  // Add CSS for JavaScript components
  const style = document.createElement('style');
  style.textContent = `
    /* Image zoom overlay */
    .image-zoom-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: zoom-out;
    }
    
    .zoomed-image {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }
    
    .close-zoom {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        z-index: 10001;
    }
    
    /* Notifications */
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 4px;
        color: white;
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.success {
        background-color: #4CAF50;
    }
    
    .notification.error {
        background-color: #F44336;
    }
    
    .notification.info {
        background-color: #2196F3;
    }
    
    /* Mobile menu active state */
    .nav-links.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    /* Search overlay */
    .search-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        padding-top: 100px;
    }
    
    .search-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    .search-container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 600px;
        display: flex;
        align-items: center;
    }
    
    .search-input {
        flex: 1;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        outline: none;
    }
    
    .search-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-left: 15px;
        color: #333;
    }
  `;
  document.head.appendChild(style);