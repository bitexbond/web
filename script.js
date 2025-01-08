// Smooth scrolling for anchor links and logo
document.querySelectorAll('a[href^="#"], .logo').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.classList.contains('logo') 
      ? document.querySelector('.hero')
      : document.querySelector(this.getAttribute('href'));
      
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Update navigation active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 5px 15px rgba(240, 185, 11, 0.3)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
});

// Handle About button click to expand section
const aboutSection = document.getElementById('about');
const aboutButton = document.querySelector('a[href="#about"]');

aboutButton.addEventListener('click', () => {
  const currentHeight = parseFloat(window.getComputedStyle(aboutSection).minHeight);
  const newHeight = currentHeight * 1.0;
  aboutSection.style.minHeight = `${newHeight}px`;
});

// Handle CTA button clicks to expand hero section
const heroSection = document.querySelector('.hero');
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');

ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentHeight = parseFloat(window.getComputedStyle(heroSection).height);
    const newHeight = currentHeight * 1.2;
    heroSection.style.height = `${newHeight}px`;
  });
});
