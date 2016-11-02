

function Frog(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Frog.prototype.drawFrog = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  context.fillStyle = "turquoise";
}


Frog.prototype.moveFrog = function(canvas, rightPressed, leftPressed, upPressed, downPressed) {
  if (rightPressed) {
    this.x += 5;
  } else if (leftPressed && this.x > 0) {
    this.x -= 5;
  } else if (upPressed && this.y > 0) {
    this.y -= 5;
  } else if (downPressed && this.y < canvas.height-this.height) {
    this.y += 5;
  }
}

module.exports = Frog;
