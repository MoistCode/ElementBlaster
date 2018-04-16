let numOfElements = 0;
let listOfElements = {};

class Element {
  constructor(direction, posX, posY, context, canvas, element) {
    this.id = numOfElements;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    this.element = element;
    console.log(this.element);
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
        switch(this.element) {
          case 'Fire':
            this.context.fillStyle = 'red';
            break;
          case 'Earth':
            this.context.fillStyle = '#7B1803';
            break;
          case 'Lightning':
            this.context.fillStyle = '#F5EE10';
            break;
          case 'Water':
            this.context.fillStyle = 'blue';
            break;
        }
        this.context.fill();
        this.context.closePath();
        this.posY -= 5;
        this.lifeline -= 1;
        break;
      case 'down':
        this.context.beginPath();
        this.context.arc(this.posX, this.posY + 13, 5, 0, Math.PI * 2);
        switch(this.element) {
          case 'Fire':
            this.context.fillStyle = 'red';
            break;
          case 'Earth':
            this.context.fillStyle = '#7B1803';
            break;
          case 'Lightning':
            this.context.fillStyle = '#F5EE10';
            break;
          case 'Water':
            this.context.fillStyle = 'blue';
            break;
        }
        this.context.fill();
        this.context.closePath();
        this.posY += 5;
        this.lifeline -= 1;
        break;
      case 'left':
        this.context.beginPath();
        this.context.arc(this.posX - 13, this.posY, 5, 0, Math.PI * 2);
        switch(this.element) {
          case 'Fire':
            this.context.fillStyle = 'red';
            break;
          case 'Earth':
            this.context.fillStyle = '#7B1803';
            break;
          case 'Lightning':
            this.context.fillStyle = '#F5EE10';
            break;
          case 'Water':
            this.context.fillStyle = 'blue';
            break;
        }
        this.context.fill();
        this.context.closePath();
        this.posX -= 5;
        this.lifeline -= 1;
        break;
      case 'right':
        this.context.beginPath();
        this.context.arc(this.posX + 13, this.posY ,5, 0, Math.PI * 2);
        switch(this.element) {
          case 'Fire':
            this.context.fillStyle = 'red';
            break;
          case 'Earth':
            this.context.fillStyle = '#7B1803';
            break;
          case 'Lightning':
            this.context.fillStyle = '#F5EE10';
            break;
          case 'Water':
            this.context.fillStyle = 'blue';
            break;
        }
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
