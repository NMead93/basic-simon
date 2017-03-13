function Simon(start) {
  this.correctSequence = [start];
}

Simon.prototype.randomize = function() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  if (randomNumber === 1) {
    this.correctSequence.push("red");
  } else if (randomNumber === 2) {
    this.correctSequence.push("yellow");
  } else if (randomNumber === 3) {
    this.correctSequence.push("green");
  } else {
    this.correctSequence.push("blue");
  }
};

Simon.prototype.compareArrays = function(playerArr) {
  return (this.correctSequence.toString() === playerArr.toString());
}

exports.simonModule = Simon;
