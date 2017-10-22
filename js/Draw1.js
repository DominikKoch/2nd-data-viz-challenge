/*//////////////////////////////////////////////////////////
// Introduction 
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();
		
	/*Show and run the progressBar*/
	runProgressBar(time=700*28);
		
	changeTopText(newText = "Fancy visualization?",
	loc = 8/2, delayDisappear = 0, delayAppear = 1);
	
	changeTopText(newText = "This is a boring pie chart!",
	loc = 8/2, delayDisappear = 6, delayAppear = 7);

	changeTopText(newText = "And we all know - Pie charts are evil ...",
	loc = 8/2, delayDisappear = 12, delayAppear = 13);
	
	changeBottomText(newText = "... and the only thing worse than a pie chart is lots of them.",
	loc = 1/2, delayDisappear = 0, delayAppear = 17);
	
	changeBottomText(newText = "... luckily this is way more than a strange looking pie chart.",
	loc = 1/2, delayDisappear = 24, delayAppear = 25, finalText = true);
	
	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(28*700).duration(2100)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});
		
};/*Draw1*/