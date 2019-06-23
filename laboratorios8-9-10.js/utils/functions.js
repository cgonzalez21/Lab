
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

module.exports = {
    sumaArreglo,
}