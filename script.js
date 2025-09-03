// script.js for Nakkashi Art Gallery
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality when DOM is fully loaded
  initNavigation();
  initImageZoom();
  initContactForm();
  initSmoothScrolling();
  initNewsletterForm();
  initScrollAnimations();
  
  // Initialize Twemoji for consistent emoji rendering
  if (typeof twemoji !== 'undefined') {
      twemoji.parse(document.body, {
          folder: 'svg',
          ext: '.svg'
      });
  }
});

// Navigation functionality
function initNavigation() {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Mobile menu toggle
  if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      });
  }
  
  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          navLinks.classList.remove('active');
          mobileMenuBtn.textContent = '☰';
      });
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
`;
document.head.appendChild(style);