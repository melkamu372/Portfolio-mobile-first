const contactForm = document.getElementById('contact-me-form');
const validateEmail = (email) => {
  if (email !== email.toLowerCase()) return false;
  return true;
};

contactForm.addEventListener('submit', (e) => {
  const invalidEmail = 'The email address you entered is not valid. email should be in lower case, please try again';
  const displayMsg = document.getElementById('error-msg');
  e.preventDefault();
  if (!validateEmail(contactForm.elements.email.value.trim())) {
    displayMsg.innerText = invalidEmail;
    displayMsg.style.color = '#ff0000';
    displayMsg.style.background = '#fff';
    displayMsg.style.fontSize = '15px';
  } else {
    displayMsg.innerText = '';
    contactForm.submit();
  }
});