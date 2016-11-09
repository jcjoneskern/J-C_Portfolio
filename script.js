$(document).ready(function() {
//hover
	$("nav li").mouseover(function() {
		$(this).fadeTo("fast", .25);
	});
	$("nav li").mouseleave(function() {
		$(this).fadeTo("fast", 1);
	});
//click
	$("nav li").click(function() {
		$(this).toggleClass("newbg");
		$(".newbg").text("Clicked!");

		// $(this).text("Clicked!").css( {"background-color": "#D9BFB3"});
	});
}); //closer for .ready()