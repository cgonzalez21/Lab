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
                Module.Controls.div.innerHTML = "<p>[" + Module.Data.arr + "]</p><p>La sumatoria es : " + Module.Methods.calc(Module.Data.arr) + "</p>";
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
            getArray: function(){
                return Module.Controls.input.value.split(',');
            },
            bindEvents: function(){
                Module.Controls.form.addEventListener('submit', Module.Handlers.onClickForm);
            },
            calc:function(arr){
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