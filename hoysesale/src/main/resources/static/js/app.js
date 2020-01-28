$( window ).on( "load", function() {

  //COMMON HEADER
  $(window).scroll(function(){
    if ($('.common-header').offset().top > 56) {
      $('.common-header').addClass('solid');
    } else {
      $('.common-header').removeClass('solid');
    }
  });

});
