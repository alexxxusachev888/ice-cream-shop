(() => {
  const openModalBtn = document.querySelector('[data-modal-franchise-open]');
  const closeModalBtn = document.querySelector('[data-modal-franchise-close]');
  const modal = document.querySelector('[data-modal-franchise]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();