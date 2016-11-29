$(function(){

	//$("div#candidateDiagram").hide();
	$("img#heart").hide();

	$("div#UNHCR").on("click", function(){
		$("h3#projectName").html('Syrian Refugee Project');
		$("img#projectPhoto").attr("src","image/trends.jpg");
		$("p#projectcontent").html('The last year has been harrowing for refugee families around the world. Forced to flee their homes by violence, refugee families leave their home with only what they can carry, lacking the very basics of survival.Your generous donation of a food and water, winter or healthcare package can ensure that refugee families suffering from extreme conditions can survive the coming months and into the future.');
	});
	
	$("div#MercyCorps").on("click", function(){
		$("h3#projectName").html('Food Support Project');
		$("img#projectPhoto").attr("src","image/children.jpg");
		$("p#projectcontent").html('More and more children are fleeing from conflict on their own and arriving unaccompanied in the world’s refugee camps and reception centres. Many are lost or left behind in the chaos of battle and flight. Others set out alone to escape from militia violence and recruitment. Some have been orphaned or left to fend for themselves in environments that are often harsh and hostile. Please donate today to help us protect the youngest victims of violence and conflict.');
	});

	$("div#Habitat").on("click", function(){
		$("h3#projectName").html('Refugee Housing Project');
		$("img#projectPhoto").attr("src","image/mid.jpg");
		$("p#projectcontent").html('More and more children are fleeing from conflict on their own and arriving unaccompanied in the world’s refugee camps and reception centres. Many are lost or left behind in the chaos of battle and flight. Others set out alone to escape from militia violence and recruitment. Some have been orphaned or left to fend for themselves in environments that are often harsh and hostile. Please donate today to help us protect the youngest victims of violence and conflict.');
	});

	$("div#OCHA").on("click", function(){
		$("h3#projectName").html('European Refugee Project');
		$("img#projectPhoto").attr("src","image/year.jpg");
		$("p#projectcontent").html('More and more children are fleeing from conflict on their own and arriving unaccompanied in the world’s refugee camps and reception centres. Many are lost or left behind in the chaos of battle and flight. Others set out alone to escape from militia violence and recruitment. Some have been orphaned or left to fend for themselves in environments that are often harsh and hostile. Please donate today to help us protect the youngest victims of violence and conflict.');
	});

	$("div#Gmail").on("click", function(){
		$("h3#projectName").html('Australian Refugee Project');
		$("img#projectPhoto").attr("src","image/child.jpg");
		$("p#projectcontent").html('More and more children are fleeing from conflict on their own and arriving unaccompanied in the world’s refugee camps and reception centres. Many are lost or left behind in the chaos of battle and flight. Others set out alone to escape from militia violence and recruitment. Some have been orphaned or left to fend for themselves in environments that are often harsh and hostile. Please donate today to help us protect the youngest victims of violence and conflict.');
	});

	$("img.emptyHeart").on("click", function(){
		$(this).hide();
		$(this).parent().find("img#heart").show();
	});

});