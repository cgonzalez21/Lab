(function(){
  var Module = {
    Data:{},
    Controls:{
      div: document.querySelector(".js-clock"),
    },
    Events:{
      onLoad: function(){
        Module.Methods.calc();
      }
    },
    Methods:{
      init: function(){
        window.addEventListener("load", Module.Events.onLoad);
      },
      calc: function(){
        function getClockData(){
          let currentTime = new Date ( );
          let currentHours = currentTime.getHours ( );
          let currentMinutes = currentTime.getMinutes ( );
          let currentSeconds = currentTime.getSeconds ( );
          let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

          currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
          currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
          currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
          currentHours = ( currentHours == 0 ) ? 12 : currentHours;
          let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

          Module.Controls.div.innerHTML = currentTimeString

          setTimeout(function(){ getClockData()}, 1000);
        }
        getClockData();
      }
    },
  };
  Module.Methods.init();
})();