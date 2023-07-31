const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
