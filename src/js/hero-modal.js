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

(() => {
  const refs = {
    openModalBtnMobile: document.getElementById('buy-now-btn'),
    modal: document.querySelector('[data-hero-modal]'),
    menuMob: document.querySelector('.js-menu-container')
  };

  refs.openModalBtnMobile.addEventListener('click', openModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.menuMob.classList.remove('is-open');
  }
})();