//V1
/*document.getElementById('name-form').addEventListener('submit', function(ev){
    alert(document.querySelector('input[name="name"]').value);
});*/
//V2
(function () {
    var Module = {
        Controls:{
            form: document.querySelector('.js-form'),
            input: document.querySelector('.js-form-name'),
        },
        Handlers:{
            onSubmitForm: function(ev){
                alert(Module.Controls.input.value);
            }
        },
        Methods:{
            init: function(){
                Module.Methods.bindEvents();
            },
            bindEvents: function() {
                Module.Controls.form.addEventListener('submit', Module.Handlers.onSubmitForm);
            },
        }
    };
    Module.Methods.init();
})();