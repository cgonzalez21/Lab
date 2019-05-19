//2. Funcion que retorne una diagonal principal de una matriz NxN.

(function(){
    Module2 = {
        Data :{
            size: undefined,
        },
        Methods:{
            init: function(size){
                Module2.Data.size = size
                Module2.Methods.calc();
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                 function crearMatriz(size){
                    let arr = [];
                    if (isNaN(size)){
                        throw new Module2.Exceptions.UserException("No es un numero: " + size);
                    }else{
                        for (let i = 0; i < size * size; i++) {
                            arr.push(Math.floor(Math.random() * (10 - 1)) + 1);
                        }
                    }
                    return arr;
                }
                function calDiagPrinc(arr){
                    let j = 0;
                    let sum = 0;
                    for (let i = 0; i < arr.length; i += 1) {
                        //1 1 1
                        //1 1 1
                        //1 1 1
                        if(j = i){
                            sum = sum + arr[i];
                        }
                        
                    }
                    return sum;
                }
                console.log(crearMatriz(Module2.Data.size));
                console.log(calDiagPrinc(crearMatriz(Module2.Data.size)));
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
    Module2.Methods.init(3);
})();