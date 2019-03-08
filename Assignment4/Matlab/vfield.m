data = 'data/bigdata.csv';
vecData = csvread(data);
% Vector positions
x = vecData(:,1);
y = vecData(:,2);
% Vector components
u = vecData(:,3);
v = vecData(:,4);
% Create vector field
quiver(x, y, u, v);
title('All Data Points');
print('bigplot', '-dpng');

% Sample about 500 points
data = 'data/smalldata.csv';
vecData = csvread(data);
% Vector positions
x = vecData(:,1);
y = vecData(:,2);
% Vector components
u = vecData(:,3);
v = vecData(:,4);
% Create vector field
quiver(x, y, u, v)
title('Sampled Data Points');
print('smallplot', '-dpng');

% Increase vector size
quiver(x, y, u, v, 'AutoScale','on', 'AutoScaleFactor', 2)
title('Increased vector size');
print('smallplotlargevecs', '-dpng');

% Decrease vector size
quiver(x, y, u, v, 'AutoScale','on', 'AutoScaleFactor', .5)
title('Decreased vector size');
print('smallplotsmallvecs', '-dpng');

% Larger sample of points
data = 'data/mediumdata.csv';
vecData = csvread(data);
% Vector positions
x = vecData(:,1);
y = vecData(:,2);
% Vector components
u = vecData(:,3);
v = vecData(:,4);
% Create vector field
quiver(x, y, u, v);
title('Sampled Data Points');
print('mediumplot', '-dpng');


