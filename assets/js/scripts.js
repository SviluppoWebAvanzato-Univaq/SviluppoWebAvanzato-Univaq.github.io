$(function() {
	$('#totop').hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {
			$('#totop').fadeIn(200);
		} else {
			$('#totop').fadeOut(200); 
		}
	});
	
	$("#menutoggle").on("click",function(){$("#menu1").toggleClass("d-none"); $(this).toggleClass("collapsed");});
});


