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
    $("#button-red").attr("data-points", dRedPoints);
    $("#button-blue").attr("data-points", dBluePoints);
    $("#button-yellow").attr("data-points", dYellowPoints);
    $("#button-green").attr("data-points", dGreenPoints);
  }

  $(".btn").click(function() {
    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    resultPoints += parseInt($(this).attr("data-points"));
    $("#resultPoints").html(resultPoints);
    $("#resultPoints").addClass("heartBeat");
    //tried delay but not work//
    // $("#resultPoints").delay(1000).removeClass("heartBeat");

    //if statement for individual button points

    if (resultPoints === targetPoints) {
      wins++;
      $("#wins").html(wins);
      gameStart();
      bannerText.html("Well done with the diamonds!");
    } else if (resultPoints > targetPoints) {
      losses++;
      $("#losses").html(losses);
      gameStart();
      bannerText.html("TRY AGAIN PLEASE!");
    }
  });

  // $(".btn").mouseUp(function() {
  // $("#resultPoints").addClass("heartBeat");
  // });
  // $(".btn").mouseDown(function() {
  //   $("#resultPoints";
  //     .removeClass("heartBeat")};

  gameStart();
});
