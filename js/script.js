$(document).ready(function() {
//hover
	// $("nav li").mouseover(function() {
	// 	$(this).fadeTo("fast", .25);
	// });
	// $("nav li").mouseleave(function() {
	// 	$(this).fadeTo("fast", 1);
	// });
//click
	// $("nav li").click(function() {
	// 	$(this).toggleClass("newbg");
	// 	$(".newbg").text("Clicked!");

		// $(this).text("Clicked!").css( {"background-color": "#D9BFB3"});
	// });

//navbar stuff
	if ($(window).width() > 650 ) {
			$("#navbutton").css( {"display": "none"});
		}
	$(window).resize(function() {
		if ($(window).width() > 650 ) {
			$("#navbutton").css( {"display": "none"});
			$(".mobilenav").css( {"display": "none"});
		} else if ($(window).width() < 650 ) {
			$("#navbutton").css( {"display": "inline"});
			$(".mobilenav").css( {"display": "none"});
		}
	});
	$("#navbutton").click(function() {
		$(".mobilenav").toggle("fast").removeCss("height");
	});




}); //closer for .ready()


