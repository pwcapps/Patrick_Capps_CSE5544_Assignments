input = 'data/testGHZ400.data'
output = 'data/mediumdata.csv'
file_in = open(input, 'r')
file_out = open(output, 'w')



with open(input, 'r') as f_in, open(output, 'w') as f_out:
    # Skip first resolution line
    f_in.readline()

    # Only write every n lines in csv format
    nx = 400
    ny = 4000
    interval = 10
    count = 1
    for line in f_in:
        if (count <= nx and (count == 1 or count % 20 == 0)):
            i = 0
            vals = []
            while (i < len(line)):
                val = ''
                if (not line[i].isspace()):
                    while (not line[i].isspace()):
                        val += line[i]
                        i += 1
                    vals.append(val)
                i += 1
            f_out.write(vals[0] + ',' + vals[1] + ',' + vals[2] + ',' + vals[3] + '\n')
            count += 1
        elif (count >= ny):
            count = 1
        else:
            count += 1
