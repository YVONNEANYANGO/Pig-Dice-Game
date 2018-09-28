var randomNumber = []

player.prototype.roll = function () {
  var randomNumber = math.floor((math.random()*6)+1);
  this.diceRoll = randomNumber
}





$(document).ready(function(){
  function changeText({
    if($("#About").css("display") =="none") {
      $("#About").fadeIn("slow");
    } else {
      $("#About").fadeOut("slow");
    }
  })
})
