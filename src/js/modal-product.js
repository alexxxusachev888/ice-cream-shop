(() => {
  const openModalBtn = document.querySelector('[data-modal-products-open]');
  const closeModalBtn = document.querySelector('[data-modal-products-close]');
  const modal = document.querySelector('[data-modal-products]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();
