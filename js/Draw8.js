/*//////////////////////////////////////////////////////////
//Final wrap up
//////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	/*runProgressBar(time=700*2);*/

	changeTopText(newText = "Thank you for staying with me so far! After these examples I think you're absolutely " + 
							"ready to face the full impact of all chords simultaneously",
		loc = 8/2, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	changeBottomText(newText = "I will share the code on my GitHub account.",
		loc = 5/2, delayDisappear = 0, delayAppear = 1);		
	
	/*Show all*/
	chords.transition().duration(1000)
		.style("opacity", 0.1);

	/*Hide all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke","#DBDBDB");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",0.4);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity",0.4);	
		
};/*Draw8*/