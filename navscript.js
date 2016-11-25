$(document).ready(function() {
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