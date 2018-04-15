import { drawOuterBorders } from './util.js';
import { drawElements } from './element.js';
import HumanPlayer from './humanplayer.js'

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;
  const gameContext = gameCanvas.getContext('2d');
  drawOuterBorders(gameContext, gameCanvas);
  drawElements(gameContext, gameCanvas);

})
