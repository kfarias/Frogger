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

CarRight.prototype.moveRightTen = function(context) {
  if (this.x < -100) {
    this.x = 600;
  }
  this.x++;
}

CarRight.prototype.moveRightEight = function(context) {
  if (this.x < -70) {
    this.x = 600;
  }
  this.x++;
}

CarRight.prototype.moveRightSix = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}

CarRight.prototype.moveRightFour = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}


CarRight.prototype.moveRightTwo = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}


module.exports = CarRight;
