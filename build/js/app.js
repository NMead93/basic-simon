(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

    if (newGame.compareArrays(player) && newGame.inTime) {
      console.log("winner");
      newGame.randomize();
      newGame.resetTimer();
    } else {
      console.log("loser");
      newGame.clear();
      clearInterval(newGame.timer);
    }
    player = [];
  });
});

},{"./../js/simon.js":1}]},{},[2]);
