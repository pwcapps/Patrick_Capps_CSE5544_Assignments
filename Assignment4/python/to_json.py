import json

input = 'data/testGHZ400.data'
output = 'data/vfdata.json'
file_in = open(input, 'r')
file_out = open(output, 'w')



with open(input, 'r') as f_in, open(output, 'w') as f_out:
    # Skip first resolution line
    f_in.readline()
    # Creating array of objects
    f_out.write('[\n')

    # Remove extra spaces and create json objects
    for line in f_in:
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
        json.dump({'x': vals[0], 'y': vals[1], 'px': vals[2], 'py': vals[3]}, f_out)
        f_out.write(',\n')

    # Remove extra comma, close array
    f_out.seek(f_out.tell() - 3, 0)
    f_out.write('\n]')
