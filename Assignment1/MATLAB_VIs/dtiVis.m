file = 'data/dataset1.txt';
delimiter = ' ';
A = importdata(file, delimiter, 0);
B = A(25:155,25:185);
contour(B, 25)
title('Diffusion Tensor Imaging Contour Map')
colormap hot
colorbar
%print('-bestfit', 'Vis1', '-dpdf')

sz = size(B);
X = [];
Y = [];
Z = [];
for i = 1:sz(1)
    for j = 1:sz(2)
        if (B(i, j) > 0)
           X = [X, i];
           Y = [Y, j];
           Z = [Z, B(i, j)];
        end
    end
end
figure
scatter3(X, Y, Z)
title('Diffusion Tensor Imaging 3D Scatter Plot')
%print('-bestfit', 'Vis2', '-dpdf')