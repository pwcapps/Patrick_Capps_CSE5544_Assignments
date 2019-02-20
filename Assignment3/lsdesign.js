d3.select("body").style("background-color", "gray");

// D3 Color scale
var c20c = d3.scale.category20c();

var numPatients = 42;
var width = window.innerWidth, height = window.innerHeight;
var barY = height;

d3.csv("ehrDataClipSorted.csv", function(data) {
  return {
    id: +data.PatientID,
    tbi: +data.Days_From1stTBI,
    stress: +data.Stress,
    ptsd: +data.PTSD,
    speech: +data.Speech,
    anx: +data.Anxiety,
    depression: +data.Depression,
    headache: +data.Headache,
    sleep: +data.Sleep,
    aud: +data.Audiology,
    vis: +data.Vision,
    neuro: +data.Neurologic,
    alz: +data.Alzheimer,
    cog: +data.Cognitive,
    pcs: +data.PCS,
    endo: +data.Endocrine,
    skull: +data.Skull_inj,
    nonsk: +data.NON_skull_inj
  };
}).then(function(data) {
  console.log(data);
  svg.append("rect")
    .attr("x", data.tbi / 10)
    .attr("y", data.id - 382200)
    .attr("width", 0.5)
    .attr("height", 1)
    .style("fill", c20c[2]);
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

var patients = {
  382268: {num: 1},
  382269: {num: 2},
  3822046: {num: 1},
  3822077: {num: 1},
  3822084: {num: 1},
  3822102: {num: 1},
  3822108: {num: 1},
  3822163: {num: 1},
  3822164: {num: 1},
  3822201: {num: 1},
  3822204: {num: 1},
  3822241: {num: 1},
  3822263: {num: 1},
  3822264: {num: 1},
  3822268: {num: 1},
  3822280: {num: 1},
  3822286: {num: 1},
  3822317: {num: 1},
  3822333: {num: 1},
  3822355: {num: 1},
  3822364: {num: 1},
  3822416: {num: 1},
  3822432: {num: 1},
  3822438: {num: 1},
  3822453: {num: 1},
  3822530: {num: 1},
  3822536: {num: 1},
  3822546: {num: 1},
  3822599: {num: 1},
  3822611: {num: 1},
  3822646: {num: 1},
  3822663: {num: 1},
  3822668: {num: 1},
  3822670: {num: 1},
  3822740: {num: 1},
  3822762: {num: 1},
  3822763: {num: 1},
  3822767: {num: 1},
  3822794: {num: 1},
  3822871: {num: 1},
  3822986: {num: 1},
}
