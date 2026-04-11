// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
  });
});

// Modal Functions
function openModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSuccessModal();
  }
});

// Form Submission
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = {
    businessName: document.getElementById('businessName').value,
    yourName: document.getElementById('yourName').value,
    whatsappNumber: document.getElementById('whatsappNumber').value,
    hasWebsite: document.getElementById('hasWebsite').value,
    primaryGoal: document.getElementById('primaryGoal').value
  };

  // Log form data (in production, send to backend)
  console.log('Form submitted:', formData);

  // Show success modal
  document.getElementById('successName').textContent = formData.yourName;
  closeModal();
  
  setTimeout(() => {
    const successModal = document.getElementById('successModal');
    successModal.classList.add('active');
  }, 300);

  // Reset form
  document.getElementById('contactForm').reset();

  // In production, you would send this data to your backend
  // Example:
  // fetch('/api/submit-form', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // })
  // .then(response => response.json())
  // .then(data => {
  //   // Handle success
  //   // Send WhatsApp message via API
  // })
  // .catch(error => console.error('Error:', error));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#contact') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
  }

  lastScroll = currentScroll;
});

// Animate elements on scroll (simple intersection observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all feature cards and other animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.feature-card, .relationship-card, .ps-card, .testimonial-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Initialize carousel
  initCarousel();
});

// Carousel functionality
let currentSlide = 0;
const totalSlides = 7;

function initCarousel() {
  // Create indicators
  const indicatorsContainer = document.getElementById('carouselIndicators');
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToSlide(i);
    indicatorsContainer.appendChild(indicator);
  }
}

function moveCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById('featuresTrack');
  const offset = -currentSlide * 100;
  track.style.transform = `translateX(${offset}%)`;
  
  // Reset scroll position of all cards
  const cards = track.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.scrollTop = 0;
  });
  
  // Update indicators
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Auto-play carousel (optional)
let autoplayInterval;

function startAutoplay() {
  stopAutoplay(); // Clear any existing interval
  autoplayInterval = setInterval(() => {
    moveCarousel(1);
  }, 6000); // Changed to 6 seconds for better readability
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
}

// Start autoplay on load
startAutoplay();

// Pause autoplay on hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
  carouselContainer.addEventListener('mouseenter', stopAutoplay);
  carouselContainer.addEventListener('mouseleave', startAutoplay);
}

// Newsletter form submission
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  
  // Log email (in production, send to backend)
  console.log('Newsletter subscription:', email);
  
  // Show success message
  alert('Thank you for subscribing to our newsletter!');
  
  // Reset form
  event.target.reset();
  
  // In production, send to backend
  // fetch('/api/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email })
  // })
}