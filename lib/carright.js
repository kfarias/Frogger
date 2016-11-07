
var Index = require('./frog.js')
var carLeft = require('./carleft.js');

function CarRight(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

CarRight.prototype.draw = function (context, taxiRight) {
  context.fillStyle = 'transparent';
  context.drawImage(taxiRight, this.x, this.y, this.width, this.height);
  return this;
};

CarRight.prototype.moveRight =
function(context) {
  if (this.x > 600) {
    this.x = (0 - this.width);
  }
  this.x++;
}

module.exports = CarRight;
