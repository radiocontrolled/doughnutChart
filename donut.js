
/**
 * @author Alison Benjamin
 */

var dataset = [25,10,40,12.5, 12.5];
var color = d3.scale.category20c(); 
var articleWidth = $(window).width();
var w = ($(window).width()/2);
var h = w; 
var outerRadius = w / 2;

//draw wedges
var arc = d3.svg.arc()
	.innerRadius(100) 
	.outerRadius(outerRadius);
	
// define default pie layout
var pie = d3.layout.pie();

var svg = d3.select("article")  
	.attr("width", articleWidth)
	.append("svg")
	.attr("width", w)
	.attr("height", h);


var arcs = svg.selectAll("g.arc") 
	.data(pie(dataset)) 
	.enter()
	.append("g")
	.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")"); 

//Draw arc paths
arcs.append("path")
	.attr("d", arc)
	.attr("fill", function(d) {
  		return color(Math.floor(d.value)); 
		})
	
//Labels
arcs.append("text")
	.attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")";
	})
	.text(function(d) {
		return d.value;
	});
	
	