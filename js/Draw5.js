/*//////////////////////////////////////////////////////////////////////////*/
//Colour swapping
/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Text*/
	changeTopText(newText = "With 44.698 observations that is the biggest chord in this visualization.",
		loc = 0, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    /*Make the non Science fiction & Action arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", opacityValue);		

	/*Show only the chord part of the arc*/
	var arcScienceFiction = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(0.67)
				.endAngle(0.922);
				
	svg.append("path")
		.attr("class","ScienceFictionToActionArc")
		.attr("d", arcScienceFiction)
		.attr("fill", colors[1])
		.style('stroke', colors[1]);
		
	repeat();
	
	var arcAction = d3.svg.arc()
			.innerRadius(innerRadius)
			.outerRadius(outerRadius)
			.startAngle(1.028)
			.endAngle(1.285);
				
	svg.append("path")
		.attr("class","ActionToScienceFictionArc")
		.attr("d", arcAction)
		.attr("fill", colors[3])
		.style('stroke', colors[3]);
		
	repeat();
	
	/*Repeatedly let an arc change colour*/
	function repeat() {
		d3.selectAll(".ActionToScienceFictionArc")
			.transition().duration(700)
			.attr("fill", "#ffe399")
			.style('stroke', "#ffe399")
			.transition().duration(700)
			.attr("fill", colors[3])
			.style('stroke', colors[3])
			.each("end", repeat)
			;
		d3.selectAll(".ScienceFictionToActionArc")
			.transition().duration(700)
			.attr("fill", "#ffb199")
			.style('stroke', "#ffb199")
			.transition().duration(700)
			.attr("fill", colors[1])
			.style('stroke', colors[1])
			.each("end", repeat)
			;
	};
	
};/*Draw5*/