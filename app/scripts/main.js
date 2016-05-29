$( document ).ready(function() {

    $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('shrink');
    }
    else {
        $('.navbar').removeClass('shrink'); }
    });

});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('#navbarSpy').on('activate.bs.scrollspy', function () {
  var currentItem = $(".nav li ul li.active > a").attr('id');
  if(currentItem < 3) {
    $('.zone').removeClass('color-2');
    $('.zone').addClass('color-1');
    $('h2').removeClass('color-2-text');
    $('h2').addClass('color-1-text');
  } else {
    $('.zone').removeClass('color-1');
    $('.zone').addClass('color-2');
    $('h2').removeClass('color-1-text');
    $('h2').addClass('color-2-text');
  }
})
