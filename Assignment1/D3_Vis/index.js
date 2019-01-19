function chooseColor(value) {
  var color = "#fff";
  switch (value) {
    case value > 0 && value < 0.1:
      color = "#A9A9A9"; // Gray
      break;
    case value < 0.2:
      color = "#2F4F4F"; // Greenish Gray
      break;
    case value < 0.3:
      color = "#00CED1" // turquoise
      break;
    case value < 0.4:
      color = "#1E90FF" // dodger blue
      break;
    case value < 0.5:
      color = "#4B0082" // indigo
      break;
    case value < 0.6:
      color = "#FF00FF" // magenta
      break;
    case value < 0.7:
      color = "#FFC0CB" // pink
      break;
    case value < 0.8:
      color = "#FF0000" //red
      break;
    case value < 0.9:
      color = "#FFFF00" // yellow
      break;
    case value < 1.0:
      color = "#FFA500" // orange
      break;
    default:
      color = "#fff";
  }
  return color;
}

function gridData() {
	var data = new Array();
  var rowNum = 182;
  var colNum = 218;
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 3;
	var height = 3;
	var click = 0;

	// iterate for rows
	for (var row = 0; row < rowNum; row++) {
		data.push( new Array() );

		// iterate for cells/columns inside rows
		for (var column = 0; column < colNum; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;
	}
	return data;
}

var gridData = gridData();

var grid = d3.select("#grid")
	.append("svg")
	.attr("width","1000px")
	.attr("height","1000px");

var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");

var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.style("fill", "#fff")
	.style("stroke", "#222")
	.on('click', function(d) {
       d.click ++;
       if ((d.click)%4 == 0 ) { d3.select(this).style("fill","#fff"); }
	   if ((d.click)%4 == 1 ) { d3.select(this).style("fill","#2C93E8"); }
	   if ((d.click)%4 == 2 ) { d3.select(this).style("fill","#F56C4E"); }
	   if ((d.click)%4 == 3 ) { d3.select(this).style("fill","#838690"); }
    });

// Load in data
var dataText;
d3.text("data/dataset1.txt").then(function(text) {
  d3.dsvFormat(" ").parseRows(text).then(function(d) {
    console.log(d);
  });
});
// console.log(dataText.length);
//
// var ssv = d3.dsvFormat(" ");
// ssv.parseRows(dataText).then(function(d) {
//   console.log(d);
// });
