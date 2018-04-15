document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');

  setInterval(() => {
    drawCanvas(gameContext,gameCanvas, ...getRandomNumbers());
    gameContext.clearRect()
  }, 1)
})

function drawCanvas(context, x, y, width, height) {
  context.fillRect(x, y, width, height);
  context.fillStyle = `#${getRandomColor()}`;
}

function getRandomNumbers() {
  return [
    Math.floor(Math.random() * 600),
    Math.floor(Math.random() * 600),
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 200)
  ]
}

function getRandomColor() {
  const randomChar = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
  ]
  let colorHex = '';
  console.log(colorHex);

  while (colorHex.length < 6) {
    colorHex = colorHex.concat(randomChar[Math.floor(Math.random() * 15)]);
  }
  return colorHex;
}
