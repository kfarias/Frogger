require('./frog.js');

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawFrog();
  firstCar.draw();
  requestAnimationFrame(gameLoop);
});
