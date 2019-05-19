//1. Escribir una funcion que reciba un arreglo de enteros y retorne 
//la sumatoria de todos los elementos. n entre 1 y 100

(function(){
    Module = {
        Data : {
            arr: undefined,
        },
        Methods : {
            init : function(arr){
                Module.Data.arr = arr;                
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                function sumatoriaArreglo (arr){
                    let sum = 0;
                    for (let i = 0; i < arr.length; i += 1) {
                        if (isNaN(arr[i])) {
                            throw new Module.Exceptions.UserException("No es un numero: "+ arr[i]);
                        }else if(arr[i] > 0 && arr[i] < 101){
                            sum = sum + arr[i];
                        }else{
                            throw new Module.Exceptions.UserException("El numero no esta en el rango permitido: " + arr[i]);
                        }
                    }
                    return sum;
                }
                console.log(sumatoriaArreglo(Module.Data.arr));
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
    var arr = [1, 2 , 3, 5];
    Module.Methods.init(arr);
})();


//3. Escribir una funcion que reciba un arreglo y retorne la cantidad de pares que encuentre en el arreglo.
//Un elemento puede ser contado dentro de un solo par.