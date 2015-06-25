$(function () {

    setTimeout(function () {
        $(".bootscreen").css("display", "none");
    }, 6000);

	setTimeout(function(){
		$(".bsod").css("display", "block");
	}, 120000);

	$(document).keyup(function(e) {
		if (e.keyCode == 13) {
	        e.preventDefault();
	    }
	     if (e.keyCode == 27) {
	        location.reload();
	    }
	});

	$(".game").submit(function(e){
		e.preventDefault();
		$(".content").append($(".answer").val());
		$(".answer").val("");
		var elem = $('.content');
		elem.scrollTop = elem.scrollHeight;
	})

    $(".icons li").click(function (e) {
        e.preventDefault();
        $(".icons li").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".icons li.game").dblclick(function () {
        $("body").css("cursor", "url(../img/cursor.png),wait");

        setTimeout(function () {
            // toggle back after 1 second
            $("body").css("cursor", "url(../img/cursor-normal.png),wait");
            $(".window").addClass("active");

            setTimeout(function () {
	            $.get( "logic/response.php?question=true", function( data ) {
	            	showText(".content", data, 0, 100);
				});
			}, 2000);

        }, 4000);
    });
    var currentdate = new Date();
    var hours = new Date().getHours() % 12;
    if (hours == 0) {
        hours += 12;
    }
    var time = 'am';
    if (currentdate.getHours() >= 12) {
        time = 'pm';
    }
    $('.time span').html(hours + ":" + currentdate.getMinutes() + ' ' + time.toUpperCase());

    $('.window .button.close').on('click', function(){
        $('.window').removeClass('active');
    });

     var showText = function (target, message, index, interval) {   
	  if (index < message.length) {
	    $(target).append(message[index++]);
	    setTimeout(function () { showText(target, message, index, interval); }, interval);
	  }
	}
});