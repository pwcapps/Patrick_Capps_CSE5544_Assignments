d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();

var svg1 = d3.select("body")
             .append("svg")
             .attr("width", 400)
             .attr("height", 50);

svg4.selectAll("circle")
   .data( d3.range(20) )
   .enter()
   .append("circle")
   .attr("r", 9 )
   .attr("cx", d3.scale.linear().domain([-1, 20]).range([0, 400]) )
   .attr("cy", 10)
   .attr("fill", c20c );
