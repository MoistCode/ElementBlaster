import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = 3;
    this.velocityY = 3;
    this.
    this.addUserControls();
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

  addUserControls() {
    document.addEventListener('keydown', (event) => {
      switch(event.key.toLowerCase()) {
        case 'w':
          this.velocityY = -3;
          break;
        case 'a':
          this.velocityX = -3;
          break;
        case 's':
          this.velocityY = 3;
          break;
        case 'd':
          this.velocityX = 3;
          break;
      }
    });
  }

}

export default HumanPlayer;
