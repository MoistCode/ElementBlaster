import { getRandomColor } from './util.js';

class Player {
  constructor(context, canvas) {
    this.color = getRandomColor();
    this.canvas = canvas;
    this.context = context;
    let { coordX, coordY } = this.generatePosition();
    this.coordX = coordX;
    this.coordY = coordY;
    this.drawPlayer();
  }

  generatePosition() {
    let coordX = (Math.random() * ((1064/1440) * this.canvas.width) + ((343/1440) * this.canvas.width));
    let coordY = (Math.random() * ((710/810) * this.canvas.height) + ((47/810) * this.canvas.height));

    while (coordX < ((610/1440) * this.canvas.width) && coordY < ((100/810) * this.canvas.height)) {
      coordX = (Math.random() * ((1064/1440) * this.canvas.width) + ((343/1440) * this.canvas.width));
      coordY = (Math.random() * ((710/810) * this.canvas.height) + ((47/810) * this.canvas.height));
    }

    return { coordX, coordY }
  }

  drawPlayer() {
    this.context.beginPath();
    this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
    this.context.fillStyle = `#${this.color}`;
    this.context.fill();
    this.context.closePath();
  }


}

export default Player;


  // let x = Math.random() * gameCanvas.width;
  // let y = Math.random() * gameCanvas.height;
  // let dx = Math.random() * 25;
  // let dy = Math.random() * 25;
  // animate();
  //
  // function animate() {
  //   requestAnimationFrame(animate);
  //   if (x + 30 >= gameCanvas.width) {
  //     dx = -(Math.random() * 25)
  //   } else if (x - 30 <= 0) {
  //     dx = Math.random() * 25;
  //   }
  //   if (y + 30 >= gameCanvas.height) {
  //     dy = -(Math.random() * 25);
  //   } else if (y - 30 <= 0) {
  //     dy = Math.random() * 25;
  //   }
  //   gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  //   gameContext.beginPath();
  //   gameContext.arc(x, y, 30, 0, Math.PI * 2, false);
  //   gameContext.fillStyle = 'blue';
  //   gameContext.fill();
  //   gameContext.closePath();
  //
  //   x += dx;
  //   y += dy;
  // }
