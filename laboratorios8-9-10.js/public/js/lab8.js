(function () {
    var Module = {
        Data:{
            arr: undefined,
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
                    url: '/lab/lab8',
                    data: {
                        arr : Module.Methods.getArray(),
                    },
                    method: 'POST'
                }).then(Module.Handlers.onFormSubmitSuccess)
                  .catch(Module.Handlers.onFormSubmitError);
            },
            onFormSubmitSuccess: function(resp){
                //console.log(resp.message);
                Module.Controls.result.innerHTML = `<div class="alert alert-success" role="alert">
                                                        <p>${resp.message}</p>
                                                    </div>`;
            },
            onFormSubmitError: function(err){
                //console.log(err);
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
            getArray: function(){
                return Module.Controls.input.value.split(',');
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