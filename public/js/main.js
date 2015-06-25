$(function () {
	$(".icons li").click(function(e){
		e.preventDefault();
		$(".icons li").removeClass("active");
		$(this).toggleClass("active");
	});
});