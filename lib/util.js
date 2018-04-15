export const FULL_CIRCLE = 2 * Math.PI;

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
  context.fillText('Instructions', 118, 124);
  context.font = '15px Verdana';
  context.fillText('1. Shoot other circles.', 40, 145);
  context.fillText('2. Dodge incoming projectiles', 40, 165);
  context.fillText('3. Interrupt blast with an element stronger', 40, 185);
  context.fillText('than the incoming projectile.', 55, 205);

  context.fillText('4. Shoot other circles.', 40, 225);

}

function drawControlsBorder(context) {
  context.beginPath();
  context.strokeRect(30, 325, 270, 200);

  // WASD keys
  context.strokeRect(72, 400, 25, 25);
  context.strokeRect(97, 400, 25, 25);
  context.strokeRect(122, 400, 25, 25);
  context.strokeRect(97, 375, 25, 25);

  // Arrow keys
  context.strokeRect(182, 400, 25, 25);
  context.strokeRect(207, 400, 25, 25);
  context.strokeRect(232, 400, 25, 25);
  context.strokeRect(207, 375, 25, 25);

  // Mouse left-click
  context.ellipse(109, 465, 20, 30, 0, 0, 20, false);

  // Mouse right-click
  context.ellipse(219, 465, 20, 30, 0, 0, 20, false);
  context.stroke();

  context.closePath();

  context.font = '20px Verdana';
  context.fillText('Controls', 131, 344);

}

function drawSettingsBorder(context) {
  context.beginPath();
  context.strokeRect(30, 545, 270, 200);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  context.font = '20px Verdana';
  context.fillText('Settings', 129, 564);
}

function drawElementPowerBorder(context) {
  context.beginPath();
  context.strokeRect(330, 35, 270, 50);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}
