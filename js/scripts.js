//Business Logic
function pigDiceGame() {
  this.diceRoll = 0;
  this.turnScore = 0;
  this.runningTotal = 0;
  this.roll = function() {
    return Math.floor(Math.random()*6) + 1;
  }
}


//User Interface
$(document).ready(function() {
  $("#playButton").click(function(event) {
    event.preventDefault();
    firstPlayer = $("#firstPlayerName").val();
    secondPlayer = $("#secondPlayerName").val();
  });
});

// display input
$("#startPlayFirstPlayerName").text(firstPlayer);
$("#startPlaySecondPlayerName").text(secondPlayer);

firstPlayerBegins = new pigDiceGame();
secondPlayerBegins = new pigDiceGame();


//firstPlayerRoll
$(".rollOne").click(function() {
  var scrolled = firstPlayerBegins.roll();
  firstPlayerBegins.turnScore += scrolled;
  if (scrolled == 1) {
    firstPlayerBegins.turnScore = 0;
    $(".turnScoreOne").text(firstPlayerBegins.turnScore);
    $("#firstPlayer").hide()
    $("#secondPlayer").show()
}

  $(".turnScoreOne").text(firstPlayerBegins.turnScore);
  $(".runningTotalOne").text(firstPlayerBegins.runningTotal);

});
$(".holdOne").click(function() {
  firstPlayerBegins.runningTotal += firstPlayerBegins.turnScore;
  firstPlayerBegins.turnScore = 0;
  $(".runningTotalOne").text(firstPlayerBegins.runningTotal);
  $(".turnScoreOne").text(firstPlayerBegins.turnScore);
  $("#firstPlayer").hide()
  $("#secondPlayer").show()

});

//second Player Roll
$(".rollTwo").click(function() {
  var scrolled = secondPlayerBegins.roll();
  secondPlayerBegins.turnScore += scrolled;
  if (scrolled == 1) {
    secondPlayerBegins.turnScore = 0;
    $(".turnScoreTwo").text(secondPlayerBegins.turnScore);
    $("#secondPlayer").hide()
    $("#firstPlayer").show()
}
$(".turnScoreTwo").text(secondPlayerBegins.turnScore);
$(".runningTotalTwo").text(secondPlayerBegins.runningTotal);

});

$(".holdTwo").click(function() {
  secondPlayerBegins.runningTotal += secondPlayerBegins.turnScore;
  secondPlayerBegins.turnScore = 0;
  $(".runningTotalTwo").text(secondPlayerBegins.runningTotal);
  $(".turnScoreTwo").text(secondPlayerBegins.turnScore);
  $("#secondPlayer").hide()
  $("#firstPlayer").show()
});


$("#aboutMenu").click(function() {
    $("#about").toggle();
})
$("#gamesMenu").click(function() {
  $("#gameRules").toggle();
})
