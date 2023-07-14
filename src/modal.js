document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openSecondModalBtn: document.querySelector('[data-modal-open-second]'),
      openThreeModalBtn: document.querySelector('[data-modal-open-three]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      backdrop: document.querySelector('.backdrop'),
      nameInput: document.getElementById('name'),
      phoneInput: document.getElementById('phone'),
      commentInput: document.getElementById('comment'),
      modalForm: document.querySelector('.modal-form'),
      slider: document.querySelector('.gallery'), // елемент слайдера
    };

    refs.openModalBtn.addEventListener('click', openModal);
    refs.openSecondModalBtn.addEventListener('click', openModal);
    refs.openThreeModalBtn.addEventListener('click', openModal);
    refs.closeModalBtn.addEventListener('click', closeModal);
    refs.modalForm.addEventListener('submit', handleSubmit);
    refs.slider.addEventListener('click', openModal);
    refs.slider.addEventListener('click', closeModal);

    function openModal() {
      refs.modal.classList.add('is-visible');
      refs.backdrop.classList.add('is-visible');
      refs.slider.classList.add('slider-hidden'); // додати клас для приховування слайдера
    }

    function closeModal() {
      refs.modal.classList.remove('is-visible');
      refs.backdrop.classList.remove('is-visible');
      refs.slider.classList.remove('slider-hidden'); // видалити клас для показу слайдера
    }

    function handleSubmit(event) {
      event.preventDefault();
      const name = refs.nameInput.value;
      const phone = refs.phoneInput.value;
      const comment = refs.commentInput.value;

      // Отримуємо раніше збережений масив даних з localStorage або створюємо новий пустий масив
      const savedData = JSON.parse(localStorage.getItem('formData')) || [];

      // Додаємо новий об'єкт з відправленими даними до масиву
      savedData.push({ name, phone, comment });

      // Зберігаємо оновлений масив даних у localStorage
      localStorage.setItem('formData', JSON.stringify(savedData));

      // Закриваємо модальне вікно
      closeModal();
    }
  })();
});
