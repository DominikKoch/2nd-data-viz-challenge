/*//////////////////////////////////////////////////////////
////////////////// Set up the Data /////////////////////////
//////////////////////////////////////////////////////////*/

var NameProvider = ["Satire","Science fiction","Drama","Action","Romance",
					"Mystery","Horror","Self help","Health","Guide",
					"Travel","Children.s","Religion","Science","History",
					"Math","Anthology","Poetry","Encyclopedias","Dictionaries",
					"Comics","Art","Cookbooks","Diaries","Journals"];
	
var matrix = [
[0.0,0.0,0,0.0,0.05,0.0,0,0.0,0,0.09,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0],
[0.0,0.0,0,4.7,2.21,0.24,0.06,0.47,0.53,0.55,0.07,0.09,0.49,0.35,2.96,0.12,0.08,0.0,0.06,0.0,0,0.2,0.19,1.15,1.19],
[0.0,0.0,0,0.0,0.17,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.09,0.0,0,0.0,0,0.0,0,0.0,0,0.09,0.08],
[0.0,4.7,0.0,0,1.65,0.17,0.0,0.35,0.36,0.39,0.0,0.07,0.37,0.24,2.45,0.12,0.08,0.0,0.06,0.0,0,0.07,0.14,0.92,1.2],
[0.05,2.21,0.17,1.65,0.0,0.4,0.1,0.42,0.48,0.46,0.08,0.15,0.4,0.37,2.11,0.31,0.08,0.15,0.28,0.12,0.05,0.07,0.16,0.79,0.61],
[0.0,0.24,0.0,0.17,0.4,0.0,0.14,0.19,0.18,0.18,0.0,0,0.12,0.16,0.15,0.0,0,0.0,0,0.0,0,0.0,0,0.1,0.0],
[0.0,0.06,0.0,0,0.1,0.14,0.0,0,0.06,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.0],
[0.0,0.47,0.0,0.35,0.42,0.19,0.0,0,0.51,0.58,0.07,0.0,0.25,0.13,0.32,0.0,0,0.0,0,0.0,0,0.0,0.1,0.34,0.07],
[0.0,0.53,0.0,0.36,0.48,0.18,0.06,0.51,0.0,0.36,0.1,0.0,0.28,0.16,0.37,0.0,0,0.0,0,0.0,0,0.0,0.16,0.4,0.09],
[0.09,0.55,0.0,0.39,0.46,0.18,0.0,0.58,0.36,0.0,0,0.0,0.26,0.15,0.36,0.0,0,0.0,0,0.0,0,0.0,0.09,0.38,0.16],
[0.0,0.07,0.0,0,0.08,0.0,0,0.07,0.1,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.0],
[0.0,0.09,0.0,0.07,0.15,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.06,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.0],
[0.0,0.49,0.0,0.37,0.4,0.12,0.0,0.25,0.28,0.26,0.0,0,0.0,0.15,0.36,0.0,0,0.0,0,0.0,0,0.0,0.1,0.34,0.09],
[0.0,0.35,0.0,0.24,0.37,0.16,0.0,0.13,0.16,0.15,0.0,0,0.15,0.0,0.22,0.0,0,0.0,0,0.0,0,0.0,0,0.19,0.06],
[0.0,2.96,0.09,2.45,2.11,0.15,0.0,0.32,0.37,0.36,0.0,0.06,0.36,0.22,0.0,0.07,0.0,0,0.0,0,0.0,0.05,0.14,0.83,0.73],
[0.0,0.12,0.0,0.12,0.31,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.07,0.0,0.49,0.83,0.34,0.44,0.27,0.0,0,0.09,0.07],
[0.0,0.08,0.0,0.08,0.08,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.49,0.0,0.17,0.07,0.06,0.09,0.0,0,0.0,0.05],
[0.0,0.0,0,0.0,0.15,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.83,0.17,0.0,0.2,0.29,0.23,0.0,0,0.0,0.0],
[0.0,0.06,0.0,0.06,0.28,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.34,0.07,0.2,0.0,0.17,0.11,0.0,0,0.0,0.0],
[0.0,0.0,0,0.0,0.12,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.44,0.06,0.29,0.17,0.0,0.11,0.0,0,0.0,0.0],
[0.0,0.0,0,0.0,0.05,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0,0.27,0.09,0.23,0.11,0.11,0.0,0,0.0,0,0.0],
[0.0,0.2,0.0,0.07,0.07,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.05,0.0,0,0.0,0,0.0,0,0.0,0,0.0,0.0],
[0.0,0.19,0.0,0.14,0.16,0.0,0,0.1,0.16,0.09,0.0,0,0.1,0.0,0.14,0.0,0,0.0,0,0.0,0,0.0,0,0.1,0.0],
[0.0,1.15,0.09,0.92,0.79,0.1,0.0,0.34,0.4,0.38,0.0,0,0.34,0.19,0.83,0.09,0.0,0,0.0,0,0.0,0,0.1,0.0,0.26],
[0.0,1.19,0.08,1.2,0.61,0.0,0,0.07,0.09,0.16,0.0,0,0.09,0.06,0.73,0.07,0.05,0.0,0,0.0,0,0.0,0,0.26,0.0]
];
/*Sums up to exactly 100*/

var colors = ["#FF0000","#FF3D00","#FF7A00","#FFB800","#FFF500","#CCFF00","#8FFF00","#52FF00","#14FF00","#00FF29","#00FF66","#00FFA3","#00FFE0","#00E0FF","#00A3FF","#0066FF","#0029FF","#1400FF","#5200FF","#8F00FF","#CC00FF","#FF00F5","#FF00B8","#FF007A","#FF003D"];
			  
			  

/*Initiate the color scale*/
var fill = d3.scale.ordinal()
    .domain(d3.range(NameProvider.length))
    .range(colors);
	
/*//////////////////////////////////////////////////////////
/////////////// Initiate Chord Diagram /////////////////////
//////////////////////////////////////////////////////////*/

var margin = {top: 50, right: 25, bottom: 20, left: 25},
	width = 800 - margin.left - margin.right,
    height = 750 - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
    .attr("transform", "translate(" + (margin.left + width / 2) + "," + (margin.top + height / 2) + ")");

	
var chord = customChordLayout()
    .padding(.04)
    .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
    .sortChords(d3.descending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the bottom*/
	.matrix(matrix);
	
/*
var chord = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending) 
    .sortChords(d3.descending) 
	.matrix(matrix);
*/
	
/*//////////////////////////////////////////////////////////
/////////////// Color Gradient /////////////////////
//////////////////////////////////////////////////////////*/
	
//Create a gradient definition for each chord
var grads = svg.append("defs").selectAll("linearGradient")
	.data(chord.chords())
	.enter().append("linearGradient")
	//Create a unique gradient id per chord: e.g. "chordGradient-0-4"
	.attr("id", function(d) { return "chordGradient-" + d.source.index + "-" + d.target.index; })
	//Instead of the object bounding box, use the entire SVG for setting locations
	//in pixel locations instead of percentages (which is more typical)
	.attr("gradientUnits", "userSpaceOnUse")
	//The full mathematical formula to find the x and y locations of the Avenger's source chord
	.attr("x1", function(d,i) { 
		return innerRadius*Math.cos((d.source.endAngle-d.source.startAngle)/2+d.source.startAngle-Math.PI/2);
	})
	.attr("y1", function(d,i) { 
		return innerRadius*Math.sin((d.source.endAngle-d.source.startAngle)/2+d.source.startAngle-Math.PI/2);
	})
	//Find the location of the target Avenger's chord 
	.attr("x2", function(d,i) { 
		return innerRadius*Math.cos((d.target.endAngle-d.target.startAngle)/2+d.target.startAngle-Math.PI/2);
	})
	.attr("y2", function(d,i) { 
		return innerRadius*Math.sin((d.target.endAngle-d.target.startAngle)/2+d.target.startAngle-Math.PI/2);
	})
	
//Set the starting color (at 0%)
grads.append("stop")
	.attr("offset", "0%")
	.attr("stop-color", function(d){ return colors[d.source.index]; });

//Set the ending color (at 100%)
grads.append("stop")
	.attr("offset", "100%")
	.attr("stop-color", function(d){ return colors[d.target.index]; });


/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
	
var g = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("svg:g")
	.attr("class", function(d) {return "group " + NameProvider[d.index];});
	
g.append("svg:path")
	  .attr("class", "arc")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .attr("d", arc)
	  .style("opacity", 0)
	  .transition().duration(1000)
	  .style("opacity", 0.4);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Ticks //////////////////////////
//////////////////////////////////////////////////////////*/

var ticks = svg.selectAll("g.group").append("svg:g")
	.attr("class", function(d) {return "ticks " + NameProvider[d.index];})
	.selectAll("g.ticks")
	.attr("class", "ticks")
    .data(groupTicks)
	.enter().append("svg:g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius+40 + ",0)";
    });

/*Append the tick around the arcs*/
ticks.append("svg:line")
	.attr("x1", 1)
	.attr("y1", 0)
	.attr("x2", 5)
	.attr("y2", 0)
	.attr("class", "ticks")
	.style("stroke", "#FFF");
	
/*Add the labels for the %'s*/
ticks.append("svg:text")
	.attr("x", 8)
	.attr("dy", ".35em")
	.attr("class", "tickLabels")
	.attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
	.style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
	.text(function(d) { return d.label; })
	.attr('opacity', 0);
	
/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/

g.append("svg:text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (innerRadius + 55) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .attr('opacity', 0)
  .text(function(d,i) { return NameProvider[i]; });  

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/

var chords = svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("svg:path")
	.attr("class", "chord")
	//.style("stroke", function(d) { return d3.rgb(fill(d.source.index)).darker(); })
	//.style("fill", function(d) { return fill(d.source.index); })
	//.style("stroke", function(d){ return "#FFFFFF"; })
	.style("fill", function(d){ return "url(#chordGradient-" + d.source.index + "-" + d.target.index + ")"; })
	.attr("d", d3.svg.chord().radius(innerRadius))
	.attr('opacity', 0);
	
	
/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/

/*Initiate variables for bar*/
var progressColor = ["#D1D1D1","#949494"],
	progressClass = ["prgsBehind","prgsFront"],
	prgsWidth = 0.4*650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3*prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function(d,i) {return progressClass[i];})
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) {return d;})
	.attr("height", prgsHeight)
	.attr("fill", function(d,i) {return progressColor[i];});

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/

/*Create wrapper for center text*/
var textCenter = svg.append("g")
					.attr("class", "explanationWrapper");

/*Starting text middle top*/
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -24*10/2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text("2nd Data Visualization Challenge")
	.call(wrap, 350);

/*Starting text middle bottom*/
var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 0 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
	.text("The task is to visualize the dataset to give insights about the books genres of books which the customers have bought. Let me tell you a story about fancy data visualization...")
	.call(wrap, 350);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 1,
	buttonTexts = ["Ok","Go on","Continue","Okay","Go on","Continue","Okay","Continue",
				   "Continue","Continue","Continue","Continue","Continue","Finish"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Reload page*/
d3.select("#reset")
	.on("click", function(e) {location.reload();});

/*Skip to final visual right away*/
d3.select("#skip")
	.on("click", finalChord);
	
/*Order of steps when clicking button*/
d3.select("#clicker")      
	.on("click", function(e){
	
		//Introduction
		if(counter == 1) Draw1(); 
		//Show arcs for the first categories
		else if(counter == 2) Draw2(); 
		//Draw the other arcs as well
		else if(counter == 3) Draw3();
		//Highlight the biggest chord between Science fiction & Action
		else if(counter == 4) Draw4();
		//Colour swapping
		else if(counter == 5) Draw5();
		//Show only the largest chords
		else if(counter == 6) Draw6();
		//Show only the smallest chords
		else if(counter == 7) Draw7();

		else if(counter == 8) Draw8();
		//Draw the original Chord diagram
		else if(counter == 9) finalChord(); 
		
		counter = counter + 1;
	});

