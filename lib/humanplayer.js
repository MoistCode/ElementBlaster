import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = 5;
    this.velocityY = 5;
  }

  changePosition() {
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;
    this.velocityX *= 0.98;
    this.velocityY *= 0.98;



    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = `#${this.color}`;
    this.context.fill();
    this.context.closePath();

  }
}

export default HumanPlayer;
