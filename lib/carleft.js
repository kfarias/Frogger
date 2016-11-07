var Frog = require('./frog.js')
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

CarLeft.prototype.moveLeft =
function(context) {
  if (this.x < (0 - this.width)) {
    this.x = 600 + this.width;
  }
  this.x--;
}

module.exports = CarLeft;
