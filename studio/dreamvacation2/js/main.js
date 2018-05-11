$(function() {
	$('.animation-link').click(function(event) {
		event.preventDefault();

		var linkUrl = $(this).attr('href');

		$('body').addClass('transitioning');

		window.setTimeout(function() {
			window.href= Url;
		}, 1000);
	});
});


