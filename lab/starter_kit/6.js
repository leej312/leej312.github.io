$('#text').on('click', function(event) {
  event.preventDefault();

  var $clickTarget = $(event.target);

  $clickTarget.css({ transform: 'scale(' + randomNumber(0.5, 1.5) + ')' });

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
});