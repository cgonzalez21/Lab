//1. Escribir una funcion que reciba un arreglo de enteros y retorne 
//la sumatoria de todos los elementos. n entre 1 y 100

(function(){
    Module = {
        Data : {
            arr: undefined,
            str: undefined,
        },
        Methods : {
            init : function(str){
                Module.Data.str = str;
                Module.Methods.calc();                
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                let arr = [];
                function getLetters(str){
                    for (let i = 0; i < str.length; i++) {
                        arr[i] = str.charAt(i);
                    }
                    return arr;
                }
                function evaluateString(arr){
                    for (let i = 0; i < arr.length; i++) {
                        if (!isNaN(arr[i])) {
                            throw new Module.Exceptions.UserException("El caracter ingresado no es valido");
                        }
                    }
                }
                function countLetters(arr){
                    let arrAux = [];
                    let arrCount = {};
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
                    }
                    return arrCount;
                }
                Module.Data.arr = getLetters(Module.Data.str);
                evaluateString(Module.Data.arr);
                console.log(Module.Data.arr);
                console.log(countLetters(Module.Data.arr));
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
    Module.Methods.init('aaaabbbbcccaabb');
})();
