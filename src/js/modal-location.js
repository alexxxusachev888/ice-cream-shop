(() => {
  const openModalBtn = document.querySelector('[data-modal-location-open]');
  const closeModalBtn = document.querySelector('[data-modal-location-close]');
  const modal = document.querySelector('[data-modal-location]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();