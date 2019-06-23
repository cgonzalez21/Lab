(function(){
    var Module = {
        Controls:{
            //display: document.querySelector('.js-display'),
            button: document.querySelector('.js-button'),
        },
        Handlers:{
            button: function(event){
                event.preventDefault();
                window.location.replace("/");
                /*$.ajax({
                    url: 'lab/lab8',
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
                Module.Controls.button.addEventListener('click', Module.Handlers.button);
            }
        }
    }
    Module.Methods.init();
})();