(function () {
    var Module = {
        Data:{
            arr: undefined,
        },
        Controls:{
            form: document.querySelector('.js-form'),
            input: document.querySelector('.js-form-arr'),
            div: document.querySelector('.js-result'),
        },
        Handlers:{
            onClickForm: function(ev){
                ev.preventDefault();
                Module.Data.arr = Module.Methods.getArray();
                Module.Controls.div.innerHTML = "<p>La sumatoria es : " + Module.Methods.calc(Module.Data.arr) + "</p>";
            }
        },
        Methods:{
            init: function(){
                Module.Methods.bindEvents();
            },
            initExceptions: function(){
                App.Exceptions.UserException.prototype.toString = function(){
                    return  `[${this.date}] ${this.name}: ${this.message}`;
                };
            },
            bindEvents: function(){
                Module.Controls.form.addEventListener('click', Module.Handlers.onClickForm);
            },
            calc:function(arr){
                let sum = 0;
                for (let i = 0; i < arr.length; i += 1) {
                    if (isNaN(arr[i])) {
                        throw new Module.Exceptions.UserException("No es un numero: "+ arr[i]);
                    }else if(arr[i] > 0 && arr[i] < 101){
                        sum = sum + parseInt(arr[i]);
                    }else{
                        throw new Module.Exceptions.UserException("El numero no esta en el rango permitido: " + arr[i]);
                    }
                }
                return sum;
            },
        },
        Exceptions:{
            UserException: function(message){
                this.message = message;
                this.name = 'UserException';
                this.date = new Date();
            }
        }
    };
    Module.Methods.init();
})();