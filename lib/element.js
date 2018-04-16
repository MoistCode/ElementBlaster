let numOfElements = 0;
let listOfElements = {};

class Element {
  constructor(direction, posX, posY, context, canvas) {
    this.id = numOfElements;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    listOfElements[numOfElements] = this;
    numOfElements += 1;
    this.velocity = 5;
    this.lifeline = 70;
  }

  drawElement() {
    switch(this.direction) {
      case 'up':
        this.context.beginPath();
        this.context.arc(this.posX, this.posY - 13, 5, 0, Math.PI * 2);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        this.posY -= 5;
        this.lifeline -= 1;
        break;
      case 'down':
        this.context.beginPath();
        this.context.arc(this.posX, this.posY + 13, 5, 0, Math.PI * 2);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        this.posY += 5;
        this.lifeline -= 1;
        break;
      case 'left':
        this.context.beginPath();
        this.context.arc(this.posX - 13, this.posY, 5, 0, Math.PI * 2);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        this.posX -= 5;
        this.lifeline -= 1;
        break;
      case 'right':
        this.context.beginPath();
        this.context.arc(this.posX + 13, this.posY ,5, 0, Math.PI * 2);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        this.posX += 5;
        this.lifeline -= 1;
        break;
    }
  }

  showListOfElements() {
    return Object.values(listOfElements).map((el) => {
      if (el.lifeline > 0) {
        return el
      }
    });
  }

}

export default Element;
