Paraview: Although I reviewed Paraview as a tool for this assignment, I ended up
not using it for the actual visualizations. From what I understand, Paraview is
designed for spatial data and 3D visualizations, and seems to require somewhat
specific data formats. I could not make the example data for the assignment work
in the tool, but it seems capable of making very good visualizations when the
data fits.

D3 Visualization Process:
I originally wanted to make 3D visualizations with D3, but since it uses HTML
and SVG this would have taken a lot more time I think. I used D3 to fetch the
data as a delimiter-separated value file, and iterated through the values to
create shapes in grid locations using SVG. I started with the circles to try
something basic. For the second visualization I wanted a more obvious grid, but
this did not turn out well, although the color works fairly well I think.
Note: In order to view my webpage I had to create a local server so that D3 fetch
worked correctly. If the visualizations can't be viewed in GitHub this is the alternative.

D3 Pros/Cons:
D3 is a JavaScript library, so what you create with it depends entirely on what
you can do with HTML, CSS, JS, and SVG. I think this is good since it allows one
to be very creative, although it takes a while to get started if you're not well
versed in these technologies like me. I also like D3's API and examples; they
are well written and extremely helpful in the learning process.
However, as mentioned before, D3 is not well suited to 3D visualizations. Some
examples on the website contain 3D shapes, but SVG isn't really made for it and
I'm guessing it takes a lot of math.

MATLAB Visualization Process:
Having used MATLAB a little bit previously, I turned to it instead of Paraview.
I used MATLAB's importdata function to create a matrix of the DTI data and was
able to manipulate it from there. I found the contour map with the right colormap
nicely represented the data, although still not in 3D. The large number of points
in this dataset don't work well with many options that MATLAB has; I tried a
surface plot that was rather messy to look at. The 3D scatter plot is still hard
to glean information from, but is alright when viewed in MATLAB's figure window.

MATLAB Pros/Cons:
MATLAB makes it extremely easy to read in data and plot it quickly with matrix
manipulation. I was able to create two visualizations in MATLAB with much less
code and a lot less time than with D3. MATLAB also has many more toolboxes for
specific fields or types of datasets that I haven't explored which are probably
very useful. However, the standard 3D plots don't seem great for large datasets
compared to what Paraview probably offers, and creating a figure and printing to
a file was a little slow.

Favorite Image: 1st D3 Visualization (Circles)
This took a lot of time to figure out and I think turned out well, although I
think the MATLAB contour map represents the data best.
