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
                Module.Methods.calc();                
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                function sortArray(arr){
                    let auxArr = arr;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            console.log(auxArr[0][i] + auxArr[0][j]);
                        }                 
                    }
                }
                console.log(sortArray(Module.Data.arr));
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
    let arr = [[3],
               [7, 4],
               [2, 4, 6,],
               [8, 5, 9, 3]];
    Module.Methods.init(arr);
})();
