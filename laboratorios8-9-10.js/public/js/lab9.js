(function () {
    var Module = {
        Data:{
            arregloP: [],
        },
        Controls:{
            form: document.querySelector('.js-form'),
            input: document.querySelector('.js-form-arr'),
            result: document.querySelector('.js-result'),
        },
        Handlers:{
            onSubmitForm: function(ev){
                ev.preventDefault();
                //Module.Data.arr = Module.Methods.getArray();
                //Module.Controls.result.innerHTML = "<p>La sumatoria es : " + Module.Methods.calc(Module.Data.arr) + "</p>";
                $.ajax({
                    url: '/lab/lab9',
                    data: {
                        size : Module.Controls.input.value,
                    },
                    method: 'POST'
                }).then(Module.Handlers.onFormSubmitSuccess)
                  .catch(Module.Handlers.onFormSubmitError);
            },
            onFormSubmitSuccess: function(resp){
                console.log(resp.array);
                let array = resp.array;
                let arregloHtml = '';
                arregloHtml += '<table class="table text-light">';
                for (let i = 0; i < array.length; i++) {
                    arregloHtml += '<tr>';
                    for (let j = 0; j < array.length; j++) {
                        arregloHtml += '<td>' + array[i][j] +'</td>';
                    }
                    arregloHtml += '</tr>';
                }
                arregloHtml += '</table>';
                Module.Controls.result.innerHTML += arregloHtml;
                Module.Controls.result.innerHTML += `<div class="alert alert-success" role="alert">
                                                        <p>${resp.result}</p>
                                                    </div>`;
            },
            onFormSubmitError: function(err){
                console.log(err);
                Module.Controls.result.innerHTML = `<div class="alert alert-danger" role="alert">
                                                        <p>ERROR</p>
                                                    </div>`;
            },
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
                Module.Controls.form.addEventListener('submit', Module.Handlers.onSubmitForm);
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