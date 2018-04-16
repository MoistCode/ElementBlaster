import { drawOuterBorders } from './util.js';
import { drawElements } from './element.js';
import HumanPlayer from './humanplayer.js'
import ComputerPlayer from './computerplayer.js'

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;

  const humanPlayer = new HumanPlayer(gameContext, gameCanvas);
  generateComputerPlayers(gameContext, gameCanvas);
  arrayOfPlayers.push(humanPlayer);
  console.log(arrayOfPlayers);
  function update() {
    requestAnimationFrame(update);
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    humanPlayer.changePosition();
    arrayOfPlayers.forEach((cp) => cp.changePosition())
    generateGame(gameContext, gameCanvas);
  }

  update();
});

let arrayOfPlayers = [];

const generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
  drawElements(context, canvas);
}

const generateComputerPlayers = (context, canvas) => {
  for(let i = 0; i < 200; i++) {
    arrayOfPlayers.push(new ComputerPlayer(context, canvas));
  }
}
