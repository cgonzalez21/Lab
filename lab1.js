    (function(){
    var App = {
        Data: {
            num:undefined
        },
        Methods: {
            init: function(n){
               num = n;
               App.Methods.initExceptions();
               if (num > 0 && num < 100){
                App.Methods.calc();
               }else{
                throw new App.Exceptions.UserException("Numero invalido");
               }
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            calc: function(){
                function fibonnaci(n){
                    if (n===1) {
                        return[0, 1];
                    }
                    else{
                        var s = fibonnaci(n - 1);
                        s.push(s[s.length - 1] + s[s.length - 2]);
                        return s;
                    }
                }
                console.log(fibonnaci(num));
            }
        },
        Events:{},
        Helpers:{},
        Exceptions:{
            UserException: function(message){
                this.message = message;
                this.name = 'UserException';
                this.date = new Date();
            }
        }
    };
    App.Methods.init(10);
})();
