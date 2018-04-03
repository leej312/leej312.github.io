$(document).ready(function(){
	var NO_OF_PAGES = 63;

	$(".right,.left").click(function(){
		var randomPage = Math.floor(Math.random() * NO_OF_PAGES) + 1 ;
		window.location.href =randomPage+".html";
	});
});