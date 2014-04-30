function degToCompass(num) {
    val= Math.round(num/22.5);
    arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(val % 16)];
}

var main = function () {
  "use strict";

  $("button.submit").on("click", function (event){
    var selector = $(".selector").val().split(",");
    console.log(selector);
    var country = selector[0];
    var city = selector[1];
    city = city.replace(/\s+/g, '');
    var requestURL = "http://api.openweathermap.org/data/2.5/weather?q="+country+","+city+
        "&callback=?";
    $.getJSON(requestURL,function(data){
      //console.log(data);
      var temp = parseInt(data.main.temp) - 273.15;
      var high = parseInt(data.main.temp_max) - 273.15;
      var low = parseInt(data.main.temp_min) - 273.15;
      var clouds = data.weather[0].description;
      var humidity = data.main.humidity;
      var speed = data.wind.speed;
      var direction = parseInt(data.wind.deg);
      var wind = degToCompass(direction);

      $(".clouds").text(clouds);
      $(".humidity").text(humidity);
      $(".wind").text(wind);
      $(".temp").text(temp.toFixed(1));
      $(".high").text(high.toFixed(1));
      $(".low").text(low.toFixed(1));
      $(".speed").text(speed);
      $(".direction").text(direction);
    });

  });

};

$(document).ready(main);
