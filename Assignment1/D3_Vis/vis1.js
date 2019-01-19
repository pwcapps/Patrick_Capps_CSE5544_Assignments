var data = [];

// Load data from txt file and parse into 2 dimensional array
d3.text("data/dataset1.txt").then(function(text) {
  var ssv = d3.dsvFormat(" ");  // Create space separated value parser
  ssv.parseRows(text, function(d, i) {
    data[i] = d.map(function(value) {
      return +value;
    });
  });
});

console.log(data);
