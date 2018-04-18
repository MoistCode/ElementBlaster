import { drawOuterBorders, drawElements } from './util.js';
import { HumanPlayer, getHumanElements, deleteHuman } from './humanplayer.js';
import { ComputerPlayer, getEnemyElements, deleteComputer } from './computerplayer.js';
import { Element, returnCurrentListOfElements, deleteElement } from './element.js';
import { getAllPlayers } from './player.js';

const elements = [
  'Fire',
  'Earth',
  'Lightning',
  'Water'
];

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth * 0.98;
  gameCanvas.height = window.innerHeight * 0.98;

  const humanPlayer = new HumanPlayer(gameContext, gameCanvas);
  arrayOfPlayers[humanPlayer.id] = humanPlayer;
  generateComputerPlayers(gameContext, gameCanvas);

  function update() {
    requestAnimationFrame(update);
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    humanPlayer.changePosition();

    Object.values(arrayOfPlayers).forEach((cp) => {
      cp.changePosition(humanPlayer.coordX, humanPlayer.coordY);
    });

    let els;

    let currentListOfElements = returnCurrentListOfElements();
    if (currentListOfElements != undefined) {
      els = Object.values(returnCurrentListOfElements()).map((el) => {
        if (el.lifeline > 0) {
          el.drawElement();
          return el;
        };
      });
    }
    checkPlayerCollisions();
    drawElements(gameContext, gameCanvas, elements[humanPlayer.element]);
    generateGame(gameContext, gameCanvas);
  }

  update();
});

let arrayOfPlayers = {};

const generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
}

const generateComputerPlayers = (context, canvas) => {
  for(let i = 0; i < 10; i++) {
    let cplayer = new ComputerPlayer(context, canvas)
    for(let j = 0; j < Object.values(arrayOfPlayers).length; j++) {
      let x1 = Object.values(arrayOfPlayers)[j].coordX;
      let y1 = Object.values(arrayOfPlayers)[j].coordY;
      let x2 = cplayer.coordX;
      let y2 = cplayer.coordY;

      let xPow = Math.pow(x2 - x1, 2);
      let yPow = Math.pow(y2 - y1, 2);
      let distance = Math.sqrt(xPow + yPow);
      if (distance <= 26) {
        cplayer.generatePosition();
        j = -1;
      }
    }
    arrayOfPlayers[cplayer.id] = cplayer;
  }
}

const checkPlayerCollisions = () => {
  let arrOfPlayers = Object.values(getAllPlayers());
  for(let i = 0; i < arrOfPlayers.length; i++) {
    for(let j = 0; j < arrOfPlayers.length; j++) {
      if (i == j) {
        continue;
      } else {
        checkCollision(arrayOfPlayers[i], arrOfPlayers[j]);
      }
    }
  }
}

const checkCollision = (player1, player2) => {
  let x1 = player1.coordX;
  let y1 = player1.coordY;
  let x2 = player2.coordX;
  let y2 = player2.coordY;

  let xPow = Math.pow(x2 - x1, 2);
  let yPow = Math.pow(y2 - y1, 2);
  let distance = Math.sqrt(xPow + yPow);

  let xVelDiff = player2.velocityX - player1.velocityX;
  let yVelDiff = player2.velocityY - player1.velocityY;
  let xDistDiff = player2.coordX - player1.coordX;
  let yDistDiff = player2.coordY - player1.coordY;

  if (distance <= 26) {
    let xPow = Math.pow(x2 - x1, 2);
    let yPow = Math.pow(y2 - y1, 2);
    let distance = Math.sqrt(xPow + yPow);
    handleOverlap(player1, player2);
  }
};

const handleOverlap = (player1, player2) => {
  let xPow = Math.pow(player2.coordX - player1.coordX, 2);
  let yPow = Math.pow(player2.coordY - player1.coordY, 2);
  let distance = Math.sqrt(xPow + yPow);
  while (distance <= 26) {
    player1.coordX -= (2/3) * player1.velocityX;
    player1.coordY -= (2/3) * player1.velocityY;
    player2.coordX -= (2/3) * player2.velocityX;
    player2.coordY -= (2/3) * player2.velocityY;
    xPow = Math.pow(player2.coordX - player1.coordX, 2);
    yPow = Math.pow(player2.coordY - player1.coordY, 2);
    distance = Math.sqrt(xPow + yPow);
  }
  handleCollision(player1, player2)
};

const handleCollision = (player1, player2) => {
  let x1 = player1.coordX;
  let y1 = player1.coordY;

  let x2 = player2.coordX;
  let y2 = player2.coordY;

  let dx = x2 - x1;
  let dy = y2 - y1;

  let rotatedAngle = -Math.atan2(dy, dx);

  let u1 = rotate({ x: player1.velocityX, y: player1.velocityY }, rotatedAngle);
  let u2 = rotate({ x: player2.velocityX, y: player2.velocityY }, rotatedAngle);

  let v1 = { x: u2.x, y: u1.y };
  let v2 = { x: u1.x, y: u2.y };

  let finalVel1 = rotate(v1, -rotatedAngle);
  let finalVel2 = rotate(v2, -rotatedAngle);

  player1.velocityX = finalVel1.x;
  player1.velocityY = finalVel1.y;

  player2.velocityX = finalVel2.x;
  player2.velocityY = finalVel2.y;

  let xPow = Math.pow(player2.coordX - player1.coordX, 2);
  let yPow = Math.pow(player2.coordY - player1.coordY, 2);
  let distance = Math.sqrt(xPow + yPow);

};

const rotate = (velocity, angle) => {
  const rotatedVelocities = {
      x: velocity.x * Math.cos(angle * (180/Math.PI)) - velocity.y * Math.sin(angle * (180/Math.PI)),
      y: velocity.x * Math.sin(angle * (180/Math.PI)) + velocity.y * Math.cos(angle * (180/Math.PI))
  };

  return rotatedVelocities;
}
