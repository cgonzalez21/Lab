/*var piramide = [
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
];*/

var piramide = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
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

console.log(piramide);
var max = 0;

piramide[1][0] += piramide[0][0];
piramide[1][1] += piramide[0][0];

for (let i = 2; i < piramide.length; i++) {
    piramide[i][0] += piramide[i - 1][0];
    piramide[i][i] += piramide[i - 1][i - 1];
    for (let j = 1; j < i; j++) {
        piramide [i][j] = (piramide[i][j] + piramide[i - 1][j - 1]) > (piramide[i][j] + piramide[i - 1][j]) ? 
        piramide[i][j] + piramide[i - 1][j - 1] : piramide[i][j] + piramide[i - 1][j];
    }
}

max = piramide[piramide.length - 1][0];

for (let i = 0; i < piramide.length - 1; i++) {
    let aux = piramide[piramide.length - 1][i + 1];
    if(aux > max){
        max = aux;
    }else{
        max = max;
    }
}
console.log("El valor del camino mas grande que se puede recorrer en la piramide es " + max);

