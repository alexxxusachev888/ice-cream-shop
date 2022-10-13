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

(() => {
  const openModalBtn = document.querySelector('[data-modal-products2-open]');
  const closeModalBtn = document.querySelector('[data-modal-products2-close]');
  const modal = document.querySelector('[data-modal-products2]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const openModalBtn = document.querySelector('[data-modal-products3-open]');
  const closeModalBtn = document.querySelector('[data-modal-products3-close]');
  const modal = document.querySelector('[data-modal-products3]');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
})();
