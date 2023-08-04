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

// code for local storage
const form = document.querySelector('.contact-form');
const formData = {
  name: document.querySelector('.contact-name').value,
  email: document.querySelector('.contact-email').value,
  message: document.querySelector('.contact-message').value,
};

let getFormData = window.localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  document.querySelector('.contact-name').value = getFormData.name;
  document.querySelector('.contact-email').value = getFormData.email;
  document.querySelector('.contact-message').value = getFormData.message;
}

Array.from(form).forEach((element) => {
  element.addEventListener('input', () => {
    formData.name = document.querySelector('.contact-name').value;
    formData.email = document.querySelector('.contact-email').value;
    formData.message = document.querySelector('.contact-message').value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});