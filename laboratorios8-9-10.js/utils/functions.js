
function sumaArreglo(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (isNaN(arr[i])) {
            throw new 'Error: No es numerico. ' + arr[i];
        }else if(arr[i] > 0 && arr[i] < 101){
            sum = sum + parseInt(arr[i]);
        }else{
            throw new 'Error: No esta en el rango permitido. ' + arr[i];
        }
    }
    return sum;
}

function crearMatriz(size){
    let arregloP = [];
    if (isNaN(size)){
        throw new "No es un numero: " + size;
    }else{
        for (let i = 0; i < size; i++) {
            let arrTemp = []
            for (let j = 0; j < size; j++) {
                arrTemp.push(Math.floor(Math.random() * (10 - 1)) + 1);
            }
            arregloP.push(arrTemp);
        }
    }
    return arregloP;
}

function calDiagPrinc(arr){
    let sum = 0;
    for (let i = 0; i < arr.length ; i += 1) {
        sum = sum + arr[i][i];
    }
    return sum;
}

function countPairs(arr){
    let arrAux = [];
    let arrCount = {};
    let totalCount = 0;
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        arr.sort();
        if (!arrAux.includes(arr[i])) {
            arrAux[j] = arr[i];
            j++
        }
    }
    for (let i = 0; i < arrAux.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arrAux[i] === arr[j]){
                arrCount[arrAux[i]] = count += 1;
            }
        }
        totalCount += ((arrCount[arrAux[i]] - (arrCount[arrAux[i]] % 2))/2);
    }
    return totalCount;
}

module.exports = {
    sumaArreglo,
    crearMatriz,
    calDiagPrinc,
    countPairs,
}