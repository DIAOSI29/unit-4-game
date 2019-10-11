// #bannerText
// #targetPoints
// #button-red
// #button-blue
// #button-yellow
// #button-green
// #resultPoints
// .bg-danger
// .bg-primary
// .bg-yellow
// .bg-green
// #wins
// #losses

//declare game generic variables
//define game initialisation funtion
//assign initial values to each variables
//

$(document).ready(function() {
  var targetPoints = 0;
  var dRedPoints = 0;
  var dBluePoints = 0;
  var dYellowPoints = 0;
  var dGreenPoints = 0;
  var resultPoints = 0;
  var wins = 0;
  var losses = 0;
  var bannerText = $("#bannerText");
  console.log("t1");
  function gameStart() {
    $("#wins, #losses, #bannerText, #targetPoints").empty();
    targetPoints = 19 + Math.floor(Math.random() * 102);
    dRedPoints = 1 + Math.floor(Math.random() * 12);
    dBluePoints = 1 + Math.floor(Math.random() * 12);
    dYellowPoints = 1 + Math.floor(Math.random() * 12);
    dGreenPoints = 1 + Math.floor(Math.random() * 12);
    resultPoints = 0;
    wins = 0;
    losses = 0;
    bannerText = "Points Up With Diamonds!";
    $("button-red").prop("points", dRedPoints);
    $("button-blue").prop("points", dBluePoints);
    $("button-yellow").prop("points", dYellowPoints);
    $("button-green").prop("points", dGreenPoints);
    console.log("t2");
  }

  $(".btn").click(function() {
    resultPoints += $(this).points();
    //if statement for individual button points
  });
});

console.log("t3");
