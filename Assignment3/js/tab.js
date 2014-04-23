var petName = {};

function whatName(name) {
  if(name.length == 0)
    return "";

  if (name in petName){
    petName[name] += 1;
    return name + " now has " + petName[name] + " votes";
  }
  else {
    petName[name] = 1;
    return name + " now has " + petName[name] + " vote";
  }
}

function isPrime(num) {
  if (num.length == 0) return "";
  if (num < 1) return " you entered a value less than 1!"
  if (num < 2) return num + " is prime!";
  var max = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= max; i++) {
    if(num%i==0)
      return i + " divides " + num;
  }
  return num + " is prime!";
}


function selectTab( bid ) {
  $(".tabs button span").removeClass("active");
  $("button#" + bid + " span").addClass("active");

  $(".triad").addClass("hidden");
  $("div." + bid).removeClass("hidden");

  if (bid == "tab3") {
    $("canvas").fadeIn(0);
  } else {
    $("canvas").fadeOut(0);
  }


}

var main = function () {
  $("canvas").fadeOut(0);
  $(".tabs button").on("click", function (event){
    var bid = event.currentTarget.id;
    console.log( bid );
    selectTab( bid );
  });

  $("button.submit1").on("click", function (event){
    console.log("clicked");
    var selector = $(".selector1").val().toLowerCase();
    $(".answer1").text(whatName(selector));
    $(".selector1").val("");
  });

  $(".selector1").on("keypress", function (event){
    if(event.keyCode === 13) {
      var selector = $(".selector1").val().toLowerCase();
      $(".answer1").text(whatName(selector));
      $(".selector1").val("");
    }
  });

  $("button.submit2").on("click", function (event){
    var selector = $(".selector2").val();
    $(".answer2").text(isPrime(selector));
    $(".selector2").val("");

  });

  $(".selector2").on("keypress", function (event){
    if(event.keyCode === 13) {
      var selector = $(".selector2").val();
      $(".answer2").text(isPrime(selector));
      $(".selector2").val("");
    }
  });

}

$(document).ready(main);