//import { sendEmail } from './emailSender';

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[data-menu-open]');
  const mobileMenuCloseButton = document.querySelector('[data-menu-close]');
  const contactManagerButton = document.getElementById('contactManager-link');
  const mobileMenu = document.querySelector('.mobile-menu');
  const form = document.getElementById('myForm'); 
  const slider = document.querySelector('.gallery'); // елемент слайдера

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    // slider.classList.add('slider-hidden'); // додати клас для приховування слайдера
  });

  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    // slider.classList.remove('slider-hidden'); // видалити клас для показу слайдера
  });

  contactManagerButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    // slider.classList.remove('slider-hidden'); // видалити клас для показу слайдера
  });

  // Обработчик отправки формы модального окна
  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const comment = document.getElementById('comment').value;

    //sendEmail(name, phone, comment);
    closeModal(); // Закрываем модальное окно после отправки
  });
});