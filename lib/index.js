$(function() {
    $('#myCanvas').hide();
    $('#finishScreen').hide();
    $('#splashScreen').show();
    startGameScreen();
})

function startGameScreen() {
  $('.start-btn').on('click', function() {
    $('#splashScreen').hide();
    $('#myCanvas').show();
})
}

function endGameScreen() {
  $('#myCanvas').hide();
  $('#splashScreen').hide();
  $('#finishScreen').show();
  clickTryAgain();
  clickHome();
}



function clickTryAgain() {
  $('.try-again-btn').on('click', function() {
    resetCanvas();
    // $('#splashScreen').hide();
    // $('#finishScreen').hide();
    // $('#myCanvas').show();
  })
}

function clickHome() {
$('.home-btn').on('click', function() {
  document.location.reload(true);
})
}


var Frog = require('./frog.js');
var CarLeft = require('./carleft.js');
var CarRight = require('./carright.js');
var Score = require('./score.js');
var FinishLine = require('./finish.js');

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var score = new Score();
var frog = new Frog((canvas.width-35)/2, (canvas.height-55), 35 , 35, canvas)
// var frog2 = new Frog((canvas.width-35)/3, (canvas.height-55), 35 , 35, canvas)
// var frog3 = new Frog((canvas.width-35)/2, (canvas.height-55), 35 , 35, canvas)
// var frog4 = new Frog((canvas.width-35)/2, (canvas.height-55), 35 , 35, canvas)

// var finishLine = new FinishLine (0, 0, 95, 500, canvas)


var frogImg = document.getElementById("frog-img");
var taxiLeft = document.getElementById("taxi-left");
var taxiRight = document.getElementById("taxi-right");

// var finishLine = function () {
//   height: canvas.height/11
// }


function winCollision () {
  if (frog.y < 200) {
    console.log('you win?');
  }
}

function resetCanvas() {
  frog.x = (canvas.width-35)/2;
  frog.y = canvas.height - 55;
  updateScore -= updateScore;
  $('#finishScreen').hide();
  $("#myCanvas").show();
}

var carLeftSeven = [];
carLeftSeven.push(new CarLeft(600, 96, 50, 50));
carLeftSeven.push(new CarLeft(470, 96, 50, 50));
carLeftSeven.push(new CarLeft(230, 96, 50, 50));
carLeftSeven.push(new CarLeft(280, 96, 50, 50));

var carRightSix = [];
carRightSix.push(new CarRight(600, 151, 50, 50));
carRightSix.push(new CarRight(470, 151, 50, 50));
carRightSix.push(new CarRight(230, 151, 50, 50));
carRightSix.push(new CarRight(280, 151, 50, 50));

var carLeftFive = [];
carLeftFive.push(new CarLeft(220, 206, 70, 50));
carLeftFive.push(new CarLeft(420, 206, 70, 50));
carLeftFive.push(new CarLeft(520, 206, 70, 50));

var carRightFour = [];
carRightFour.push(new CarRight(600, 317.5, 50, 50));
carRightFour.push(new CarRight(470, 317.5, 50, 50));
carRightFour.push(new CarRight(230, 317.5, 50, 50));
carRightFour.push(new CarRight(280, 317.5, 50, 50));

var carLeftThree = [];
carLeftThree.push(new CarLeft(120, 372.5, 100, 50));
carLeftThree.push(new CarLeft(320, 372.5, 100, 50));
carLeftThree.push(new CarLeft(520, 372.5, 100, 50));

var carRightTwo = [];
carRightTwo.push(new CarRight(550, 427.5, 50, 50));
carRightTwo.push(new CarRight(450, 427.5, 50, 50));
carRightTwo.push(new CarRight(250, 427.5, 50, 50));
carRightTwo.push(new CarRight(150, 427.5, 50, 50));

var carLeftOne = [];
carLeftOne.push(new CarLeft(550, 482.5, 50, 50));
carLeftOne.push(new CarLeft(450, 482.5, 50, 50));
carLeftOne.push(new CarLeft(250, 482.5, 50, 50));
carLeftOne.push(new CarLeft(150, 482.5, 50, 50));

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var updateScore = 0;


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
      return updateScore += 10;
    }

  } else if (event.keyCode === 40) {
    if (downPressed === false) {
      frog.moveDown();
      downPressed = true;
      return updateScore -= 10;
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
    endGameScreen();
  }
}

// function collideFinish(finishLine){
//   if (frog.x < finishLine.x + finishLine.width &&
//    frog.x + frog.width > finishLine.x &&
//    frog.y < finishLine.y + finishLine.height &&
//    frog.height + frog.y > finishLine.y) {
//      console.log('finished!');
//   }
// }

function drawLeftCar(carArray, taxiImage) {
  carArray.forEach(function(car) {
    car.draw(context, taxiImage);
  });
  carArray.forEach(function(car) {
    car.moveLeft(context);
    collideCar(car);
  })
}

function drawRightCar(carArray, taxiImage) {
  carArray.forEach(function(car) {
    car.draw(context, taxiImage);
  });
  carArray.forEach(function(car) {
    car.moveRight(context);
    collideCar(car);
  })
}

function moveCars() {
  drawLeftCar(carLeftSeven, taxiLeft);
  drawRightCar(carRightSix, taxiRight);
  drawLeftCar(carLeftFive, taxiLeft);
  drawRightCar(carRightFour, taxiRight);
  drawLeftCar(carLeftThree, taxiLeft);
  drawRightCar(carRightTwo, taxiRight);
  drawLeftCar(carLeftOne, taxiLeft);
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.drawFrog(context, frogImg);
  // frog2.drawFrog(context, frogImg);
  // frog3.drawFrog(context, frogImg);
  // frog4.drawFrog(context, frogImg);
  winCollision();
  moveCars();
  requestAnimationFrame(gameLoop);
  score.draw(context, updateScore);
});






// var carRightTen = [];
// carRightTen.push(new CarRight(100, 132.5, 100, 50));
// carRightTen.push(new CarRight(500, 132.5, 100, 50));
// carRightTen.push(new CarRight(300, 132.5, 100, 50));
//
// var carLeftNine = [];
// carLeftNine.push(new CarLeft(550, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(450, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(250, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(150, 187.5, 50, 50));
//
// var carRightEight = [];
// carRightEight.push(new CarRight(120, 32.5, 70, 50));
// carRightEight.push(new CarRight(320, 32.5, 70, 50));
// carRightEight.push(new CarRight(520, 32.5, 70, 50));


// drawRightCar(carRightEight, taxiRight);
// drawLeftCar(carLeftNine, taxiLeft);
// drawRightCar(carRightTen, taxiRight);


// var Frog = require('./frog.js');
// var CarLeft = require('./carleft.js');
// var CarRight = require('./carright.js');
//
//
// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
//
// var frog = new Frog((canvas.width-25)/2, (canvas.height-62.5), 50, 50, canvas)
//
// var frogImg = document.getElementById("frog-img");
// var taxiLeft = document.getElementById("taxi-left");
// var taxiRight = document.getElementById("taxi-right");
//
//
// var carRightTen = [];
// carRightTen.push(new CarRight(100, 132.5, 100, 50));
// carRightTen.push(new CarRight(500, 132.5, 100, 50));
// carRightTen.push(new CarRight(300, 132.5, 100, 50));
//
// var carLeftNine = [];
// carLeftNine.push(new CarLeft(550, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(450, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(250, 187.5, 50, 50));
// carLeftNine.push(new CarLeft(150, 187.5, 50, 50));
//
// var carRightEight = [];
// carRightEight.push(new CarRight(120, 242.5, 70, 50));
// carRightEight.push(new CarRight(320, 242.5, 70, 50));
// carRightEight.push(new CarRight(520, 242.5, 70, 50));
//
// var carLeftSeven = [];
// carLeftSeven.push(new CarLeft(600, 297.5, 50, 50));
// carLeftSeven.push(new CarLeft(470, 297.5, 50, 50));
// carLeftSeven.push(new CarLeft(230, 297.5, 50, 50));
// carLeftSeven.push(new CarLeft(280, 297.5, 50, 50));
//
// var carRightSix = [];
// carRightSix.push(new CarRight(600, 352.5, 50, 50));
// carRightSix.push(new CarRight(470, 352.5, 50, 50));
// carRightSix.push(new CarRight(230, 352.5, 50, 50));
// carRightSix.push(new CarRight(280, 352.5, 50, 50));
//
// var carLeftFive = [];
// carLeftFive.push(new CarLeft(220, 462.5, 70, 50));
// carLeftFive.push(new CarLeft(420, 462.5, 70, 50));
// carLeftFive.push(new CarLeft(520, 462.5, 70, 50));
//
// var carRightFour = [];
// carRightFour.push(new CarRight(600, 517.5, 50, 50));
// carRightFour.push(new CarRight(470, 517.5, 50, 50));
// carRightFour.push(new CarRight(230, 517.5, 50, 50));
// carRightFour.push(new CarRight(280, 517.5, 50, 50));
//
// var carLeftThree = [];
// carLeftThree.push(new CarLeft(120, 572.5, 100, 50));
// carLeftThree.push(new CarLeft(320, 572.5, 100, 50));
// carLeftThree.push(new CarLeft(520, 572.5, 100, 50));
//
// var carRightTwo = [];
// carRightTwo.push(new CarRight(550, 625, 50, 50));
// carRightTwo.push(new CarRight(450, 625, 50, 50));
// carRightTwo.push(new CarRight(250, 625, 50, 50));
// carRightTwo.push(new CarRight(150, 625, 50, 50));
//
// var carLeftOne = [];
// carLeftOne.push(new CarLeft(550, 682.5, 50, 50));
// carLeftOne.push(new CarLeft(450, 682.5, 50, 50));
// carLeftOne.push(new CarLeft(250, 682.5, 50, 50));
// carLeftOne.push(new CarLeft(150, 682.5, 50, 50));
//
// var rightPressed = false;
// var leftPressed = false;
// var upPressed = false;
// var downPressed = false;
//
//
//
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
//
// function keyDownHandler(event) {
//
//   if (event.keyCode === 39) {
//     if(rightPressed === false) {
//       frog.moveRight();
//       rightPressed = true;
//     }
//
//   } else if (event.keyCode === 37) {
//       if (leftPressed === false) {
//         frog.moveLeft();
//         leftPressed = true;
//       }
//
//   } else if (event.keyCode === 38) {
//     if (upPressed === false) {
//       frog.moveUp();
//       upPressed = true;
//     }
//
//   } else if (event.keyCode === 40) {
//     if (downPressed === false) {
//       frog.moveDown();
//       downPressed = true;
//     }
//   }
// }
//
// function keyUpHandler(event) {
//   if (event.keyCode === 39) {
//     rightPressed = false;
//   } else if (event.keyCode === 37) {
//     leftPressed = false;
//   } else if (event.keyCode === 38) {
//     upPressed = false;
//   } else if (event.keyCode === 40) {
//     downPressed = false;
//   }
// }
//
// function collideCar(car){
//   if (frog.x < car.x + car.width &&
//    frog.x + frog.width > car.x &&
//    frog.y < car.y + car.height &&
//    frog.height + frog.y > car.y) {
//      document.location.reload(true);
//      console.log("game over");
//   }
// }
//
// function drawLeftCar(carArray, taxiImage) {
//   carArray.forEach(function(car) {
//     car.draw(context, taxiImage);
//   });
//   carArray.forEach(function(car) {
//     car.moveLeft(context);
//     collideCar(car);
//   })
// }
//
// function drawRightCar(carArray, taxiImage) {
//   carArray.forEach(function(car) {
//     car.draw(context, taxiImage);
//   });
//   carArray.forEach(function(car) {
//     car.moveRight(context);
//     collideCar(car);
//   })
// }
//
// function moveCars() {
//   drawLeftCar(carLeftOne, taxiLeft);
//   drawLeftCar(carLeftThree, taxiLeft);
//   drawLeftCar(carLeftFive, taxiLeft);
//   drawLeftCar(carLeftSeven, taxiLeft);
//   drawLeftCar(carLeftNine, taxiLeft);
//   drawRightCar(carRightTwo, taxiRight);
//   drawRightCar(carRightFour, taxiRight);
//   drawRightCar(carRightSix, taxiRight);
//   drawRightCar(carRightEight, taxiRight);
//   drawRightCar(carRightTen, taxiRight);
// }
//
// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   frog.drawFrog(context, frogImg);
//   moveCars();
//   requestAnimationFrame(gameLoop);
// });
