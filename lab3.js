//2. Funcion que retorne una diagonal principal de una matriz NxN.

(function(){
    Module = {
        Data :{
            size: undefined,
        },
        Methods:{
            init: function(size){
                Module.Data.size = size
                Module.Methods.calc();
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                 function crearMatriz(size){
                    let arregloP = [];
                    if (isNaN(size)){
                        throw new Module.Exceptions.UserException("No es un numero: " + size);
                    }else{
                        for (let i = 0; i < size; i++) {
                            let arrTemp = []
                            for (let j = 0; j < size; j++) {
                                arrTemp.push(Math.floor(Math.random() * (10 - 1)) + 1);
                            }
                            arregloP.push(arrTemp);
                        }
                    }
                    console.log(arregloP);
                    return arregloP;
                }
                function calDiagPrinc(arr){
                    let sum = 0;
                    for (let i = 0; i < arr.length ; i += 1) {
                        sum = sum + arr[i][i];
                    }
                    return sum;
                }
                console.log("La suma de la diagonal principal es: " + calDiagPrinc(crearMatriz(Module.Data.size)));
            }
        },
        Exceptions:{
            UserException: function(message){
                this.message = message;
                this.name = 'UserException';
                this.date = new Date();
            }
        }
    }
    Module.Methods.init(5);
})();