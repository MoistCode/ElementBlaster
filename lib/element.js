class Element {
  constructor(sourceCoordX, sourceCoordY, directionX, directionY, element) {
    this.sourceCoordX = sourceCoordX;
    this.sourceCoordY = sourceCoordY;
    this.directionX = directionX;
    this.directionY = directionY;
    this.element = element;
    this.velocityX = 5;
    this.velocityY = 5;
    this.lifetime = 1000;
    this.generateStartingPosition();
  }

  drawElement() {
    this.coordX += this.velocityX;
    this.coordY += this.velocityY;

    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 7, 0, Math.PI * 2, false);
    this.context.fillStyle = `#${this.color}`;
    this.context.fill();
    this.context.closePath();
  }

  generateStartingPosition() {
    let xOne = this.sourceCoordX;
    let yOne = this.sourceCoordY;
    let xTwo = this.directionX;
    let yTwo = this.directionY;
    let radius = 13;
    let adjacent = xTwo - xOne;
    let opposite = yTwo - yOne;
    let hypoteneuse = Math.sqrt((adjacent**2) + (opposite**2));
    let radian = Math.atan(opposite / adjacent);
    console.log(radian * (180 / Math.PI));
  }

}

export default Element;
