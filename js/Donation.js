$(function(){

	$("div#BackgroundGreyOut").hide();
	$("div#popup").hide();

	$("span#makepayment").on("click", function(){
		$("div#BackgroundGreyOut").fadeIn(100);
		$("div#popup").fadeIn(100);
	})

	$("div#BackgroundGreyOut,div#Confirm,div#Cancel").on("click", function(){
		$("div#BackgroundGreyOut").fadeOut(100);
		$("div#popup").fadeOut(100);
	})

	$("div#amount1").click(function(){
		$(this).css({"background":"#ffc223"});
		$("div#amount2").css({"background":"#efefef"});
		$("div#amount3").css({"background":"#efefef"});
	})

	$("div#amount2").click(function(){
		$(this).css({"background":"#ffc223"});
		$("div#amount1").css({"background":"#efefef"});
		$("div#amount3").css({"background":"#efefef"});
	})

	$("div#amount3").click(function(){
		$(this).css({"background":"#ffc223"});
		$("div#amount1").css({"background":"#efefef"});
		$("div#amount2").css({"background":"#efefef"});
	})

	$("span#makepayment").mousedown(function(){
		$(this).css({"background":"#888888","color":"aqua" })
	})

	$("span#makepayment").mouseup(function(){
		$(this).css({"background":"#ffc223","color":"white" })
	})



});