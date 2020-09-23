function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Error en " + url);
    });
    req.send(null);
}


window.addEventListener('load', function(e){
  e.preventDefault();
    
    
  // TEMPERATURA LYON 

    
  ajaxGet("https://api.openweathermap.org/data/2.5/weather?q=lyon&APPID=82327ae87488246798ae44df44aa5b26&lang=en&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);

      var temperature = document.createElement("h3");
      temperature.textContent = data.main.temp + "°";

      document.getElementById("temperaturaLyonHoy").appendChild(temperature);
      document.getElementById("iconoLyon").src= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  });    

    
  // TEMPERATURA PARÍS  

    
  ajaxGet("https://api.openweathermap.org/data/2.5/weather?q=paris&APPID=82327ae87488246798ae44df44aa5b26&lang=en&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);

      var temperature = document.createElement("h3");
      temperature.textContent = data.main.temp + "°";

      document.getElementById("temperaturaParHoy").appendChild(temperature);
      document.getElementById("iconoPar").src= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  });    

    
   // TEMPERATURA BOGOTÁ 
    
    
  ajaxGet("https://api.openweathermap.org/data/2.5/weather?q=bogota&APPID=82327ae87488246798ae44df44aa5b26&lang=en&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);

      var temperature = document.createElement("h3");
      temperature.textContent = data.main.temp + "°";
      
      document.getElementById("temperaturaBogHoy").appendChild(temperature);
      document.getElementById("iconoBog").src= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      
  });
    
    
  // FORECAST BOGOTÁ 
    
    
  ajaxGet("https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly,alerts&appid=82327ae87488246798ae44df44aa5b26&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);
      
      var temperature = document.createElement("h6");
      temperature.textContent = data.daily[3].temp.max + "°" + " / " + data.daily[3].temp.min + "°";

      document.getElementById("temperaturaBogVier").appendChild(temperature);
      document.getElementById("iconoBog1").src= "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png";
  });
    
  ajaxGet("https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly,alerts&appid=82327ae87488246798ae44df44aa5b26&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);
      
      var temperature = document.createElement("h6");
      temperature.textContent = data.daily[4].temp.max + "°" + " / " + data.daily[4].temp.min + "°";

      document.getElementById("temperaturaBogSab").appendChild(temperature);
      document.getElementById("iconoBog2").src= "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png";
  });
    
  ajaxGet("https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly,alerts&appid=82327ae87488246798ae44df44aa5b26&units=metric", function (response) {

      var data = JSON.parse(response);
      console.log(data);
      
      var temperature = document.createElement("h6");
      temperature.textContent = data.daily[5].temp.max + "°" + " / " + data.daily[5].temp.min + "°";

      document.getElementById("temperaturaBogDom").appendChild(temperature);
      document.getElementById("iconoBog3").src= "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png";
  });

    
});