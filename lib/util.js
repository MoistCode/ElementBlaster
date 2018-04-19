export const FULL_CIRCLE = 2 * Math.PI;

export const drawOuterBorders = (context, canvas) => {
  drawGame(context, canvas);
  drawRightSide(context, canvas);
  drawTitle(context, canvas);
  drawRulesBorder(context, canvas);
  drawSettingsBorder(context, canvas);
  // drawElementPowerBorder(context, canvas)
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
  context.lineWidth = '5';
  context.rect(
    ((330/1440) * canvas.width),
    ((2/810) * canvas.height),
    ((1110/1440) * canvas.width),
    ((808/810) * canvas.height)
  )
  context.fillStyle = 'rgba(200, 255, 255, 0.1)';
  context.fill();
  context.stroke();
  context.closePath();
}

function drawRightSide(context, canvas) {
  context.beginPath();
  context.lineWidth = '5';
  context.rect(
    ((10/1440) * canvas.width),
    ((0/810) * canvas.height),
    ((310/1440) * canvas.width),
    ((735/810) * canvas.height)
  );
  context.fillStyle = 'rgba(200, 255, 255, 0.1)';
  context.fill();
  context.closePath();
}

function drawTitle(context, canvas) {
  context.beginPath();
  context.lineWidth = '1';
  context.fillStyle = `#${getRandomColor()}`;
  context.fill();
  context.closePath();
  context.font = 'italic bold 41px arcade';
  context.fillText(
    'ELEMENT',
    ((25/1440) * canvas.width),
    ((41/810) * canvas.height)
  );
  context.fillText(
    'BLASTER',
    ((140/1440) * canvas.width),
    ((80/810) * canvas.height)
  );
  context.closePath();
}

function drawRulesBorder(context, canvas) {
  context.font = '23px arcade';
  context.fillStyle = 'white';
  context.fillText(
    'Instructions',
    ((100/1440) * canvas.width),
    ((112/810) * canvas.height)
  );

  let fontSize = Math.ceil(
    15 * ((canvas.height / canvas.width) * (1440 / 810))
  );
  context.font = `${fontSize}px arcade`;

  context.fillText('1. Shoot other circles.',
   ((40/1440) * canvas.width),
   ((140/810) * canvas.height)
  );
  context.fillText('2. Dodge incoming projectiles',
    ((40/1440) * canvas.width),
    ((160/810) * canvas.height)
  );
  context.fillText('3. Only bullets with the right element',
    ((40/1440) * canvas.width),
    ((180/810) * canvas.height)
  );
  context.fillText('will eliminate the enemy.',
  ((55/1440) * canvas.width),
  ((198/810) * canvas.height)
  );
}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeStyle = `#${getRandomColor()}`
  context.lineWidth = 5;
  context.strokeRect(
    ((36/1440) * canvas.width),
    ((570/810) * canvas.height),
    ((260/1440) * canvas.width),
    ((159/810) * canvas.height),
  );
  context.closePath();

}

// function drawElementPowerBorder(context, canvas) {
//   context.beginPath();
//   context.lineWidth = '1';
//   context.strokeRect(
//     ((330/1440) * canvas.width),
//     ((1/810) * canvas.height),
//     ((270/1440) * canvas.width),
//     ((50/810) * canvas.height),
//   );
//   context.stroke();
//   context.closePath();
// }

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
    ((6/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(
      ((340/1440) * canvas.width),
      ((6/810) * canvas.height),
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
    ((6/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  context.drawImage(
    earthPng,
    ((390/1440) * canvas.width),
    ((6/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(
      ((390/1440) * canvas.width),
      ((6/810) * canvas.height),
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
    ((6/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(
      ((440/1440) * canvas.width),
      ((6/810) * canvas.height),
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
    ((6/810) * canvas.height),
    ((40/1440) * canvas.width),
    ((40/810) * canvas.height)
  );
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(
      ((490/1440) * canvas.width),
      ((6/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.strokeStyle = 'blue';
    context.stroke();
    context.closePath();
  }
}

export const drawInstructions = (context, canvas, instructionPng, movementPng) => {
  let fontSize = Math.ceil(
    15 * ((canvas.height / canvas.width) * (1440 / 810))
  );

  context.drawImage(
    instructionPng,
    ((90/1440) * canvas.width),
    ((330/810) * canvas.height),
    ((150/1440) * canvas.width),
    ((230/810) * canvas.height)
  );

  context.drawImage(
    movementPng,
    ((55/1440) * canvas.width),
    ((215/810) * canvas.height),
    ((220/1440) * canvas.width),
    ((65/810) * canvas.height)
  );

  context.beginPath();
  context.font = `${fontSize}px arcade`;
  context.fillText('Move',
    ((84/1440) * canvas.width),
    ((305/810) * canvas.height)
  );
  context.fillText('Shoot',
    ((210/1440) * canvas.width),
    ((305/810) * canvas.height)
  );
  context.closePath();
}
