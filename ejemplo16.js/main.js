(function(){
    var Module = {
        Config: {
            url: "/api/v1/estudiantes",
        },
        Controls:{
            tBody: document.querySelector('.js-body'),
        },
        Events: {
            onSuccess: function(resp){
                var responseHtml = "";
                for (let i = 0; i  < resp.estudiantes.length; i += 1) {
                    responseHtml += `
                        <tr>
                            <td><a href="/estudiantes"> ${resp.estudiantes[i].nombre}</a></td>
                            <td>${resp.estudiantes[i].edad}</td>
                        </tr>
                    `;
                }
            },
            onError: function(error){
                console.log(error);
            },
        },
        Methods:{
            init: function(){
                Module.Methods.initTable();
            },
            initTable: function(){
                var { Config: { url },
                      Events: { OnSuccess, onError} } = Module;
                var reponse = setTimeout(() => {
                    $.ajax({url}).then(OnSuccess).catch(onError);
                }, 1000);
            }
        }
    };
    Module.Methods.init();
})();