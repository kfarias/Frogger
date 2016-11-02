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

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var frogWidth = 25;
	var frogHeight = 25;
	var frogx = (canvas.width-frogWidth)/2;
	var frogy = (canvas.height-30);
	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;

	function drawFrog() {
	  // context.clearRect(0, 0, canvas.width, canvas.height);
	  context.fillRect(frogx, frogy, frogWidth, frogHeight);
	  context.fillStyle = "turquoise";

	  if (rightPressed) {
	    frogx += 5;
	  } else if (leftPressed && frogx > 0) {
	    frogx -= 5;
	  } else if (upPressed && frogy > 0) {
	    frogy -= 5;
	  } else if (downPressed && frogy < canvas.height-frogHeight) {
	    frogy += 5;
	  }
	}

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


	// setInterval(drawFrog, 10);


/***/ },
/* 2 */
/***/ function(module, exports) {

	// var canvas = document.getElementById('myCanvas');
	// var context = canvas.getContext('2d');

	function Cars (x, y, width, height){
	 this.x = x;
	 this.y = y;
	 this.width = width;
	 this.height = height;
	}

	Cars.prototype.draw = function() {
	context.fillRect(this.x, this.y, this.width, this.height);
	return this;
	};


	var firstCar = new Cars(50, 50, 10, 10);
	// firstCar.draw();

	// requestAnimationFrame(function gameLoop() {
	//   context.clearRect(0, 0, canvas.width, canvas.height);
	//   drawFrog();
	//   firstCar.draw();
	//   requestAnimationFrame(gameLoop);
	// });


/***/ },
/* 3 */
/***/ function(module, exports) {

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  drawFrog();
	  firstCar.draw();
	  requestAnimationFrame(gameLoop);
	});


/***/ }
/******/ ]);