var Frog = require('./frog.js');
var Cars = require('./cars.js');


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var frog = new Frog((canvas.width-25)/2, (canvas.height-30), 25, 25, canvas)

var carArrayOne = [];
carArrayOne.push(new Cars(100, 70, 100, 50));
carArrayOne.push(new Cars(500, 70, 100, 50));
carArrayOne.push(new Cars());

var carArrayTwo = [];
carArrayTwo.push(new Cars(550, 150, 50, 50));
carArrayTwo.push(new Cars(450, 150, 50, 50));
carArrayTwo.push(new Cars(250, 150, 50, 50));
carArrayTwo.push(new Cars(150, 150, 50, 50));





var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {

  if (event.keyCode === 39) {
    if(rightPressed === false) {
      frog.moveRight();
      rightPressed = true;
    }

  } else if (event.keyCode === 37) {
      if (leftPressed === false) {
        frog.moveLeft();
        leftPressed = true;
      }

  } else if (event.keyCode === 38) {
    if (upPressed === false) {
      frog.moveUp();
      upPressed = true;
    }

  } else if (event.keyCode === 40) {
    if (downPressed === false) {
      frog.moveDown();
      downPressed = true;
    }
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
  carArrayOne.forEach(function(car) {
    car.draw(context);
});
  carArrayOne.forEach(function(car) {
    car.moveOne(context);
  })

  carArrayTwo.forEach(function(car) {
    car.draw(context);
});
  carArrayTwo.forEach(function(car) {
    car.moveTwo(context);
  })
  // frog.moveFrog(canvas, rightPressed, leftPressed, upPressed, downPressed);
  requestAnimationFrame(gameLoop);
});


// setInterval(drawFrog, 10);
