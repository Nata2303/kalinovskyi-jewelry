document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[data-menu-open]');
  const mobileMenuCloseButton = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });
});
