// Make background gray to discern colors easier
d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();
c20c.domain(d3.range(1, 21));

// Width and height for SVG
var width = window.innerWidth, height = window.innerHeight;

// Scaling factors
var xPosScale = 4;
var yPosScale = 22;
var rectWidth = 10;
var rectHeight = 12;

// variables for patient object and count
var patients = {};
var patientCount = 1;

d3.csv("EHRdata.csv", function(data) {
  // Properties to return
  var id, tbi, symptom;
  // Get relevant properties
  var pid = +data.PatientID;
  var pre = +data.PRE_max_days;
  var post = +data.POST_max_days;
  // Create new entry in patients for each unique id
  if (patients.hasOwnProperty(pid)) {
    id = patients[pid].num;
  }
  else {
    patients[pid] = {
      num: patientCount,
      pre: pre,
      post: post
    };
    // Create 0 symptom color rectangle for entire data time period
    svg.append("rect")
      .attr("x", width / 2 + pre / xPosScale)
      .attr("y", patientCount * yPosScale)
      .attr("width", (post - pre) / xPosScale)
      .attr("height", rectHeight)
      .style("fill", c20c(19));
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
  // Only return entries with symptom data
  if (symptom > 0)
  {
    return {
      id: id,
      tbi: tbi,
      symptom: symptom
    }
  };
}).then(function(data) {
  console.log(data);
  svg.selectAll("rect.symptom")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) { return width / 2 + d.tbi / xPosScale })
    .attr("y", function(d) { return d.id * yPosScale })
    .attr("width", rectWidth)
    .attr("height", rectHeight)
    .style("fill", function(d) { return c20c(d.symptom) })
    .classed("symptom");
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
  .data(d3.range(1, 18))
  .enter()
  .append("text")
  .attr("x", 10)
  .attr("y", d3.scale.linear().domain([0, 16]).range([80, 560]))
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

svg.append("text")
  .style("font-size", "36px")
  .attr("transform", "translate(200, 500) rotate(-90)")
  .text("Patients");
