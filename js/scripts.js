// var randomNumber = []
//
// player.prototype.roll = function () {
//   var randomNumber = math.floor((math.random()*6)+1);
//   this.diceRoll = randomNumber
// }

//   $('#aboutmenu').on('click',function(){
//

//Business Logic
function pigDiceGame() {
  this.diceRoll = 0;
  this.turnScore = 0;
  this.overallScore = 100;
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
    $("#playerinfo").hide();
    $("#game-container").show();
    $(".rule").hide()
  })
})

// display input
$("#startPlayFirstPlayerName").text(firstPlayer);
$("#startPlaySecondPlayerName").text(secondPlayer);

firstPlayerBegins = new playGame();
secondPlayerBegins = new playGame();

});

//firstPlayerRoll
$(".rollOne").click(function() {
  var rolled = firstPlayerBegins.roll();
  firstPlayerBegins.turnScore += rolled;
  if (rolled == 1) {
    firstPlayerBegins.turnScore = 0;
    $(".turnScoreOne").text(firstPlayerBegins.turnScore);
    $("#firstPlayer").hide()
    $("#secondPlayer").show()

  }

  $(".turnScoreOne").text(firstPlayerBegins.turnScore);
  $(".overallScoreOne").text(player1Stats.totalScore);

});
$(".holdOne").click(function() {
  firstPlayerBegins.overallScore += firstPlayerBegins.turnScore;
  firstPlayerBegins.turnScore = 0;
  $(".overallScoreOne").text(firstPlayerBegins.overallScore);
  $(".turnScoreOne").text(player1Stats.turnScore);
  $("#firstPlayer").hide()
  $("#secondPlayer").show()

});
// player.prototype.roll = function () {
//   var randomNumber = math.floor ((math.random()*6)+1);
//   this.diceRoll = randomNumber;
//   if (randomNumber ===1 ){
//     this.turnTotal = 0;
//   }
// }

// /business logic
// function gameplayer() {
//  this.turnScore = 0;
//  this.totalScore = 0;
//  this.winningScore = 100;
//  this.roll = function() {
//    return Math.floor(Math.random() * 6) + 1;
//  }
// }



// //UI logic
// $(document).ready(function() {
//  $("#button").click(function() {
//    $(".rule").toggle()
//  });
//  $("#game-container").hide();
//
//  $("#start-game-button").click(function(event) {
//    event.preventDefault();
//
//    player1 = $("#player1Name").val();
//    player2 = $("#player2Name").val();
//    $("#playerinfo").hide();
//    $("#game-container").show();
//    $(".rule").hide()


   // display input
 //   $("#gameStartPlayer1Name").text(player1);
 //   $("#gameStartPlayer2Name").text(player2);
 //
 //   player1Stats = new gameplayer();
 //   player2Stats = new gameplayer();
 //
 // });
 // //player1roll
 // $("#roll-dice-button1").click(function() {
 //   var rolled = player1Stats.roll();
 //   player1Stats.turnScore += rolled;
 //   if (rolled == 1) {
 //     player1Stats.turnScore = 0;
 //     $("#stats-turn-score1").text(player1Stats.turnScore);
 //     $("#play1").hide()
 //     $("#play2").show()
 //
 //   }
 //
 //   $("#stats-turn-score1").text(player1Stats.turnScore);
 //   $("#stats-player-1-total-score1").text(player1Stats.totalScore);
 //
 // });
 // $("#hold-button1").click(function() {
 //   player1Stats.totalScore += player1Stats.turnScore;
 //   player1Stats.turnScore = 0;
 //   $("#stats-player-1-total-score").text(player1Stats.totalScore);
 //   $("#stats-turn-score1").text(player1Stats.turnScore);
 //   $("#play1").hide()
 //   $("#play2").show()
 //
 // });
 //player2 roll
 $("#roll-dice-button2").click(function() {
   var rolled = player2Stats.roll();
   player2Stats.turnScore += rolled;
   if (rolled == 1) {
     player2Stats.turnScore = 0;
     $("#stats-turn-score2").text(player2Stats.turnScore);
     $("#play2").hide()
     $("#play1").show()

   }

   $("#stats-turn-score2").text(player2Stats.turnScore);

 });
 $("#hold-button2").click(function() {
   player2Stats.totalScore += player2Stats.turnScore;
   player2Stats.turnScore = 0;
   $("#stats-player-2-total-score").text(player2Stats.totalScore);
   $("#stats-turn-score2").text(player2Stats.turnScore);
   $("#play2").hide()
   $("#play1").show()
 });


});

Message Input


Message @Rosemarymagoma








$("#aboutMenu").click(function() {
    $("#about").toggle();
})
$("#gamesMenu").click(function() {
  $("#gameRules").toggle();
})
