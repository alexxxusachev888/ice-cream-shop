(function () {
  const openModalBtn = document.querySelector("[data-about-modal-open]");
  const closeModalBtn = document.querySelector("[data-about-modal-close]");
  const modal = document.querySelector("[data-about-modal]");

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }
})();