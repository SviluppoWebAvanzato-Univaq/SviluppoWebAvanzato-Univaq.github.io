$(function() {
	$('#totop').hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {
			$('#totop').fadeIn(200);
		} else {
			$('#totop').fadeOut(200); 
		}
	});
});


