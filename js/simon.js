function Simon(start) {
  this.correctSequence = [start];
}

Simon.prototype.randomize = function() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  if (randomNumber === 1) {
    this.correctSequence.push("red");
    console.log("red");
  } else if (randomNumber === 2) {
    this.correctSequence.push("yellow");
    console.log("yellow");
  } else if (randomNumber === 3) {
    this.correctSequence.push("green");
    console.log("green");
  } else {
    this.correctSequence.push("blue");
    console.log("blue");
  }
};

Simon.prototype.compareArrays = function(playerArr) {
  return (this.correctSequence.toString() === playerArr.toString());
}

Simon.prototype.clear = function() {
  this.correctSequence = ["red"];
}
exports.simonModule = Simon;
