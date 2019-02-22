d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();
c20c.domain(d3.range(20));

var numPatients = 42;
var width = window.innerWidth, height = window.innerHeight;

// Map patient ids to smaller ints for y-axis scaling
var patients = {
  382268: {num: 1},
  382269: {num: 2},
  3822046: {num: 3},
  3822077: {num: 4},
  3822084: {num: 5},
  3822102: {num: 6},
  3822108: {num: 7},
  3822163: {num: 8},
  3822164: {num: 9},
  3822201: {num: 10},
  3822204: {num: 11},
  3822241: {num: 12},
  3822263: {num: 13},
  3822264: {num: 14},
  3822268: {num: 15},
  3822280: {num: 16},
  3822286: {num: 17},
  3822317: {num: 18},
  3822333: {num: 19},
  3822355: {num: 20},
  3822364: {num: 20},
  3822416: {num: 22},
  3822432: {num: 23},
  3822438: {num: 24},
  3822453: {num: 25},
  3822530: {num: 26},
  3822536: {num: 27},
  3822546: {num: 28},
  3822599: {num: 29},
  3822611: {num: 30},
  3822646: {num: 31},
  3822663: {num: 32},
  3822668: {num: 33},
  3822670: {num: 34},
  3822740: {num: 35},
  3822762: {num: 36},
  3822763: {num: 37},
  3822767: {num: 38},
  3822794: {num: 39},
  3822871: {num: 40},
  3822986: {num: 41},
}

var symptoms = ["Stress", "PTSD", "Speech", "Anxiety", "Depression", "Headache",
  "Sleep", "Audiology", "Vision", "Neurologic", "Alzheimer", "Cognitive", "PCS",
  "Endocrine", "Skull injury", "Non skull injury"]

d3.csv("ehrDataClipSorted.csv", function(data) {
  var id = patients[data.PatientID].num;
  var tbi = +data.Days_From1stTBI;
  var symptom = 0;
  var vals = Object.values(data);
  for (i = 2; i < vals.length; i++) {
    if (vals[i] == 1) {
      symptom = i - 2;
    }
  }
  return {
    id: id,
    tbi: tbi,
    symptom: symptom
  };

}).then(function(data) {
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) { return width / 2 + d.tbi / 4 })
    .attr("y", function(d) { return d.id * 22 })
    .attr("width", 5)
    .attr("height", 12)
    .style("fill", function(d) {
      if (d.symptom == 0) {
        return c20c(18);
      }
      else {
        return c20c(d.symptom)
      }
    });
});

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

// Generate legend:
svg.selectAll("text")
  .data(d3.range(20))
  .enter()
  .append("text")
  .attr("x", 10)
  .attr("y", d3.scale.linear().domain([-1, 20]).range([0, 400]))
  .attr("fill", c20c);

svg.selectAll("text")
  .data(symptoms)
  .text(function(d) { return d });
