/*//////////////////////////////////////////////////////////////////////////*/
//Show only the largest chords
/*//////////////////////////////////////////////////////////////////////////*/
function Draw6(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	changeTopText(newText = "Highlighted all chords with more than 15.000 observations.",
		loc = -10/2, delayDisappear = 0, delayAppear = 1, finalText = true, xloc=-0, w=300);
	
	/*Stop the colour changing*/
	d3.selectAll(".ScienceFictionToActionArc")
		.transition().duration(700)
		.attr("fill", colors[1])
		.style("stroke", colors[1])
		.attr("opacity", opacityValue);	

	d3.selectAll(".ActionToScienceFictionArc")
		.transition().duration(700)
		.attr("fill", colors[3])
		.style("stroke", colors[3])
		.attr("opacity", opacityValue);		
	
	/*Remove the arcs*/
	d3.selectAll(".ScienceFictionToActionArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".ScienceFictionToActionArc").remove();});

	d3.selectAll(".ActionToScienceFictionArc")
		.transition().duration(2000)
		.attr("opacity", 0)
		.each("end", function() {d3.selectAll(".ActionToScienceFictionArc").remove();});			
		
		
	/*Show only the largest chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 1 && d.target.index ==  3) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index ==  4) {return opacityValueBase;}
			else if(d.source.index == 1 && d.target.index == 14) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index ==  4) {return opacityValueBase;}
			else if(d.source.index == 3 && d.target.index == 14) {return opacityValueBase;}
			else if(d.source.index == 4 && d.target.index == 14) {return opacityValueBase;}
			else {return 0;}
		});
	
		
	/*Show all ticks and texts again*/
	/*Ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke", "#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity", 1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", 1);
				
};/*Draw6*/