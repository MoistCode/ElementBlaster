import Player from './player.js'

class ComputerPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = 3;
    this.velocityY = 3;
  }

  changePosition() {
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;
    
    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = `#${this.color}`;
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
