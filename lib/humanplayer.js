import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = 3;
    this.velocityY = 3;
    this.movementBool = {
      up: false,
      left: false,
      down: false,
      right: false
    }
    this.addUserControls();
  }

  changePosition() {
    if (this.movementBool.up) {
      this.velocityY = -3
    }
    if (this.movementBool.left) {
      this.velocityX = -3
    }
    if (this.movementBool.down) {
      this.velocityY = 3;
    }
    if (this.movementBool.right) {
      this.velocityX = 3;
    }

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
          this.movementBool.up = true;
          break;
        case 'a':
          this.movementBool.left = true;
          break;
        case 's':
          this.movementBool.down = true;
          break;
        case 'd':
          this.movementBool.right = true;
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch(event.key.toLowerCase()) {
        case 'w':
          this.movementBool.up = false;
          break;
        case 'a':
          this.movementBool.left = false;
          break;
        case 's':
          this.movementBool.down = false;
          break;
        case 'd':
          this.movementBool.right = false;
          break;
      }
    });
  }

}

export default HumanPlayer;
