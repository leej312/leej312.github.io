var documentHeight = $(document).height();
var windowHeight = $(window).height();

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();

  if ( scrollTop + windowHeight >= documentHeight ) {
    $(window).scrollTop(0);
  }
});