//3. Escribir una funcion que reciba un arreglo y retorne la cantidad de pares que encuentre en el arreglo.
//Un elemento puede ser contado dentro de un solo par.

(function(){
    Module = {
        Data :{
            arr : [],
        },
        Methods:{
            init: function(arr){
                Module.Data.arr = arr;
                Module.Methods.calc();
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
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
                        totalCount = totalCount + ((arrCount[arrAux[i]] - (arrCount[arrAux[i]] % 2))/2);
                    }
                    return totalCount;
                }
                console.log("Cantidad total de pares es igual a : " + countPairs(Module.Data.arr));
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
    var arr = [1, 2, 1, 1, 2, 3, 5, 4, 5, 4, 7, 1];
    Module.Methods.init(arr);
})();