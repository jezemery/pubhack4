$(function () {
	$(".game1 .section").val(1);
    setTimeout(function () {
        $(".bootscreen").css("display", "none");
        $('#boot')[0].play();
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

    var button = $('.button');
    button.mousedown(function(){
        $(this).addClass('active')
    });
    button.mouseup(function(){
        $(this).removeClass('active')
    });

    $(".game").submit(function(e){
		e.preventDefault();
		$(".content").append("<li>" + $(".game1 .answer").val() + "</li>");
		var answer = $(".game1 .answer").val();

		$(".game1 .section").val( function(i, oldval) {
		    return parseInt( oldval, 10) + 1;
		});
		
		setTimeout(function () {
            $.get( "logic/response.php?section=" + $(".game1 .section").val() + "&answer=" + answer, function( data ) {
            	showText(".content", data, 0, 100);
			});
		}, 2000);

		$(".answer").val("");
		var elem = $('.content');
		elem.scrollTop = elem.scrollHeight;
	});

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
            $(".window.game").addClass("active");

            setTimeout(function () {
	            $.get( "logic/response.php?question=true", function( data ) {
	            	showText(".content", data + "\n", 0, 100);
				});
			}, 2000);

        }, 4000);
    });
    $(".icons li.notporn").dblclick(function () {
        $("body").css("cursor", "url(../img/cursor.png),wait");

        setTimeout(function () {
            // toggle back after 1 second
            $("body").css("cursor", "url(../img/cursor-normal.png),wait");
            $(".window.notporn").addClass("active");

        }, 4000);
    });
    $(".icons li.netscape").dblclick(function () {
        $("body").css("cursor", "url(../img/cursor.png),wait");

        setTimeout(function () {
            // toggle back after 1 second
            $("body").css("cursor", "url(../img/cursor-normal.png),wait");
            $(".window.netscape").addClass("active");
            $('#modem')[0].play();
        }, 4000);
    });
    $(".icons li.notjoe").dblclick(function () {
        $("body").css("cursor", "url(../img/cursor.png),wait");

        setTimeout(function () {
            // toggle back after 1 second
            $("body").css("cursor", "url(../img/cursor-normal.png),wait");
            $(".window.notjoe").addClass("active");
        }, 4000);
    });
    $(".icons li.ronjeremy").dblclick(function () {
        $("body").css("cursor", "url(../img/cursor.png),wait");

        setTimeout(function () {
            // toggle back after 1 second
            $("body").css("cursor", "url(../img/cursor-normal.png),wait");
            $(".window.ronjeremy").addClass("active");
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
    var minutes = currentdate.getMinutes();
    if (minutes < 10) {
        minutes = '0'+minutes;
    }
    $('.time span').html(hours + ":" + minutes + ' ' + time.toUpperCase());

    $('.window .button.close').on('click', function(){
        if($(this).parent().parent().parent().attr('class').indexOf('netscape') > -1){
                $('#modem')[0].pause();
        }
        $(this).parent().parent().parent().removeClass('active');
    });

     var showText = function (target, message, index, interval) {   
	  if (index < message.length) {
	    $(target).append(message[index++]);
	    setTimeout(function () { showText(target, message, index, interval); }, interval);
	  }
	}
});