import { drawOuterBorders } from './util.js';
import { drawElements } from './element.js';
import HumanPlayer from './humanplayer.js'
import ComputerPlayer from './computerplayer.js'

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;


  function update() {
    requestAnimationFrame(update);
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    _generatePlayers(gameContext, gameCanvas);
    _generateGame(gameContext, gameCanvas);
  }

  update();
});

const _generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
  drawElements(context, canvas);
}

const _generatePlayers = (context, canvas) => {
  new HumanPlayer(context, canvas);
}
