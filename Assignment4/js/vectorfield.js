var width = window.innerWidth, height = window.innerHeight;
var dataFile = "data/testGHZ400.tsv";

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

d3.tsv(dataFile, function(data) {
  return {
    x: Number(data.x),
    y: Number(data.y),
    px: Number(data.px),
    py: Number(data.py)
  };
}).then(function(data) {
  console.log(data);
  svg.append("circle")
    .attr("x", data.x)
    .attr("y", data.y)
    .attr("r", 1);
});
