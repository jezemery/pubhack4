$(function () {
	$(".icons li").click(function(e){
		e.preventDefault();
		$(".icons li").removeClass("active");
		$(this).toggleClass("active");
	});

	$( ".icons li" ).dblclick(function() {
		setTimeout(function(){
	     // toggle back after 1 second
	     $("body").css("cursor", "url(../img/cursor.png),wait");
	   },2000);

		setTimeout(function(){
	     // toggle back after 1 second
	     $("body").css("cursor", "url(../img/cursor-normal.png),wait");
	   },4000);
	});

});