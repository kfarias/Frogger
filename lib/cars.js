var Index = require('./frog.js')

function Cars (x, y, width, height){
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
}

Cars.prototype.draw = function(context, taxiLeft) {
  context.fillStyle = 'transparent';
context.drawImage(taxiLeft, this.x, this.y, this.width, this.height);
return this;
};



Cars.prototype.moveOne = function(context) {
  if (this.x < -100) {
    this.x = 600;
  }
  this.x--;
}

Cars.prototype.moveTwo = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}

Cars.prototype.moveThree = function(context) {
  if (this.x < -70) {
    this.x = 600;
  }
  this.x--;
}

Cars.prototype.moveFour = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}

Cars.prototype.moveFive = function(context) {
  if (this.x < -70) {
    this.x = 600;
  }
  this.x--;
}

Cars.prototype.moveSix = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}

Cars.prototype.moveSeven = function(context) {
  if (this.x < -100) {
    this.x = 600;
  }
  this.x--;
}

Cars.prototype.moveEight = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}

Cars.prototype.moveNine = function(context) {
  if (this.x > 650) {
    this.x = -50;
  }
  this.x++;
}



module.exports = Cars;
