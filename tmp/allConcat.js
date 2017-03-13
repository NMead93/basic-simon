var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var player = [];
  var newGame = new Simon("red");

  $("#red").click(function() {
    player.push("red");
  });
  $("#yellow").click(function() {
    player.push("yellow");
  });
  $("#green").click(function() {
    player.push("green");
  });
  $("#blue").click(function() {
    player.push("blue");
  });
  $("#simon-form").submit(function(event) {
    event.preventDefault();

    if (newGame.compareArrays(player)) {
      console.log("winner");
    } else {
      console.log("loser");
    }

  });
});
