document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[data-menu-open]');
  const mobileMenuCloseButton = document.querySelector('[data-menu-close]');
  const contactManagerButton = document.getElementById('contactManager-link');
  const mobileMenu = document.querySelector('.mobile-menu');
  const modal = document.querySelector('[data-modal]');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

  contactManagerButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });
});