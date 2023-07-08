document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openSecondModalBtn: document.querySelector('[data-modal-open-second]'),
      openThreeModalBtn: document.querySelector('[data-modal-open-three]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      backdrop: document.querySelector('.backdrop'),
    };
    refs.openModalBtn.addEventListener('click', openModal);
    refs.openSecondModalBtn.addEventListener('click', openModal);
    refs.openThreeModalBtn.addEventListener('click', openModal);
    refs.closeModalBtn.addEventListener('click', closeModal);

    function openModal() {
      refs.modal.classList.add('is-visible');
      refs.backdrop.classList.add('is-visible');
    }

    function closeModal() {
      refs.modal.classList.remove('is-visible');
      refs.backdrop.classList.remove('is-visible');
    }
  })();
});