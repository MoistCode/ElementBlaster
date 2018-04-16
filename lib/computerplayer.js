import Player from './player.js'

class ComputerPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = (((Math.random() - 0.5) * 3) + 1);
    this.velocityY = (((Math.random() - 0.5) * 3) + 1);
  }

  changePosition() {
    this.checkForWall();
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;

    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = `blue`;
    this.context.fill();
    this.context.closePath();
  }

  automatedMovement() {

  }

  automatedShots() {

  }

  randomizeElement() {

  }

  calculateDodgePercentage() {

  }

  calculateCounterPercentage() {

  }
}

export default ComputerPlayer;
