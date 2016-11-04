var Index = require('./frog.js')
var carRight = require('./carright.js')

function CarLeft (x, y, width, height){
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
}

CarLeft.prototype.draw = function(context, taxiLeft) {
  context.fillStyle = 'transparent';
context.drawImage(taxiLeft, this.x, this.y, this.width, this.height);
return this;
};


CarLeft.prototype.moveLeftNine = function(context) {
  if (this.x < 0) {
    this.x = 650;
  }
  this.x--;
}

CarLeft.prototype.moveLeftSeven = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x--;
}

CarLeft.prototype.moveLeftFive = function(context) {
  if (this.x < -70) {
    this.x = 600;
  }
  this.x--;
}

CarLeft.prototype.moveLeftThree = function(context) {
  if (this.x < -100) {
    this.x = 600;
  }
  this.x--;
}

CarLeft.prototype.moveLeftOne = function(context) {
  if (this.x < -100) {
    this.x = 600;
  }
  this.x--;
}




module.exports = CarLeft;
