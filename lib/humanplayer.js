import { Player } from './player.js';
import { Element } from './element.js';
import { drawElements } from './util.js';

let listOfHumanElements = {};

const elements = [
  'Fire',
  'Earth',
  'Lightning',
  'Water'
];

class HumanPlayer extends Player {
  constructor(context, canvas, humanSpritePng) {
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
    this.alive = true;
    this.humanSpritePng = humanSpritePng;
  }

  changePosition() {
    this.checkForWall();
    this.checkMovementBool();
    this.checkForWall();
    this.slowDown();
    this.checkForWall();
    this.drawCurrentLocation();
    this.checkForWall();
  }

  addUserControls() {
    this.addKeyUpEvents();
    this.addKeyDownEvents();
  };

  addKeyDownEvents() {
    document.addEventListener('keydown', (event) => this.keyDownHandler(event));
  }

  addKeyUpEvents() {
    document.addEventListener('keyup', (event) => this.keyUpHandler(event));
  }

  keyUpHandler(event) {
    if (this.alive) {
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
    }
  }

  keyDownHandler(event) {
    if (this.alive) {
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
          break;
        case 'e':
          this.element += 1;
          if (this.element > 3) {
            this.element = 0;
          }
          break;
        case 'arrowup':
          this.el = new Element(
            'up',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element],
            true
          );
          listOfHumanElements[this.el.id] = this.el;
          break;
        case 'arrowdown':
          this.el = new Element(
            'down',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element],
            true
          );
          listOfHumanElements[this.el.id] = this.el;
          break;
        case 'arrowleft':
          this.el = new Element(
            'left',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element],
            true
          );
          listOfHumanElements[this.el.id] = this.el;
          break;
        case 'arrowright':
            this.el = new Element(
            'right',
            this.coordX,
            this.coordY,
            this.context,
            this.canvas,
            elements[this.element],
            true
          );
          listOfHumanElements[this.el.id] = this.el;
          break;
      }
    }
  }

  removeEventListeners() {
    document.removeEventListener('keydown', (event) => this.keyDownHandler(event));
    document.removeEventListener('keyup', (event) => this.keyUpHandler(event))
  }

  drawCurrentLocation() {
    switch(elements[this.element]) {
      case 'Fire':
        this.context.beginPath();
        this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
        this.context.fillStyle = `red`;
        this.context.fill();
        this.context.closePath();
        break;
      case 'Earth':
        this.context.beginPath();
        this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
        this.context.fillStyle = `#ac6b25`;
        this.context.fill();
        this.context.closePath();
        break;
      case 'Lightning':
        this.context.beginPath();
        this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
        this.context.fillStyle = `yellow`;
        this.context.fill();
        this.context.closePath();
        break;
      case 'Water':
        this.context.beginPath();
        this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
        this.context.fillStyle = `blue`;
        this.context.fill();
        this.context.closePath();
        break;
    }

    this.context.drawImage(
      this.humanSpritePng, this.coordX - 25, this.coordY - 25, 50, 50
    )

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

function getHumanElements() {
  Object.values(listOfHumanElements).forEach((el) => {
    if (el.lifeline <= 0) {
      delete listOfHumanElements[el.id];
    }
  });
}

function deleteHuman() {
  delete listOfHumanElements[0];
}

export { HumanPlayer, getHumanElements, deleteHuman };
