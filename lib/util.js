export const FULL_CIRCLE = 2 * Math.PI;

export const drawOuterBorders = (context, canvas) => {
  drawGame(context, canvas);
  drawRightSide(context, canvas);
  drawStartButton(context, canvas);
  drawRulesBorder(context, canvas);
  drawControlsBorder(context, canvas);
  drawSettingsBorder(context, canvas);
  drawElementPowerBorder(context, canvas)
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

function drawGame(context, canvas) {
  context.beginPath();
  context.strokeRect(
    (320/1440 * canvas.width),
    ((35/810) * canvas.height),
    ((1100/1440) * canvas.width),
    ((735/810) * canvas.height)
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawRightSide(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((10/1440) * canvas.width),
    ((35/810) * canvas.height),
    ((310/1440) * canvas.width),
    ((735/810) * canvas.height)
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawStartButton(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((115/1440) * canvas.width),
    ((55/810) * canvas.height),
    ((100/1440) * canvas.width),
    ((55/1440) * canvas.height)
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  let fontSize = 30 * ((canvas.height / canvas.width) * (1440 / 810))
  context.font = `${fontSize}px Verdana`;
  context.fillText(
    'Start',
    ((137/1440) * canvas.width),
    ((79/810) * canvas.height)
  );
}

function drawRulesBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((30/1440) * canvas.width),
    ((105/810) * canvas.height),
    ((270/1440) * canvas.width),
    ((200/810) * canvas.height)
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  context.font = '20px Verdana';
  context.fillText(
    'Instructions',
    ((118/1440) * canvas.width),
    ((124/810) * canvas.height)
  );
  let fontSize = Math.ceil(15 * ((canvas.height / canvas.width) * (1440 / 810)));
  context.font = `${fontSize}px Verdana`;

  context.fillText('1. Shoot other circles.',
   ((40/1440) * canvas.width),
   ((145/810) * canvas.height)
  );
  context.fillText('2. Dodge incoming projectiles',
    ((40/1440) * canvas.width),
    ((165/810) * canvas.height)
  );
  context.fillText('3. Interrupt blast with an element stronger',
    ((40/1440) * canvas.width),
    ((185/810) * canvas.height)
  );
  context.fillText('than the incoming projectile.',
  ((55/1440) * canvas.width),
  ((205/810) * canvas.height)
  );

  context.fillText('4. Shoot other circles.',
  ((40/1440) * canvas.width),
  ((225/810) * canvas.height)
  );

}

function drawControlsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((30/1440) * canvas.width),
    ((325/810) * canvas.height),
    ((270/1440) * canvas.width),
    ((200/810) * canvas.height),
  );

  // WASD keys
  context.strokeRect(
    ((72/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((97/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((122/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((97/1440) * canvas.width),
    ((375/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );

  // Arrow keys
  context.strokeRect(
    ((182/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((207/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((232/1440) * canvas.width),
    ((400/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.strokeRect(
    ((207/1440) * canvas.width),
    ((375/810) * canvas.height),
    ((25/1440) * canvas.width),
    ((25/810) * canvas.height)
  );
  context.closePath();

  context.beginPath();
  // Mouse left-click
  context.ellipse(
    ((109/1440) * canvas.width),
    ((465/810) * canvas.height),
    ((20/1440) * canvas.width),
    ((30/810) * canvas.height),
    0,
    0,
    20,
    false
  );
  context.moveTo(
    ((109/1440) * canvas.width),
    ((435/810) * canvas.height),
  );
  context.lineTo(
    ((109/1440) * canvas.width),
    ((465/810) * canvas.height),
  );
  context.stroke();
  context.closePath();

  context.beginPath();
  context.rect(
    ((194/1440) * canvas.width),
    ((450/810) * canvas.height),
    ((50/1440) * canvas.width),
    ((25/810) * canvas.height),
  );
  context.stroke();
  context.closePath();

  let fontSize = Math.ceil(20 * ((canvas.height / canvas.width) * (1440 / 810)));
  context.font = `${fontSize}px Verdana`;
  context.fillText(
    'Controls',
    ((131/1440) * canvas.width),
    ((344/810) * canvas.height),
  );

  fontSize = Math.ceil(15 * ((canvas.height / canvas.width) * (1440 / 810)));
  context.font = `${fontSize}px Verdana`;
  context.fillText(
    'Shoot',
    ((92/1440) * canvas.width),
    ((515/810) * canvas.height),
  );

  fontSize = Math.ceil(15 * ((canvas.height / canvas.width) * (1440 / 810)));
  context.font = `${fontSize}px Verdana`;
  context.fillText(
    'Switch Elements',
    ((185/1440) * canvas.width),
    ((515/810) * canvas.height),
  );

}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((30/1440) * canvas.width),
    ((545/810) * canvas.height),
    ((270/1440) * canvas.width),
    ((200/810) * canvas.height),
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  let fontSize = Math.ceil(20 * ((canvas.height / canvas.width) * (1440 / 810)));
  context.font = `${fontSize}px Verdana`;
  context.fillText(
    'Settings',
    ((129/1440) * canvas.width),
    ((564/810) * canvas.height)
  );

}

function drawElementPowerBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((330/1440) * canvas.width),
    ((35/810) * canvas.height),
    ((270/1440) * canvas.width),
    ((50/810) * canvas.height),
  );
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}
