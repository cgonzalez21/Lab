//2. Funcion que retorne una diagonal principal de una matriz NxN.

(function(){
    Module = {
        Data :{},
        Methods:{
            init: function(size){
                Module.Methods.calc();
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                 function crearMatriz(){}
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