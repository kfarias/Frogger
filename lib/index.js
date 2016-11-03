var Frog = require('./frog.js');
var Cars = require('./cars.js');


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var frog = new Frog((canvas.width-25)/2, (canvas.height-30), 25, 25, canvas)

var carRowOne = [];
carRowOne.push(new Cars(100, 70, 100, 50));
carRowOne.push(new Cars(500, 70, 130, 50));
carRowOne.push(new Cars(300, 70, 100, 50));

var carRowTwo = [];
carRowTwo.push(new Cars(550, 150, 50, 50));
carRowTwo.push(new Cars(450, 150, 50, 50));
carRowTwo.push(new Cars(250, 150, 50, 50));
carRowTwo.push(new Cars(150, 150, 50, 50));

var carRowThree = [];
carRowThree.push(new Cars(120, 230, 70, 50));
carRowThree.push(new Cars(320, 230, 70, 50));
carRowThree.push(new Cars(520, 230, 70, 50));

var carRowFour = [];
carRowFour.push(new Cars(600, 300, 50, 50));
carRowFour.push(new Cars(470, 300, 50, 50));
carRowFour.push(new Cars(230, 300, 50, 50));
carRowFour.push(new Cars(280, 300, 50, 50));

var carRowFive = [];
carRowFive.push(new Cars(220, 440, 70, 50));
carRowFive.push(new Cars(420, 440, 70, 50));
carRowFive.push(new Cars(520, 440, 70, 50));

var carRowSix = [];
carRowSix.push(new Cars(600, 530, 50, 50));
carRowSix.push(new Cars(470, 530, 50, 50));
carRowSix.push(new Cars(230, 530, 50, 50));
carRowSix.push(new Cars(280, 530, 50, 50));

var carRowSeven = [];
carRowSeven.push(new Cars(120, 600, 100, 50));
carRowSeven.push(new Cars(320, 600, 100, 50));
carRowSeven.push(new Cars(520, 600, 100, 50));

var carRowEight = [];
carRowEight.push(new Cars(550, 670, 50, 50));
carRowEight.push(new Cars(450, 670, 50, 50));
carRowEight.push(new Cars(250, 670, 50, 50));
carRowEight.push(new Cars(150, 670, 50, 50));

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

function collideCar(car){
  if (frog.x < car.x + car.width &&
   frog.x + frog.width > car.x &&
   frog.y < car.y + car.height &&
   frog.height + frog.y > car.y) {
     document.location.reload(true);
    console.log('reload?');
  }
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.drawFrog(context);

  carRowOne.forEach(function(car) {
    car.draw(context);
});
  carRowOne.forEach(function(car) {
    car.moveOne(context);
    collideCar(car);
  })

  carRowTwo.forEach(function(car) {
    car.draw(context);
});
  carRowTwo.forEach(function(car) {
    car.moveTwo(context);
    collideCar(car);
  })

  carRowThree.forEach(function(car) {
    car.draw(context);
});
  carRowThree.forEach(function(car) {
    car.moveThree(context);
    collideCar(car);
  })

  carRowFour.forEach(function(car) {
    car.draw(context);
});
  carRowFour.forEach(function(car) {
    car.moveFour(context);
    collideCar(car);

  })

  carRowFive.forEach(function(car) {
    car.draw(context);
});
  carRowFive.forEach(function(car) {
    car.moveFive(context);
    collideCar(car);
  })

  carRowSix.forEach(function(car) {
    car.draw(context);
});
  carRowSix.forEach(function(car) {
    car.moveSix(context);
    collideCar(car);
  })

  carRowSeven.forEach(function(car) {
    car.draw(context);
});
  carRowSeven.forEach(function(car) {
    car.moveSeven(context);
    collideCar(car);
  })

  carRowEight.forEach(function(car) {
    car.draw(context);
});
  carRowEight.forEach(function(car) {
    car.moveEight(context);
    collideCar(car);
  })
  requestAnimationFrame(gameLoop);
});
