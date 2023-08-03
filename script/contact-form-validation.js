const contactForm = document.getElementById('contact-me-form');
const form = document.querySelector('.contact-form');
const validateEmail = (email) => {
  if (email !== email.toLowerCase()) return false;
  return true;
};