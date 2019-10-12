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

//define all the relevant variables//
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
  bannerText.html();

  console.log("t1");
  //declare function on game start status//
  function gameStart() {
    $("#bannerText, #targetPoints,#resultPoints").empty();
    targetPoints = 19 + Math.floor(Math.random() * 102);
    $("#targetPoints").html(targetPoints);
    dRedPoints = 1 + Math.floor(Math.random() * 12);
    dBluePoints = 1 + Math.floor(Math.random() * 12);
    dYellowPoints = 1 + Math.floor(Math.random() * 12);
    dGreenPoints = 1 + Math.floor(Math.random() * 12);
    resultPoints = 0;

    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    $("button-red").attr("data-points", dRedPoints);
    $("button-blue").attr("data-points", dBluePoints);
    $("button-yellow").attr("data-points", dYellowPoints);
    $("button-green").attr("data-points", dGreenPoints);
  }

  $(".btn").click(function() {
    resultPoints += parseInt($(this).attr("data-points"));
    $("#resultPoints").html(resultPoints);
    //if statement for individual button points
  });
  console.log($("#button-red").attr("data-points"));
  console.log("haha");

  if (resultPoints === targetPoints) {
    bannerText.html("Well done with the diamonds!");
    wins++;
    $("#wins").html(wins);
    gameStart();
  } else if (resultPoints > targetPoints) {
    bannerText.html("TRY AGAIN PLEASE!");
    losses--;
    $("#losses").html(losses);
    gameStart();
  }

  gameStart();
});

console.log("t3");
