/*//////////////////////////////////////////////////////////////////////////*/
//Show only the smallest chords
/*//////////////////////////////////////////////////////////////////////////*/
function Draw7(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	changeTopText(newText = "In comparison the 7 smallest categories each contain less than 10.000 observations in total.",
		loc = 0/2, delayDisappear = 0, delayAppear = 1, finalText = true, xloc=-0, w=300);
	
			
	/*Show only the small chords*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index ==  0 || d.target.index ==  0 || 
			   d.source.index ==  2 || d.target.index ==  2 || 
			   d.source.index ==  6 || d.target.index ==  6 || 
			   d.source.index == 10 || d.target.index == 10 || 
			   d.source.index == 11 || d.target.index == 11 || 
			   d.source.index == 20 || d.target.index == 20 || 
			   d.source.index == 21 || d.target.index == 21 ) {return opacityValueBase;}
			else {return 0;}
		});
				
};/*Draw7*/