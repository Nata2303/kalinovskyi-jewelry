import { sendEmail } from './emailSender';

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[data-menu-open]');
  const mobileMenuCloseButton = document.querySelector('[data-menu-close]');
  const contactManagerButton = document.getElementById('contactManager-link');
  const mobileMenu = document.querySelector('.mobile-menu');
  const modal = document.querySelector('[data-modal]');
  const form = document.querySelector('.modal-form');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

  contactManagerButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });

  // Обработчик отправки формы модального окна
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const comment = document.getElementById('comment').value;

    sendEmail(name, phone, comment);
    closeModal(); // Закрываем модальное окно после отправки
  });
});