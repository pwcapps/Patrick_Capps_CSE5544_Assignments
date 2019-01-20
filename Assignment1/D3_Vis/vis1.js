var dataRows = 182;
var dataColumns = 218;
var width = "850px";
var height = "850px";
var cellDim = "10";

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
        svg2.append("rect")
          .attr("x", i*4)
          .attr("y", j*4)
          .attr("width", cellDim)
          .attr("height", cellDim)
          .style("fill", getColor(value));
      }
    }
  });
});

var svg1 = d3.select("#vis1")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg1.append("text")
  .attr("x", 50)
  .attr("y", 50)
  .text("Circle Radius (pixels) = [value] * 10");

var svg2 = d3.select("#vis2")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg2.append("text")
  .attr("x", 25)
  .attr("y", 50)
  .style("font-size", "18px")
  .text("Legend:");
createLegend();

function getColor(data) {
  var color = "white";
  if (data > 0.9) {
    color = "maroon";
  } else if (data > 0.8) {
    color = "red";
  } else if (data > 0.7) {
    color = "orange";
  } else if (data > 0.6) {
    color = "yellow";
  } else if (data > 0.5) {
    color = "olive";
  } else if (data > 0.4) {
    color = "green";
  } else if (data > 0.3) {
    color = "teal";
  } else if (data > 0.2) {
    color = "blue";
  } else if (data > 0.1) {
    color = "navy";
  } else if (data > 0) {
    color = "gray";
  }
  return color;
}

function createLegendBox(color, pos, text) {
  svg2.append("rect")
    .attr("x", pos)
    .attr("y", 37)
    .attr("width", 50)
    .attr("height", 15)
    .style("fill", color);
  svg2.append("text")
    .attr("x", pos + 2)
    .attr("y", 50)
    .style("fill", "aqua")
    .text(text);
}

function createLegend() {
  createLegendBox("gray", 100, "0.0");
  createLegendBox("navy", 150, "0.1");
  createLegendBox("blue", 200, "0.2");
  createLegendBox("teal", 250, "0.3");
  createLegendBox("green", 300, "0.4");
  createLegendBox("olive", 350, "0.5");
  createLegendBox("yellow", 400, "0.6");
  createLegendBox("orange", 450, "0.7");
  createLegendBox("red", 500, "0.8");
  createLegendBox("maroon", 550, "0.9");
}
