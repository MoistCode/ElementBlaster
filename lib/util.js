export const drawOuterBorders = (context) => {
  drawGame(context);
  drawRightSide(context);
  drawStartButton(context);
  drawRulesBorder(context);
  drawControlsBorder(context);
  drawSettingsBorder(context);
  drawElementPowerBorder(context)
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
  context.font = '30px Verdana';
  context.fillText('Start', 137, 79);
}

function drawRulesBorder(context) {
  context.beginPath();
  context.strokeRect(30, 105, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  context.font = '20px Verdana';
  context.fillText('Instructions', 117, 124);
}

function drawControlsBorder(context) {
  context.beginPath();
  context.strokeRect(30, 325, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  context.font = '20px Verdana';
  context.fillText('Controls', 129, 344);
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
  context.strokeRect(330, 35, 270, 50);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}
