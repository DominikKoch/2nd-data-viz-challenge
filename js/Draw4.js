/*///////////////////////////////////////////////////////////
// Highlight the biggest chord between Science fiction & Action
//////////////////////////////////////////////////////////*/
function Draw4(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Science fiction & Action intro text*/
	changeTopText(newText = "Let's take a closer look at the connection between Science Fiction and Action.",
		loc = 0, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);	
	
    /*Make the non Science fiction & Action arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", function(d) {
			if(d.index != 1 && d.index != 3) {return opacityValue;}
		});		
	
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 1 || j == 3) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 1 || j == 3) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 1 || d.index == 3) {return 1;} else {return opacityValue;}});

	/*Show only the Science fiction & Action chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 1 && d.target.index == 3) 
				{return opacityValueBase;}
			else {return 0;}
		});
		
	
};/*Draw4*/










