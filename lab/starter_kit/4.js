$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'cat2.png';
  } else if ( key == 'b' ) {
    img = 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Bananas.svg';
  } else if ( key == 'c' ) {
    img = 'http://www.alsointocats.com/wp-content/uploads/2013/01/lordmeowington-828x1024.png';
  }  else if ( key == 'd' ) {
    img = 'https://images.petsmartassets.com/is/image/PetSmart/SV0401_CATEGORY_HERO-Dog-Dog-20160818?$SV0401$';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});