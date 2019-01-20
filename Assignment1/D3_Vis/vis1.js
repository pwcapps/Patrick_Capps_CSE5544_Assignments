var dataRows = 182;
var dataColumns = 218;
var width = "850px";
var height = "850px";
var cellDim = "50";

d3.text("data/dataset1.txt").then(function(text) {
  var ssv = d3.dsvFormat(" ");  // Create space separated value parser
  ssv.parseRows(text, function(d, i) {
    for (var j = 0; j < d.length; j++) {
      var value = +d[j];
      if (value > 0) {
        svg1.append("circle")
          .attr("cx", i * 4)
          .attr("cy", j * 4)
          .attr("r", value * 15)
          .style("fill", "blue");
      }
      // svg2.append("rect")
      //   .attr("x", i*2)
      //   .attr("y", j*2)
      //   .attr("width", cellDim)
      //   .attr("height", cellDim)
      //   // .style("stroke", "black")
      //   // .style("stroke-width", 0.1)
      //   .style("fill", getColor(value));
    }
  });
});
var svg1 = d3.select("#vis1")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var svg2 = d3.select("#vis2")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg2.append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", cellDim)
  .attr("height", cellDim)
  // .style("stroke", "black")
  // .style("stroke-width", 0.1)
  .style("fill", getColor(0.5));

// svg2.append("circle")
//   .attr("cx", 1)
//   .attr("cy", 1)
//   .attr("r", 25)
//
// svg2.append("circle")
//   .attr("cx", 850 - 1)
//   .attr("cy", 850 - 10)
//   .attr("r", 25);

function getColor(data) {
  var color = "blue";
  switch (data) {
    // case data > 0.9:
    //   color = "maroon"
    //   break;
    // case data > 0.8:
    //   color = "red"
    //   break;
    // case data > 0.7:
    //   color = "orange"
    //   break;
    case data > 0.6:
      color = "yellow"
      break;
    // case data > 0.5:
    //   color = "olive"
    //   break;
    // case data > 0.4:
    //   color = "green"
    //   break;
    // case data > 0.3:
    //   color = "teal"
    //   break;
    case data > 0.2:
      color = "blue"
      break;
    // case data > 0.1:
    //   color = "navy"
    //   break;
    // case data > 0:
    //   color = "gray"
    //   break;
    default:
      break;
  }
  return color;
}
