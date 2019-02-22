// Make background gray to discern colors easier
d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();
c20c.domain(d3.range(20));

// var numPatients = 42;
// Width and height for SVG
var width = window.innerWidth, height = window.innerHeight;

// Scaling factors
var xPosScale = 4;
var yPosScale = 22;
var rectHeight = 12;
// Map patient ids to smaller ints for y-axis scaling
// var patients = {
//   382268: {num: 1},
//   382269: {num: 2},
//   3822046: {num: 3},
//   3822077: {num: 4},
//   3822084: {num: 5},
//   3822102: {num: 6},
//   3822108: {num: 7},
//   3822163: {num: 8},
//   3822164: {num: 9},
//   3822201: {num: 10},
//   3822204: {num: 11},
//   3822241: {num: 12},
//   3822263: {num: 13},
//   3822264: {num: 14},
//   3822268: {num: 15},
//   3822280: {num: 16},
//   3822286: {num: 17},
//   3822317: {num: 18},
//   3822333: {num: 19},
//   3822355: {num: 20},
//   3822364: {num: 21},
//   3822416: {num: 22},
//   3822432: {num: 23},
//   3822438: {num: 24},
//   3822453: {num: 25},
//   3822530: {num: 26},
//   3822536: {num: 27},
//   3822546: {num: 28},
//   3822599: {num: 29},
//   3822611: {num: 30},
//   3822646: {num: 31},
//   3822663: {num: 32},
//   3822668: {num: 33},
//   3822670: {num: 34},
//   3822740: {num: 35},
//   3822762: {num: 36},
//   3822763: {num: 37},
//   3822767: {num: 38},
//   3822794: {num: 39},
//   3822871: {num: 40},
//   3822986: {num: 41},
// }
// variables for patient object and count
var patients = {};
var patientCount = 1;

d3.csv("EHRdata.csv", function(data) {
  var id, tbi, symptom;
  var pid = +data.PatientID;
  console.log(pid);
  var pre = +data.PRE_max_days;
  console.log(pre);
  var post = +data.POST_max_days;
  console.log(post);
  if (patients.hasOwnProperty(pid)) {
    id = patients[pid].num;
  }
  else {
    patients[pid] = {
      num: patientCount,
      pre: pre,
      post: post
    };
    svg.append("rect")
      .attr("x", width / 2 + pre / xPosScale)
      .attr("y", patientCount * yPosScale)
      .attr("width", (post - pre) / xPosScale)
      .attr("height", rectHeight)
      .style("fill", c20c(18));
    id = patientCount;
    patientCount++;
  }
  tbi = +data.Days_From1stTBI;
  symptom = 0;
  var vals = Object.values(data);
  for (i = 4; i < vals.length; i++) {
    if (vals[i] == 1) {
      symptom = i - 3;
      break;
    }
  }
  return {
    id: id,
    tbi: tbi,
    symptom: symptom
  };
}).then(function(data) {
  console.log(data);
  // svg.selectAll("rect")
  //   .data(data)
  //   .enter()
  //   .append("rect")
  //   .attr("x", function(d) { return width / 2 + d.tbi / xPosScale })
  //   .attr("y", function(d) { return d.id * yPosScale })
  //   .attr("width", 5)
  //   .attr("height", rectHeight)
  //   .style("fill", function(d) {
  //     if (d.symptom == 0) {
  //       return c20c(18);
  //     }
  //     else {
  //       return c20c(d.symptom)
  //     }
  //   });
});
console.log(patients);
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
// Create text elements
svg.selectAll("text")
  .data(d3.range(16))
  .enter()
  .append("text")
  .attr("x", 10)
  .attr("y", d3.scale.linear().domain([-1, 16]).range([0, 400]))
  .attr("fill", c20c);

// Symptom list for color legend
var symptoms = ["Stress", "PTSD", "Speech", "Anxiety", "Depression", "Headache",
  "Sleep", "Audiology", "Vision", "Neurologic", "Alzheimer", "Cognitive", "PCS",
  "Endocrine", "Skull injury", "Non skull injury"]

// Add symptom text to existing elements
svg.selectAll("text")
  .data(symptoms)
  .text(function(d) { return d });

// X-axis labels
svg.append("text")
  .attr("x", width / 2 - 30)
  .attr("y", 20)
  .text("TBI");

svg.append("text")
  .attr("x", 150)
  .attr("y", 20)
  .text("Encounters before TBI");

svg.append("text")
  .attr("x", width - 550)
  .attr("y", 20)
  .text("Encounters after TBI");
