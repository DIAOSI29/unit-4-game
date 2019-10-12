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
  var redTotal = 0;
  var blueTotal = 0;
  var yellowTotal = 0;
  var greenTotal = 0;
  var percentageRed = 0;

  var bannerText = $("#bannerText");
  bannerText.html();

  function turnIntoPercentage(figure) {
    return (figure * 100).toFixed(2) + "%";
  }

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
    redTotal = 0;
    blueTotal = 0;
    yellowTotal = 0;
    greenTotal = 0;

    resetProgressBar();
    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    $("#button-red").attr("data-points", dRedPoints);
    $("#button-blue").attr("data-points", dBluePoints);
    $("#button-yellow").attr("data-points", dYellowPoints);
    $("#button-green").attr("data-points", dGreenPoints);
  }

  $("#button-red").click(function() {
    redTotal += parseInt(dRedPoints);
    console.log(redTotal);
    percentageRed = redTotal / targetPoints;

    $(".progress div:eq(0)").css("width", turnIntoPercentage(percentageRed));
    $(".progress").html();
    if (targetPoints - redTotal - blueTotal - yellowTotal - greenTotal < 0) {
      resetProgressBar();
    }
  });

  $("#button-blue").click(function() {
    blueTotal += parseInt(dBluePoints);
    console.log(blueTotal);
    percentageBlue = blueTotal / targetPoints;

    $(".progress div:eq(1)").css("width", turnIntoPercentage(percentageBlue));
    $(".progress").html();
    if (targetPoints - redTotal - blueTotal - yellowTotal - greenTotal < 0) {
      resetProgressBar();
    }
  });

  $("#button-yellow").click(function() {
    yellowTotal += parseInt(dYellowPoints);
    console.log(yellowTotal);
    percentageYellow = yellowTotal / targetPoints;

    $(".progress div:eq(2)").css("width", turnIntoPercentage(percentageYellow));
    $(".progress").html();
    if (targetPoints - redTotal - blueTotal - yellowTotal - greenTotal < 0) {
      resetProgressBar();
    }
  });

  $("#button-green").click(function() {
    greenTotal += parseInt(dGreenPoints);
    console.log(greenTotal);
    percentageGreen = greenTotal / targetPoints;

    $(".progress div:eq(3)").css("width", turnIntoPercentage(percentageGreen));
    $(".progress").html();
    if (
      dRedPoints >
      targetPoints - redTotal - blueTotal - yellowTotal - greenTotal
    ) {
      resetProgressBar();
    }
  });

  $(".btn").click(function() {
    bannerText.html("CLICK DIAMONDS TO POINT UP!");
    resultPoints += parseInt($(this).attr("data-points"));

    $("#resultPoints").html(resultPoints);
    $("#resultPoints").addClass("heartBeat");
    setTimeout(function() {
      $("#resultPoints").removeClass("heartBeat");
    }, 900);
    // var deBounce;
    // function deBounce() {
    //   heartBeat = setTimeout($("#resultPoints").addClass("heartBeat"), 1000);

    //tried delay but not work//
    // $("#resultPoints").delay(1000).removeClass("heartBeat");

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

  // $(".btn").mouseUp(function() {
  // $("#resultPoints").addClass("heartBeat");
  // });
  // $(".btn").mouseDown(function() {
  //   $("#resultPoints";
  //     .removeClass("heartBeat")};

  gameStart();
});
