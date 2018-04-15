document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('gameCanvas');
  const gameContext = gameCanvas.getContext('2d');
  let count = 0
  setInterval(() => {
    drawCanvas(gameContext, count);
    count += 1;
    if (count > 200) {
      count = 0;
    }
  }, 1)
})

function drawCanvas(context, count) {
  context.beginPath();
  context.arc(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600), count, 0, Math.PI * 2, false);
  context.fillStyle = `#${getRandomColor()}`;
  context.fill();
  context.closePath();
  console.log(count);
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
