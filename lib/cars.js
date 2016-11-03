var Index = require('./frog.js')

function Cars (x, y, width, height){
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
}

Cars.prototype.draw = function(context) {
context.fillRect(this.x, this.y, this.width, this.height);
return this;
};

Cars.prototype.moveOne = function(context) {
  this.x--;
}

Cars.prototype.moveTwo = function(context) {
  this.x++;
}







//
// var firstCar = new Cars(50, 50, 10, 10);
// firstCar.draw();

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   drawFrog();
//   firstCar.draw();
//   requestAnimationFrame(gameLoop);
// });

module.exports = Cars;
