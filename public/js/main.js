$(function () {

	setTimeout(function(){
		$(".bootscreen").css("display", "none");
	},3000);

	setTimeout(function(){
		$(".bsod").css("display", "block");
	},10000);

	$(".icons li").click(function(e){
		e.preventDefault();
		$(".icons li").removeClass("active");
		$(this).toggleClass("active");
	});

	$( ".icons li.game" ).dblclick(function() {
	    $("body").css("cursor", "url(../img/cursor.png),wait");

		setTimeout(function(){
	     // toggle back after 1 second
	     $("body").css("cursor", "url(../img/cursor-normal.png),wait");
	     $(".window").addClass("active");
	   },4000);
	});

});