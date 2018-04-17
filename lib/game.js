import { drawOuterBorders, drawElements } from './util.js';
import { HumanPlayer, getHumanElements, deleteHuman } from './humanplayer.js';
import { ComputerPlayer, getEnemyElements, deleteComputer } from './computerplayer.js';
import { Element, returnCurrentListOfElements, deleteElement } from './element.js';

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
  for(let i = 0; i < 1; i++) {
    let cplayer = new ComputerPlayer(context, canvas)
    arrayOfPlayers[cplayer.id] = cplayer;
  }
}
