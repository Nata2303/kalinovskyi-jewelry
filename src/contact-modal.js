(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }
})();
