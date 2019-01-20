var dataRows = 182;
var dataColumns = 218;
var width = "850px";
var height = "850px";

d3.text("data/dataset1.txt").then(function(text) {
  var ssv = d3.dsvFormat(" ");  // Create space separated value parser
  ssv.parseRows(text, function(d, i) {
    for (var j = 0; j < d.length; j++) {
      var value = +d[j];
      if (value > 0) {
        svg.append("circle")
          .attr("cx", i * 4)
          .attr("cy", j * 4)
          .attr("r", value * 15)
          .style("fill", "blue");
      }
    }
  });
});

var svg = d3.select("#vis1")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
