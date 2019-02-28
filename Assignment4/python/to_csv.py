input = 'data/testGHZ400.data'
output = 'data/vfdata.csv'
file_in = open(input, 'r')
file_out = open(output, 'w')

# Write headings
file_out.write('x,y,px,py')

# Skip first resolution line
file_in.readline()

# Remove extra spaces and convert to csv
line = file_in.readline()
for c in line:
    if (not c.isspace()):
        print(c)
