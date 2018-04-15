import { drawOuterBorders } from './util.js';
import { drawElements } from './element.js';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');
  drawOuterBorders(gameContext);
  drawElements(gameContext);
})
