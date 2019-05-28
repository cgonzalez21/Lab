/*var piramide = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
];*/

piramide = [
    [75], //00
    [95, 64],//10,11 - 10
    [17, 47, 82],//20,21,22 - 21
    [18, 35, 87, 10],//30,31,32,33 - 32
    [20, 4, 82, 47, 65],//40,41,42,43,44 - 42
    [19, 1, 23, 75, 3, 34],//50, 51, 52, 53, 54, 55 - 53
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
]

var sum = [];
var x = 1;
var y = 0;
var index = 0;

//sum[0] = (piramide[0][0] + piramide[1][1]) > (piramide[0][0] + piramide[1][0]) ? piramide[0][0] + piramide[1][1] : piramide[0][0] + piramide[1][0];
if ((piramide[0][0] + piramide[1][0]) > (piramide[0][0] + piramide[1][1])) {
    sum[0] = piramide[0][0] + piramide[1][0];
    y = 0;
}else{
    sum[0] = piramide[0][0] + piramide[1][1];
    y = 1;
}
for (let i = 2; i < piramide.length; i++) {
    console.log(y);
    for (let j = y; j <= y + 1; j++) {
        //sum[x] = sum[x] >= (sum[x - 1] + piramide[i][j]) ? sum[x] : sum[x - 1] + piramide[i][j];
        //console.log(piramide[i][j])
        if (sum[x] >= (sum[x - 1] + piramide[i][j])) {
            sum[x] = sum[x];
            index = y;
        }else{
            sum[x] = sum[x - 1] + piramide[i][j];
            index = j;
        }
    }
    //console.log(index);
    x++;
    y = index;
}
console.log(sum);