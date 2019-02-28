import json

input = 'data/testGHZ400.data'
output = 'data/vfdata.json'
file_in = open(input, 'r')
file_out = open(output, 'w')

# Skip first resolution line
file_in.readline()

# Remove extra spaces and create json objects
for line in file_in:
    i = 0
    count = 0
    vals = []
    while (i < len(line)):
        val = ''
        if (not line[i].isspace()):
            while (not line[i].isspace()):
                val += line[i]
                i += 1
            count += 1
            vals.append(float(val))
        i += 1
    json.dump({'x': vals[0], 'y': vals[1], 'px': vals[2], 'py': vals[3]}, file_out)
    file_out.write('\n')
