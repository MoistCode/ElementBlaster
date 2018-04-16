import { drawOuterBorders } from './util.js';
import { drawElements } from './element.js';
import HumanPlayer from './humanplayer.js'
import ComputerPlayer from './computerplayer.js'

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;

  _generateGame(gameContext, gameCanvas);
})

const _generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
  drawElements(context, canvas);
  _generateHumanPlayer(context, canvas);
  _generateComputerPlayers(context, canvas);
}

const _generateHumanPlayer = (context, canvas) => {
  for(let i = 0; i < 10000; i++) {
    new HumanPlayer(context, canvas);
  }
};

const _generateComputerPlayers = (context, canvas) => {
  let computer = new ComputerPlayer(context, canvas);
}
