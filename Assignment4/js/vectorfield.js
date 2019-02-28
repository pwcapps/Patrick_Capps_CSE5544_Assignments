var width = window.innerWidth, height = window.innerHeight;
var dataFile = "data/vfdata.json";

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

d3.json(dataFile).then(function(data) {
  console.log(data);
});
