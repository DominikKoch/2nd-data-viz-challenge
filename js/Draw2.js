/*//////////////////////////////////////////////////////////	
// Show Arc for the first categories
//////////////////////////////////////////////////////////*/
function Draw2(){ 

	d3.selectAll(".arc")
		.transition().delay(0*700).duration(100)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});

	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Show and run the progressBar*/
	runProgressBar(time=2*700);
				
	/*Initiate all arcs but only show the first 4 arcs*/
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		if(d.index < 4) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });
	  
	/*Show the ticks*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function(d, i, j) {return j > 3 ? 0 : "#000"; });

	/*Add the labels for the %'s*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function(d, i, j) {return j > 3 ? 0 : 1; });

	/*Show the names*/
	d3.selectAll(".titles")
	  .transition().duration(2000)
	  .attr("opacity", function(d, i) {return d.index > 3 ? 0 : 1; });
	  
	/*Switch text*/
	changeTopText(newText = "The bigger the arc, the more people have bought at least one book of this category together with another book.",
	loc = 8/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
	changeBottomText(newText = "Science fiction and Action are dominating the picture. Compared to them Satire and Drama are negligibly small...",
	loc = 1/2, delayDisappear = 0, delayAppear = 1)	;
	
};/*Draw2*/

