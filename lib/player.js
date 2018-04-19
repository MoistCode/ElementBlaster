import { getRandomColor } from './util.js';

let playerIds = 0;
let players = {};

class Player {
  constructor(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng) {
    this.id = playerIds;
    playerIds += 1;
    this.color = getRandomColor();
    this.canvas = canvas;
    this.context = context;
    this.generatePosition();
    // this.drawPlayer();
    players[this.id] = this;
  }

  //
  //
  // drawPlayer() {
  //   this.context.beginPath();
  //   this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
  //   this.context.fillStyle = `#${this.color}`;
  //   this.context.fill();
  //   this.context.closePath();
  // }

  generatePosition() {
    this.coordX = (
      Math.random() * ((1064/1440) * this.canvas.width) +
      ((343/1440) * this.canvas.width)
    );

    this.coordY = (
      Math.random() * ((710/810) * this.canvas.height) +
      ((47/810) * this.canvas.height)
    );

    while (
      this.coordX < ((613/1440) * this.canvas.width) &&
      this.coordY < ((98/810) * this.canvas.height)
    ) {
      this.coordX = (
        Math.random() * ((1064/1440) * this.canvas.width) +
        ((343/1440) * this.canvas.width)
      );
      this.coordY = (
        Math.random() * ((710/810) * this.canvas.height) +
        ((47/810) * this.canvas.height)
      );
    }
  }

  checkForWall() {
    if (
        (this.coordX <= (613/1440) * this.canvas.width) &&
        (this.coordY <= (98/810) * this.canvas.height)
      ) {
        this.velocityX = ((Math.random() * 3) + 1);
        this.velocityY = ((Math.random() * 3) + 1);
      } else if (this.coordX >= (1420/1440) * this.canvas.width) {
        this.velocityX = -((Math.random() * 3) + 1);
      } else if (this.coordY <= (15/810) * this.canvas.height) {
        this.velocityY = ((Math.random() * 3) + 1);
      } else if (this.coordX <= (343/1440) * this.canvas.width) {
        this.velocityX = ((Math.random() * 3) + 1);
      } else if (this.coordY >= (725/810) * this.canvas.height) {
        this.velocityY = -((Math.random() * 3) + 1);
    }
  }

}

const getAllPlayers = () => {
  return players;
};

const deletePlayer = (id) => {
  delete players[id];
}

const destroyAllPlayers = () => {
  players = {};
}

export { Player, getAllPlayers, deletePlayer, destroyAllPlayers };
