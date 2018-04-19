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
  constructor(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng) {
    super(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng);
    this.velocityX = (((Math.random() - 0.5) * 3) + 1);
    this.velocityY = (((Math.random() - 0.5) * 3) + 1);
    this.shotDelay = Math.floor((Math.random() * 1001));
    this.currentElement = elements[Math.floor(Math.random() * 3)];
    this.fireSpritePng = fireSpritePng;
    this.earthSpritePng = earthSpritePng;
    this.lightningSpritePng = lightningSpritePng;
    this.waterSpritePng = waterSpritePng;
    this.context = context;
    console.log(this.fireSpritePng);
  }

  changePosition() {
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
    this.drawElementalSprites();
    this.shotDelay += 2;
    if (this.shotDelay >= 100) {
      this.automatedShots();
      this.shotDelay = 0;
    }
  }

  drawElementalSprites() {
    switch(this.currentElement) {
      case 'Fire':
        this.context.drawImage(
          this.fireSpritePng, this.coordX - 20, this.coordY, 50, 50
        )
        break;
      case 'Water':
        this.context.drawImage(
          this.waterSpritePng, this.coordX - 20, this.coordY, 50, 50
        )
        break;
      case 'Earth':
        this.context.drawImage(
          this.earthSpritePng, this.coordX - 20, this.coordY, 50, 50
        )
        break;
      case 'Lightning':
        this.context.drawImage(
          this.lightningSpritePng, this.coordX - 20, this.coordY, 50, 50
        )
        break;
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
