(function(){
    var Module = {
        Controls:{
            //display: document.querySelector('.js-display'),
            button8: document.querySelector('.js-button-8'),
            button9: document.querySelector('.js-button-9'),
            button10: document.querySelector('.js-button-10'),
        },
        Handlers:{
            button8: function(event){
                event.preventDefault();
                window.location.replace("/lab/lab8");
                /*$.ajax({
                    url: 'lab/lab8',
                    method: 'GET'
                }).then(Module.Handlers.onClickSuccess)
                  .catch(Module.Handlers.onClickError);*/
            },
            button9: function(event){
                event.preventDefault();
                window.location.replace("/lab/lab9");
                /*$.ajax({
                    url: 'lab/lab9',
                    method: 'GET'
                }).then(Module.Handlers.onClickSuccess)
                  .catch(Module.Handlers.onClickError);*/
            },
            button10: function(event){
                event.preventDefault();
                window.location.replace("/lab/lab10");
                /*$.ajax({
                    url: 'lab/lab10',
                    method: 'GET'
                }).then(Module.Handlers.onClickSuccess)
                  .catch(Module.Handlers.onClickError);*/
            },
            /*onClickSuccess: function(resp){
                Module.Controls.display.innerHTML = resp;
            },
            onClickError: function(err){
                console.log(err)
            }*/
        },
        Methods: {
            init: function(){
                Module.Controls.button8.addEventListener('click', Module.Handlers.button8);
                Module.Controls.button9.addEventListener('click', Module.Handlers.button9);
                Module.Controls.button10.addEventListener('click', Module.Handlers.button10);
            }
        }
    }
    Module.Methods.init();
})();