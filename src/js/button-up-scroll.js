window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document
          .getElementById('button-up')
          .classList.remove('button-up__scroll')
      : document.getElementById('button-up').classList.add('button-up__scroll');
  } else {
    scrollY <= 120
      ? document
          .getElementById('button-up')
          .classList.remove('button-up__scroll')
      : document.getElementById('button-up').classList.add('button-up__scroll');
  }
};
