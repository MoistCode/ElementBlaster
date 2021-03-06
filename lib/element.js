let numOfElements = 0;
let listOfElements = {};

class Element {
  constructor(direction, posX, posY, context, canvas, element, human = false) {
    this.id = numOfElements;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    this.element = element;
    listOfElements[numOfElements] = this;
    numOfElements += 1;
    this.velocity = 5;
    this.lifeline = 70;
    this.human = human;
  }

  drawElement() {
    switch(this.direction) {
      case 'up':
        this.context.beginPath();
        this.context.rect(
          this.posX - (13/2),
          this.posY - 40,
          13,
          13
        );
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

        this.context.beginPath();
        this.context.arc(this.posX, this.posY - 40, 7, 0, Math.PI, true);
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.closePath();

        this.posY -= this.velocity;
        this.lifeline -= 1;
        break;
      case 'down':
        this.context.beginPath();
        this.context.rect(
          this.posX - (13/2),
          this.posY + 40,
          13,
          13
        );
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

        this.context.beginPath();
        this.context.arc(this.posX, this.posY + 52, 7, 0, Math.PI);
        this.context.fillStyle = 'white'
        this.context.fill();
        this.context.closePath();

        this.posY += this.velocity;
        this.lifeline -= 1;
        break;
      case 'left':
        this.context.beginPath();
        this.context.rect(
          this.posX - 40,
          this.posY - (13/2),
          13,
          13
        );
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

        this.context.beginPath();
        this.context.arc(this.posX - 40, this.posY, 7, Math.PI / 2, (3 * Math.PI) / 2);
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.closePath();

        this.posX -= this.velocity;
        this.lifeline -= 1;
        break;
      case 'right':
        this.context.beginPath();
        this.context.rect(
          this.posX + 40,
          this.posY - (13/2),
          13,
          13
        );
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

        this.context.beginPath();
        this.context.arc(this.posX + 52, this.posY , 7, Math.PI / 2, (3 * Math.PI) / 2, true );
        this.context.fillStyle = 'white';
        this.context.fill();
        this.context.closePath();

        this.posX += this.velocity;
        this.lifeline -= 1;
        break;
    }
    this.checkForWall();
  }

  showListOfElements() {
    return Object.values(listOfElements).map((el) => {
      if (el.lifeline > 0) {
        return el
      }
    });
  }

  checkForWall() {
    if (this.velocity == 0) {
      this.velocity = 5;
    }
    // if (
    //     (this.posX <= (625/1440) * this.canvas.width) &&
    //     (this.posY <= (115/810) * this.canvas.height)
    //   ) {
    //     this.velocity = -(this.velocity);
      if (this.posX >= (1440/1440) * this.canvas.width) {
        this.velocity = -(this.velocity);
      } else if (this.posY <= (20/810) * this.canvas.height) {
        this.velocity = -(this.velocity);
      } else if (this.posX <= (370/1440) * this.canvas.width) {
        this.velocity = -(this.velocity);
      } else if (this.posY >= (810/810) * this.canvas.height) {
        this.velocity = -(this.velocity);
    }
  }

}

function returnCurrentListOfElements() {
  Object.values(listOfElements).forEach((el) => {
    if (el.lifeline <= 0) {
      delete listOfElements[el.id];
    }
  });
  return Object.values(listOfElements);
}

function deleteElement(id) {
  delete listOfElements[id];
}

function destroyAllElements() {
  listOfElements = {};
}

export { Element, returnCurrentListOfElements, destroyAllElements };
