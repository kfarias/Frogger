function Score(){

}

Score.prototype.draw = function(context, updateScore) {
  context.fillStyle = "white";
  context.font = ('20px Krungthep');
  context.fillText('Score:' + updateScore, 5, 590);
  return this;
};

module.exports = Score;
