/*///////////////////////////////////////////////////////////  
// Draw the other arcs as well  
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,0,0,0, // already drawed arcs
					1,
					7,8,
					13,14,15,16,17,
					20,
					25,26,27,
					35,36,37,38,39,40,41,
					49,50];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index >= 4) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);
	
	changeBottomText(newText = "Science fiction and Action are dominating the picture. Compared to them Satire and Drama are negligibly small. And here are the remaining arcs.",
	loc = 1/2, delayDisappear = 0, delayAppear = 1)	;
	
	changeTopText(newText = "",
	loc = 0, delayDisappear = 51, delayAppear = 52, finalText = true);
	
		changeBottomText(newText = "",
	loc = 1/2, delayDisappear = 51, delayAppear = 52)	;

};/*Draw3*/