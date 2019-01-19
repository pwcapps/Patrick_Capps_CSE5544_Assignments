var dataFile = "data\\dataset1.txt";
d3.dsv(" ", dataFile).then(function(data) {
  console.log(data);
});
