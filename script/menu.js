const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  hamburger.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
  close.style.display = 'none';
  hamburger.style.display ='block';
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    close.style.display = 'none';
    hamburger.style.display ='block';
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
