For this assignment I used Python to preprocess and sample the data, and MATLAB
to generate the vector fields. D3 struggles to manage the large dataset and SVG
is not great for generating vectors.

For preprocessing, I converted the data to csv format, and for sampling, y values
change every 400 points in the data file, so I took points at intervals for each
y value, then skipped several thousand points for the next y value to get an
approximately 20x20 vector field.

The vector fields are generated using the MATLAB quiver function, and vectors are
scaled with the AutoScale property of quiver.
