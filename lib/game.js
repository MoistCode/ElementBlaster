document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');
  drawOuterBorders(gameContext);
})



function drawOuterBorders(context) {
  drawGame(context);
  drawRightSide(context);
  drawStartButton(context);
  drawRulesBorder(context);
  drawControlsBorder(context);
  drawSettingsBorder(context);
}

function drawGame(context) {
  context.beginPath();
  context.strokeRect(330, 35, 1100, 735);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawRightSide(context) {
  context.beginPath();
  context.strokeRect(10, 35, 310, 735);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawStartButton(context) {
  context.beginPath();
  context.strokeRect(115,55, 100, 30);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawRulesBorder(context) {
  context.beginPath();
  context.strokeRect(30, 105, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawControlsBorder(context) {
  context.beginPath();
  context.strokeRect(30, 325, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawSettingsBorder(context) {
  context.beginPath();
  context.strokeRect(30, 545, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawElementPowerBorder(context) {
  context.beginPath();
  context.strokeRect(330, 545, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}
