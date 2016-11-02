var Frog = require('./frog.js');
var Cars = require('./cars.js');


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var frog = new Frog((canvas.width-25)/2, (canvas.height-30), 25, 25)

var carArray = [];
carArray.push(new Cars(0, 70, 50, 50));
carArray.push(new Cars(550, 120, 50, 50));
carArray.push(new Cars(0, 170, 50, 50));
carArray.push(new Cars(550, 220, 50, 50));
carArray.push(new Cars(0, 270, 50, 50));
carArray.push(new Cars(550, 320, 50, 50));

carArray.push(new Cars(0, 470, 50, 50));
carArray.push(new Cars(550, 520, 50, 50));
carArray.push(new Cars(0, 570, 50, 50));
carArray.push(new Cars(550, 620, 50, 50));
carArray.push(new Cars(0, 670, 50, 50));


var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = true;
  } else if (event.keyCode === 37) {
    leftPressed = true;
  } else if (event.keyCode === 38) {
    upPressed = true;
  } else if (event.keyCode === 40) {
    downPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = false;
  } else if (event.keyCode === 37) {
    leftPressed = false;
  } else if (event.keyCode === 38) {
    upPressed = false;
  } else if (event.keyCode === 40) {
    downPressed = false;
  }
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.drawFrog(context);
  carArray.forEach(function(car) {
    car.draw(context);
});
  carArray.forEach(function(car) {
    car.move(context);
  })
  frog.moveFrog(canvas, rightPressed, leftPressed, upPressed, downPressed);
  requestAnimationFrame(gameLoop);
});


// setInterval(drawFrog, 10);
