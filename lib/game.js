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
});

const _generateGame = (context, canvas) => {
  drawOuterBorders(context, canvas);
  drawElements(context, canvas);
  const humanPlayer = _generateHumanPlayer(context, canvas);
}

const _generateHumanPlayer = (context, canvas) => {
  return new HumanPlayer(context, canvas);
};
