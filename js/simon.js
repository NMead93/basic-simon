function Simon(start) {
  this.correctSequence = [start];
  this.inTime = true;
  this.timer;
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

Simon.prototype.outOfTime = function() {
  this.inTime = false;
  console.log("Out of Time!");
}

Simon.prototype.resetTimer = function() {
  this.inTime = true;
  clearInterval(this.timer);
  this.timer = setInterval(this.outOfTime, 8000);
}
exports.simonModule = Simon;
