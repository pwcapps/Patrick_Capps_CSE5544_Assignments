input = 'data/testGHZ400.data'
output = 'data/bigdata.csv'
file_in = open(input, 'r')
file_out = open(output, 'w')



with open(input, 'r') as f_in, open(output, 'w') as f_out:
    # Skip first resolution line
    f_in.readline()

    # Convert to csv format
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
                vals.append(val)
            i += 1
        f_out.write(vals[0] + ',' + vals[1] + ',' + vals[2] + ',' + vals[3] + '\n')
