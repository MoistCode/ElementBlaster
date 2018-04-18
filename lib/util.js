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

export function getRandomColor() {
  const randomChar = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
  ]
  let colorHex = '';

  while (colorHex.length < 6) {
    colorHex = colorHex.concat(
      randomChar[Math.floor(Math.random() * 15)]
    );
  }
  return colorHex;
}

function drawGame(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((330/1440) * canvas.width),
    ((35/810) * canvas.height),
    ((1100/1440) * canvas.width),
    ((735/810) * canvas.height)
  )
  context.stroke();
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

  let fontSize = Math.ceil(
    15 * ((canvas.height / canvas.width) * (1440 / 810))
  );

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
}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(
    ((30/1440) * canvas.width),
    ((545/810) * canvas.height),
    ((270/1440) * canvas.width),
    ((200/810) * canvas.height),
  );
  context.closePath();
  let fontSize = Math.ceil(
    20 * ((canvas.height / canvas.width) * (1440 / 810))
  );
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
  context.stroke();
  context.closePath();
}

export function drawElements(context, canvas, element, firePng, earthPng, lightningPng, waterPng) {

  switch(element) {
    case 'Fire':
      drawFireElement(context, canvas, true, firePng);
      drawEarthElement(context, canvas, false, earthPng);
      drawLightningElement(context, canvas, false, lightningPng);
      drawWaterElement(context, canvas, false, waterPng);
      break;
    case 'Earth':
      drawFireElement(context, canvas, false, firePng);
      drawEarthElement(context, canvas, true, earthPng);
      drawLightningElement(context, canvas, false, lightningPng);
      drawWaterElement(context, canvas, false, waterPng);
      break;
    case 'Lightning':
      drawFireElement(context, canvas, false, firePng);
      drawEarthElement(context, canvas, false, earthPng);
      drawLightningElement(context, canvas, true, lightningPng);
      drawWaterElement(context, canvas, false, waterPng);
      break;
    case 'Water':
      drawFireElement(context, canvas, false, firePng);
      drawEarthElement(context, canvas, false, earthPng);
      drawLightningElement(context, canvas, false, lightningPng);
      drawWaterElement(context, canvas, true, waterPng);
      break;
    default:
      drawFireElement(context, canvas, false, firePng);
      drawEarthElement(context, canvas, false, earthPng);
      drawLightningElement(context, canvas, false, lightningPng);
      drawWaterElement(context, canvas, false, waterPng);
      break;
  }
}

function drawFireElement(context, canvas, highlight = false, firePng) {
  context.drawImage(
    firePng,
    ((340/1440) * canvas.width),
    ((40/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((340/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.strokeStyle = 'red';
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, canvas, highlight = false, earthPng) {
  context.drawImage(
    earthPng,
    ((390/1440) * canvas.width),
    ((40/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((390/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.strokeStyle = '#7B1803';
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, canvas, highlight = false, lightningPng) {
  context.drawImage(
    lightningPng,
    ((440/1440) * canvas.width),
    ((40/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((440/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.strokeStyle = '#F5EE10';
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, canvas, highlight = false, waterPng) {
  context.drawImage(
    waterPng,
    ((490/1440) * canvas.width),
    ((40/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((490/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.strokeStyle = 'blue';
    context.stroke();
    context.closePath();
  }
}
