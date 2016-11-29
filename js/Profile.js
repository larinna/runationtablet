$(function(){

	$("img#detailedDiagram").hide();
	$("div#GreyOut").hide();
	$("img#sync2").hide();

	$("div#GreyOut").on("click", function(){
		$("img#detailedDiagram").fadeOut(100);
		$("div#GreyOut").fadeOut(100);
	})

	$("div#Block").on("click", function(){
		$("img#detailedDiagram").fadeIn(100);
		$("div#GreyOut").fadeIn(100);
	})

	$("img#sync").mousedown(function(){
		$("img#sync2").show();
		$(this).hide();
		$("p#CaptionText").html("Last synchronized: Just now")
	})

	$("img#sync2").mouseup(function(){
		$("img#sync").show();
		$(this).hide();
		$("p#CaptionText").html("&nbsp;")
	})

});