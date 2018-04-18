import { Player } from './player.js'
import { Element } from './element.js';

let listOfEnemyElements = {};

const elements = [
  'Fire',
  'Earth',
  'Lightning',
  'Water'
];

const directions = [
  'up',
  'down',
  'left',
  'right'
];

class ComputerPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.velocityX = (((Math.random() - 0.5) * 3) + 1);
    this.velocityY = (((Math.random() - 0.5) * 3) + 1);
    this.shotDelay = Math.floor((Math.random() * 1001));
    this.currentElement = elements[Math.floor(Math.random() * 3)];
  }

  changePosition(humanPosX, humanPosY) {
    let fillStyle;
    switch(this.currentElement) {
      case elements[0]:
      fillStyle = 'red';
      break;
      case elements[1]:
      fillStyle = '#7B1803';
      break;
      case elements[2]:
      fillStyle = '#F5EE10';
      break;
      case elements[3]:
      fillStyle = 'blue';
      break;
    }

    this.checkForWall();
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;
    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = fillStyle;
    this.context.fill();
    this.context.closePath();
    this.shotDelay += 2;
    if (this.shotDelay >= 300) {
      // this.automatedShots(humanPosX, humanPosY);
      this.shotDelay = 0;
      // this.currentElement = elements[Math.floor(Math.random() * 3)];
    }
  }


  automatedShots(humanPosX, humanPosY) {
    let compElement = elements[Math.floor(Math.random() * 4)];
    let compDirection = directions[Math.floor(Math.random() * 4)];
    let newEl = new Element(
      compDirection,
      this.coordX,
      this.coordY,
      this.context,
      this.canvas,
      compElement
    );
    listOfEnemyElements[newEl.id] = newEl;
  }
}

function getEnemyElements() {
  Object.values(listOfEnemyElements).forEach((el) => {
    if (el.lifeline <= 0) {
      delete listOfEnemyElements[el.id];
    }
  });
}

function deleteComputer(id) {
  delete listOfEnemyElements[id];
}

export { ComputerPlayer, getEnemyElements, deleteComputer };
