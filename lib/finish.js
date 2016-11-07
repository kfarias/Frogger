var Index = require('./frog.js')

function FinishLine(x, y, width, height, canvas){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.canvas = canvas;
}

FinishLine.prototype.drawFinish = function(context) {
  context.beginPath();
  context.fillRect( this.x, this.y, this.width, this.height);
  context.fillStyle = 'black';
  context.fill();
  context.closePath();
}

module.exports = FinishLine;
