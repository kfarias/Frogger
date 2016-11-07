/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(1);
	var CarLeft = __webpack_require__(2);
	var CarRight = __webpack_require__(3);


	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var frog = new Frog((canvas.width-25)/2, (canvas.height-55), 35 , 35, canvas)

	var frogImg = document.getElementById("frog-img");
	var taxiLeft = document.getElementById("taxi-left");
	var taxiRight = document.getElementById("taxi-right");


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

	// var score = 0;
	//
	// function drawScore(context) {
	//     context.font = "16px Arial";
	//     context.fillStyle = "#0095DD";
	//     context.fillText("Score: "+score, 8, 20);
	// }

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
	  }
	}

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
	  moveCars();
	  requestAnimationFrame(gameLoop);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var carLeft = __webpack_require__(2);
	var carRight = __webpack_require__(3);

	function Frog(x, y, width, height, canvas){
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.canvas = canvas;
	}

	Frog.prototype.drawFrog = function(context, frogImg) {
	  context.beginPath();
	  context.drawImage(frogImg, this.x, this.y, this.width, this.height);
	  context.fillStyle = "transparent";
	  context.fill();
	  context.closePath();
	}

	Frog.prototype.moveRight = function(){
	  if(this.canMoveRight()){
	    this.x +=55;
	  }
	}

	Frog.prototype.canMoveRight = function(){
	  return this.x < this.canvas.width-this.height
	}


	Frog.prototype.moveLeft = function(){
	  if(this.canMoveLeft()){
	    this.x -=55;
	  }
	}

	Frog.prototype.canMoveLeft = function(){
	  return this.x > 0;
	}

	Frog.prototype.moveUp = function(){
	  if(this.canMoveUp()){
	    this.y -= 55;
	  }
	}

	Frog.prototype.canMoveUp = function(){
	  return this.y > 0;
	}

	Frog.prototype.moveDown = function(){
	  if(this.canMoveDown()){
	    this.y += 55;
	  }
	}

	Frog.prototype.canMoveDown = function(){
	  return this.y < this.canvas.height-this.height
	}



	module.exports = Frog;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Index = __webpack_require__(1)
	var carRight = __webpack_require__(3)

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Index = __webpack_require__(1)
	var carLeft = __webpack_require__(2);

	function CarRight(x, y, width, height){
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	}

	CarRight.prototype.draw = function (context, taxiRight) {
	  context.fillStyle = 'transparent';
	  context.drawImage(taxiRight, this.x, this.y, this.width, this.height);
	  return this;
	};

	CarRight.prototype.moveRight =
	function(context) {
	  if (this.x > 600) {
	    this.x = (0 - this.width);
	  }
	  this.x++;
	}

	module.exports = CarRight;


/***/ }
/******/ ]);