import { drawOuterBorders, drawElements } from './util.js';
import HumanPlayer from './humanplayer.js'
import ComputerPlayer from './computerplayer.js'

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
    Object.values(arrayOfPlayers).forEach((cp) => cp.changePosition(humanPlayer.coordX, humanPlayer.coordY));
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
  for(let i = 0; i < 5; i++) {
    let cplayer = new ComputerPlayer(context, canvas)
    arrayOfPlayers[cplayer.id] = cplayer;
  }
}
