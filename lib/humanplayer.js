import Player from './player.js';
import Element from './element.js';
import { drawElements } from './util.js';

const elements = [
  'Fire',
  'Earth',
  'Lightning',
  'Water'
];

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = 0;
    this.velocityY = 0;
    this.element = 0;
    this.movementBool = {
      up: false,
      left: false,
      down: false,
      right: false
    }

    this.addUserControls();
  }

  changePosition() {
    this.checkForWall();
    this.checkMovementBool();
    this.checkForWall();
    this.slowDown();
    this.checkForWall();
    this.drawCurrentLocation();
    this.checkForWall();
    if (this.el != undefined) {
      this.el.showListOfElements().forEach((element) => {
        if (element == undefined) {
          return;
        } else {
          element.drawElement();
        }
      })
    }
  }

  addUserControls() {
    this.addKeyUpEvents();
    this.addKeyDownEvents();
  };

  addKeyDownEvents() {
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
        case 'q':
          this.element -= 1;
          if (this.element < 0) {
            this.element = 3;
          }
          drawElements(this.context, this.canvas, elements[this.element]);
          break;
        case 'e':
          this.element += 1;
          if (this.element > 3) {
            this.element = 0;
          }
          drawElements(this.context, this.canvas, elements[this.element]);
          break;
        case 'arrowup':
          this.el = new Element(
            'up',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element]
          );
          break;
        case 'arrowdown':
          this.el = new Element(
            'down',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element]
          );
          break;
        case 'arrowleft':
          this.el = new Element(
            'left',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element]
          );
          break;
        case 'arrowright':
          this.el = new Element(
            'right',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element]
          );
          break;
      }
    });
  }

  addKeyUpEvents() {
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

  drawCurrentLocation() {
    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 18, 0, Math.PI * 2, false);
    this.context.fillStyle = `black`;
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = `#42FF00`;
    this.context.fill();
    this.context.closePath();

  }

  slowDown() {
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;
    this.velocityX *= 0.93;
    this.velocityY *= 0.93;
  }

  checkMovementBool() {
    if (this.movementBool.up) {
      this.velocityY = -2
    }
    if (this.movementBool.left) {
      this.velocityX = -2
    }
    if (this.movementBool.down) {
      this.velocityY = 2;
    }
    if (this.movementBool.right) {
      this.velocityX = 2;
    }
  }

  checkForWall() {
    if (
        (this.coordX <= (613/1440) * this.canvas.width) &&
        (this.coordY <= (98/810) * this.canvas.height)
      ) {
        this.velocityX = 0.5;
        this.velocityY = 0.5;
      } else if (this.coordX >= (1409/1440) * this.canvas.width) {
        this.velocityX = -0.5;
      } else if (this.coordY <= (47/810) * this.canvas.height) {
        this.velocityY = 0.5;
      } else if (this.coordX <= (343/1440) * this.canvas.width) {
        this.velocityX = 0.5;
      } else if (this.coordY >= (757/810) * this.canvas.height) {
        this.velocityY = -0.5;
    }
  }

}

export default HumanPlayer;
