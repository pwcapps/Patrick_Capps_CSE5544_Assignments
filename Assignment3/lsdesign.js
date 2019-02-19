d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();

var svg1 = d3.select("body")
             .append("svg")
             .attr("width", 400)
             .attr("height", 50);

svg1.selectAll("circle")
   .data( d3.range(20) )
   .enter()
   .append("circle")
   .attr("r", 9 )
   .attr("cx", d3.scale.linear().domain([-1, 20]).range([0, 400]) )
   .attr("cy", 10)
   .attr("fill", c20c );

var numPatients = 42;
var width = 800, height = 800;

d3.csv("EHRdataSampleClipped.csv").then(function(data) {
  svg.selectAll("rect")
    .data()
    .enter()
    .append("rect")
    .attr("x", )
})

// Generate svg with y-axis in middle to mark TBI location
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

svg.append("line")
  .attr("x1", width / 2)
  .attr("y1", 0)
  .attr("x2", width / 2)
  .attr("y2", height)
  .style("stroke", "rgb(255,255,255)")
  .style("stroke-width", 3);
