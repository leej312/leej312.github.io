$(function() {
  $('#text').click(function() {
    if ( $('.flex-container').hasClass('active') ) {
      $('.flex-item').removeClass('active').css('background', '');
    } else {
      var random = Math.floor(Math.random() * $('.flex-item').length);
	  
	  $('.flex-item').hide().eq(random).show()
    }
  });
});


