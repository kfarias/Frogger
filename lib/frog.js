var Cars = require('./cars.js');

function Frog(x, y, width, height, canvas){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.canvas = canvas;
}

Frog.prototype.drawFrog = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  var img = document.getElementById("frogpicture");
   context.fillStyle = img;
   context.fill();
}

Frog.prototype.moveRight = function(){
  if(this.canMoveRight()){
    this.x +=57;
  }
}

Frog.prototype.canMoveRight = function(){
  return this.x < this.canvas.width-this.height
}


Frog.prototype.moveLeft = function(){
  if(this.canMoveLeft()){
    this.x -=57;
  }
}

Frog.prototype.canMoveLeft = function(){
  return this.x > 0;
}

Frog.prototype.moveUp = function(){
  if(this.canMoveUp()){
    this.y -= 57;
  }
}

Frog.prototype.canMoveUp = function(){
  return this.y > 0;
}

Frog.prototype.moveDown = function(){
  if(this.canMoveDown()){
    this.y += 57;
  }
}

Frog.prototype.canMoveDown = function(){
  return this.y < this.canvas.height-this.height
}



module.exports = Frog;
