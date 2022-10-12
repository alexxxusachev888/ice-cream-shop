$('.js-anchor').click(function () {
  $('.js-mobile-menu').removeClass('is-open');
});

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;
    }
  });
});
