(function () {
    var Module = {
        Data:{
            arregloP: [],
        },
        Controls:{
            form: document.querySelector('.js-form'),
            input: document.querySelector('.js-form-arr'),
            div: document.querySelector('.js-result'),
        },
        Handlers:{
            onClickForm: function(ev){
                Module.Controls.div.innerHTML = "";
                ev.preventDefault();
                let arr = [];
                let size = Module.Controls.input.value;
                let result = Module.Methods.calc(size);
                let printMatrixWithResult = "";

                arr = Module.Data.arregloP;
                for (let i = 0; i < arr.length; i++) {
                    printMatrixWithResult = printMatrixWithResult + "<br>|";
                    for (let j = 0; j < arr.length; j++) {
                        printMatrixWithResult = printMatrixWithResult + "\t" + arr[i][j];
                    }
                    printMatrixWithResult = printMatrixWithResult + "|";
                }
                printMatrixWithResult = printMatrixWithResult + "<p>El resultado es: "+ result + "</p>";
                Module.Controls.div.innerHTML = printMatrixWithResult;
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
                Module.Controls.form.addEventListener('submit', Module.Handlers.onClickForm);
            },
            calc:function(size){
                function crearMatriz(size){
                    if (isNaN(size)){
                        throw new Module.Exceptions.UserException("No es un numero: " + size);
                    }else{
                        for (let i = 0; i < size; i++) {
                            let arrTemp = []
                            for (let j = 0; j < size; j++) {
                                arrTemp.push(Math.floor(Math.random() * (10 - 1)) + 1);
                            }
                            Module.Data.arregloP.push(arrTemp);
                        }
                    }
                    return Module.Data.arregloP;
                }
                function calDiagPrinc(arr){
                    let sum = 0;
                    for (let i = 0; i < arr.length ; i += 1) {
                        sum = sum + arr[i][i];
                    }
                    return sum;
                }
                return calDiagPrinc(crearMatriz(size));
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