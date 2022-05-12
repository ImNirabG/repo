var toggleSize = true;


$('.uk-button').on('click', function() {
  $('iframe').animate({
    width: toggleSize ? 500 : 700,
    height: toggleSize ? 500 : 700
  }, 250);

  toggleSize = !toggleSize;

});
