(() => {
  const openModalBtn = document.querySelector('[data-hero-modal-open]');
  const closeModalBtn = document.querySelector('[data-hero-modal-close]');
  const modal = document.querySelector('[data-hero-modal]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();