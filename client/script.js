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

// Captcha Logic
let currentCaptcha = '';

function generateCaptcha() {
  const canvas = document.getElementById('captchaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  currentCaptcha = captcha;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background noise
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.strokeStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
    ctx.stroke();
  }

  // Draw text
  ctx.font = 'bold 30px "Courier New"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  for (let i = 0; i < captcha.length; i++) {
    const x = 25 + i * 20;
    const y = 25 + (Math.random() * 10 - 5);
    const angle = (Math.random() * 20 - 10) * Math.PI / 180;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 30%)`;
    ctx.fillText(captcha[i], 0, 0);
    ctx.restore();
  }
  
  // Clear error message and input
  const errorMsg = document.getElementById('captchaError');
  if (errorMsg) errorMsg.style.display = 'none';
  const input = document.getElementById('captchaInput');
  if (input) input.value = '';
}

// Modal Functions
function openModal() {
  console.log('Opening Modal...');
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    generateCaptcha(); // Generate new captcha each time modal opens
  } else {
    console.error('Modal element #contactModal not found!');
  }
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
async function handleSubmit(event) {
  event.preventDefault();
  
  // Validate Captcha (Case-insensitive)
  const captchaInput = document.getElementById('captchaInput').value.trim();
  const errorMsg = document.getElementById('captchaError');
  
  console.log('Captcha Attempt:', captchaInput, 'Expected:', currentCaptcha);

  if (captchaInput.toLowerCase() !== currentCaptcha.toLowerCase()) {
    console.warn('Captcha mismatch!');
    if (errorMsg) errorMsg.style.display = 'flex';
    document.getElementById('captchaInput').focus();
    return;
  }
  
  if (errorMsg) errorMsg.style.display = 'none';
  
  let formData;
  try {
    formData = {
      businessName: document.getElementById('businessName').value,
      yourName: document.getElementById('yourName').value,
      whatsappNumber: document.getElementById('whatsappNumber').value,
      hasWebsite: document.getElementById('hasWebsite').value,
      primaryGoal: document.getElementById('primaryGoal').value
    };
  } catch (err) {
    console.error('Error collecting form data:', err);
    alert('An internal error occurred. Please try again later.');
    return;
  }

  try {
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Get API URL from config (loaded from .env)
    const API_URL = API_CONFIG.baseURL;
    
    console.log('Submitting to:', `${API_URL}/landing-contact/submit`);
    
    const response = await fetch(`${API_URL}/landing-contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      // Show success modal
      document.getElementById('successName').textContent = formData.yourName;
      closeModal();
      
      setTimeout(() => {
        const successModal = document.getElementById('successModal');
        successModal.classList.add('active');
      }, 300);

      // Reset form
      document.getElementById('contactForm').reset();
    } else {
      // Show error message
      alert(result.message || 'Something went wrong. Please try again.');
    }

    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit form. Please check your connection and try again.');
    
    // Reset button
    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Submit & Start My Setup';
    submitBtn.disabled = false;
  }
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

  // Open modal automatically on page load
  setTimeout(() => openModal(), 500);

  // Initialize carousel (if elements exist)
  initCarousel();
});

// Carousel functionality
let currentSlide = 0;
const totalSlides = 7;

function initCarousel() {
  // Create indicators
  const indicatorsContainer = document.getElementById('carouselIndicators');
  if (!indicatorsContainer) return; // Exit if element doesn't exist
  
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
  if (!track) return; // Exit if element doesn't exist
  
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

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 5;
let testimonialAutoplayInterval;

function initTestimonials() {
  // Create indicators
  const indicatorsContainer = document.getElementById('testimonialIndicators');
  for (let i = 0; i < totalTestimonials; i++) {
    const indicator = document.createElement('div');
    indicator.className = 'testimonial-indicator';
    if (i === 0) indicator.classList.add('active');
    indicator.onclick = () => goToTestimonial(i);
    indicatorsContainer.appendChild(indicator);
  }
  
  // Start autoplay
  startTestimonialAutoplay();
}

function moveTestimonial(direction) {
  currentTestimonial += direction;
  
  if (currentTestimonial < 0) {
    currentTestimonial = totalTestimonials - 1;
  } else if (currentTestimonial >= totalTestimonials) {
    currentTestimonial = 0;
  }
  
  updateTestimonials();
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateTestimonials();
}

function updateTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const offset = -currentTestimonial * 100;
  track.style.transform = `translateX(${offset}%)`;
  
  // Update indicators
  const indicators = document.querySelectorAll('.testimonial-indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentTestimonial) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
  
  // Restart autoplay
  stopTestimonialAutoplay();
  startTestimonialAutoplay();
}

function startTestimonialAutoplay() {
  stopTestimonialAutoplay();
  testimonialAutoplayInterval = setInterval(() => {
    moveTestimonial(1);
  }, 5000);
}

function stopTestimonialAutoplay() {
  if (testimonialAutoplayInterval) {
    clearInterval(testimonialAutoplayInterval);
  }
}

// Initialize testimonials on page load
document.addEventListener('DOMContentLoaded', () => {
  initTestimonials();
  
  // Pause autoplay on hover
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');
  if (testimonialsCarousel) {
    testimonialsCarousel.addEventListener('mouseenter', stopTestimonialAutoplay);
    testimonialsCarousel.addEventListener('mouseleave', startTestimonialAutoplay);
  }
});

// Newsletter form submission
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  
  console.log('Newsletter subscription:', email);
  alert('Thank you for subscribing to our newsletter!');
  event.target.reset();
}

// Tab switching functionality
let currentTabIndex = 0;
let tabAutoplayInterval;

function switchTab(index) {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  
  currentTabIndex = index;
  
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  panels.forEach((panel, i) => {
    if (i === index) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
  
  // Restart autoplay
  stopTabAutoplay();
  startTabAutoplay();
}

function startTabAutoplay() {
  const totalTabs = document.querySelectorAll('.tab-btn').length;
  tabAutoplayInterval = setInterval(() => {
    currentTabIndex = (currentTabIndex + 1) % totalTabs;
    switchTab(currentTabIndex);
  }, 5000);
}

function stopTabAutoplay() {
  if (tabAutoplayInterval) {
    clearInterval(tabAutoplayInterval);
  }
}

// Initialize tab autoplay on page load
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  if (tabs.length > 0) {
    startTabAutoplay();
    
    // Pause autoplay on hover
    const tabsContainer = document.querySelector('.features-tabs');
    if (tabsContainer) {
      tabsContainer.addEventListener('mouseenter', stopTabAutoplay);
      tabsContainer.addEventListener('mouseleave', startTabAutoplay);
    }
  }
});