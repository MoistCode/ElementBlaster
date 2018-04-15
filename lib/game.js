document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');
  drawCanvas(gameContext);
})

function drawCanvas(context) {
  context.beginPath();
  context.strokeRect(0, 100, 900, 900);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}
