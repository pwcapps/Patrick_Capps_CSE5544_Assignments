smalldata = 'data/smalldata.csv';
bigdata = 'data/bigdata.csv';
vecData = csvread(smalldata);
u = vecData(:,1);
v = vecData(:,2);
x = vecData(:,3);
y = vecData(:,4);

quiver(u, v, x, y)
   