var Frog = require('./frog.js');
var CarLeft = require('./carleft.js');
var CarRight = require('./carright.js');


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var frog = new Frog((canvas.width-25)/2, (canvas.height-62.5), 50, 50, canvas)

var frogImg = document.getElementById("frog-img");
var taxiLeft = document.getElementById("taxi-left");
var taxiRight = document.getElementById("taxi-right");


var carRightTen = [];
carRightTen.push(new CarRight(100, 70, 100, 50));
carRightTen.push(new CarRight(500, 70, 130, 50));
carRightTen.push(new CarRight(300, 70, 100, 50));

var carLeftNine = [];
carLeftNine.push(new CarLeft(550, 150, 50, 50));
carLeftNine.push(new CarLeft(450, 150, 50, 50));
carLeftNine.push(new CarLeft(250, 150, 50, 50));
carLeftNine.push(new CarLeft(150, 150, 50, 50));

var carRightEight = [];
carRightEight.push(new CarRight(120, 230, 70, 50));
carRightEight.push(new CarRight(320, 230, 70, 50));
carRightEight.push(new CarRight(520, 230, 70, 50));

var carLeftSeven = [];
carLeftSeven.push(new CarLeft(600, 300, 50, 50));
carLeftSeven.push(new CarLeft(470, 300, 50, 50));
carLeftSeven.push(new CarLeft(230, 300, 50, 50));
carLeftSeven.push(new CarLeft(280, 300, 50, 50));

var carRightSix = [];
carRightSix.push(new CarRight(600, 460, 50, 50));
carRightSix.push(new CarRight(470, 460, 50, 50));
carRightSix.push(new CarRight(230, 460, 50, 50));
carRightSix.push(new CarRight(280, 460, 50, 50));

var carLeftFive = [];
carLeftFive.push(new CarLeft(220, 516, 70, 50));
carLeftFive.push(new CarLeft(420, 516, 70, 50));
carLeftFive.push(new CarLeft(520, 516, 70, 50));

var carRightFour = [];
carRightFour.push(new CarRight(600, 572, 50, 50));
carRightFour.push(new CarRight(470, 572, 50, 50));
carRightFour.push(new CarRight(230, 572, 50, 50));
carRightFour.push(new CarRight(280, 572, 50, 50));

var carLeftThree = [];
carLeftThree.push(new CarLeft(120, 630, 100, 50));
carLeftThree.push(new CarLeft(320, 630, 100, 50));
carLeftThree.push(new CarLeft(520, 630, 100, 50));

var carRightTwo = [];
carRightTwo.push(new CarRight(550, 685, 50, 50));
carRightTwo.push(new CarRight(450, 685, 50, 50));
carRightTwo.push(new CarRight(250, 685, 50, 50));
carRightTwo.push(new CarRight(150, 685, 50, 50));

var carLeftOne = [];
carLeftOne.push(new CarLeft(550, 685, 50, 50));
carLeftOne.push(new CarLeft(450, 685, 50, 50));
carLeftOne.push(new CarLeft(250, 685, 50, 50));
carLeftOne.push(new CarLeft(150, 685, 50, 50));

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
     alert("game over");
    // console.log('reload?');
  }
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.drawFrog(context, frogImg);

  carRightTen.forEach(function(car) {
    car.draw(context, taxiRight);
});
  carRightTen.forEach(function(car) {
    car.moveRightTen(context);
    collideCar(car);
  })

  carLeftNine.forEach(function(car) {
    car.draw(context, taxiLeft);
});
  carLeftNine.forEach(function(car) {
    car.moveLeftNine(context);
    collideCar(car);
  })

  carRightEight.forEach(function(car) {
    car.draw(context, taxiRight);
});
  carRightEight.forEach(function(car) {
    car.moveRightEight(context);
    collideCar(car);
  })

  carLeftSeven.forEach(function(car) {
    car.draw(context, taxiLeft);
});
  carLeftSeven.forEach(function(car) {
    car.moveLeftSeven(context);
    collideCar(car);

  })

  carRightSix.forEach(function(car) {
    car.draw(context, taxiRight);
});
  carRightSix.forEach(function(car) {
    car.moveRightSix(context);
    collideCar(car);

  })

  carLeftFive.forEach(function(car) {
    car.draw(context, taxiLeft);
});
  carLeftFive.forEach(function(car) {
    car.moveLeftFive(context);
    collideCar(car);
  })

  carRightFour.forEach(function(car) {
    car.draw(context, taxiRight);
});
  carRightFour.forEach(function(car) {
    car.moveRightFour(context);
    collideCar(car);
  })

  carLeftThree.forEach(function(car) {
    car.draw(context, taxiLeft);
});
  carLeftThree.forEach(function(car) {
    car.moveLeftThree(context);
    collideCar(car);
  })

  carRightTwo.forEach(function(car) {
    car.draw(context, taxiRight);
});
  carRightTwo.forEach(function(car) {
    car.moveRightTwo(context);
    collideCar(car);
  })

  carLeftOne.forEach(function(car) {
    car.draw(context, taxiLeft);
});
  carLeftOne.forEach(function(car) {
    car.moveLeftOne(context);
    collideCar(car);
  })
  requestAnimationFrame(gameLoop);
});
