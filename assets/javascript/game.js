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
  var redTotal = 0;
  var blueTotal = 0;
  var yellowTotal = 0;
  var greenTotal = 0;
  var percentageRed = 0;

  //define banner text
  var bannerText = $("#bannerText");
  bannerText.html();

  //set up function for calculating progressive bar expreesion
  function turnIntoPercentage(figure) {
    return (figure * 100).toFixed(2) + "%";
  }

  //initial state of progress bar
  function resetProgressBar() {
    redTotal = 0;
    blueTotal = 0;
    yellowTotal = 0;
    greenTotal = 0;
    $(".progress div:eq(0)").css("width", 0);
    $(".progress div:eq(1)").css("width", 0);
    $(".progress div:eq(2)").css("width", 0);
    $(".progress div:eq(3)").css("width", 0);
    $(".progress").html();
  }

  //declare function on game start status//
  function gameStart() {
    $("#bannerText, #targetPoints,#resultPoints").empty();

    //generate random number to guess
    targetPoints = 19 + Math.floor(Math.random() * 102);

    //display target points
    $("#targetPoints").html(targetPoints);
    dRedPoints = 1 + Math.floor(Math.random() * 12);
    dBluePoints = 1 + Math.floor(Math.random() * 12);
    dYellowPoints = 1 + Math.floor(Math.random() * 12);
    dGreenPoints = 1 + Math.floor(Math.random() * 12);
    resultPoints = 0;
    redTotal = 0;
    blueTotal = 0;
    yellowTotal = 0;
    greenTotal = 0;

    //function for refreshing each round's dimaond randomised points
    resetProgressBar();
    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    $("#button-red").attr("data-points", dRedPoints);
    $("#button-blue").attr("data-points", dBluePoints);
    $("#button-yellow").attr("data-points", dYellowPoints);
    $("#button-green").attr("data-points", dGreenPoints);
  }

  //function for calculating accumulated points after each click on particular diamonds
  $("#button-red").click(function() {
    redTotal += parseInt(dRedPoints);
    console.log(redTotal);
    percentageRed = redTotal / targetPoints;

    $(".progress div:eq(0)").css("width", turnIntoPercentage(percentageRed));
    $(".progress").html();
  });

  $("#button-blue").click(function() {
    blueTotal += parseInt(dBluePoints);
    console.log(blueTotal);
    percentageBlue = blueTotal / targetPoints;

    $(".progress div:eq(1)").css("width", turnIntoPercentage(percentageBlue));
    $(".progress").html();
  });

  $("#button-yellow").click(function() {
    yellowTotal += parseInt(dYellowPoints);
    console.log(yellowTotal);
    percentageYellow = yellowTotal / targetPoints;

    $(".progress div:eq(2)").css("width", turnIntoPercentage(percentageYellow));
    $(".progress").html();
  });

  $("#button-green").click(function() {
    greenTotal += parseInt(dGreenPoints);
    console.log(greenTotal);
    percentageGreen = greenTotal / targetPoints;

    $(".progress div:eq(3)").css("width", turnIntoPercentage(percentageGreen));
    $(".progress").html();
  });

  $(".btn").click(function() {
    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    resultPoints += parseInt($(this).attr("data-points"));
    //display result points with added css effects (via class animation)
    $("#resultPoints").html(resultPoints);
    $("#resultPoints").addClass("heartBeat");
    setTimeout(function() {
      $("#resultPoints").removeClass("heartBeat");
    }, 900);

    //if statement to decide game progress and display game stats when game finish
    if (resultPoints === targetPoints) {
      wins++;
      $("#wins").html(wins);
      gameStart();
      resetProgressBar();
      bannerText.html("Well done with the diamonds!");
    } else if (resultPoints > targetPoints) {
      losses++;
      $("#losses").html(losses);
      gameStart();
      resetProgressBar();
      bannerText.html("TRY AGAIN PLEASE!");
    }
  });

  //initialise game
  gameStart();
});
