class Element {
  constructor() {

  }
}

export function drawElements(context, canvas, element) {
  switch(element) {
    case 'Fire':
      drawFireElement(context, canvas, true);
      drawEarthElement(context, canvas);
      drawLightningElement(context, canvas);
      drawWaterElement(context, canvas);
      break;
    case 'Earth':
      drawFireElement(context, canvas);
      drawEarthElement(context, canvas, true);
      drawLightningElement(context, canvas);
      drawWaterElement(context, canvas);
      break;
    case 'Lightning':
      drawFireElement(context, canvas);
      drawEarthElement(context, canvas);
      drawLightningElement(context, canvas, true);
      drawWaterElement(context, canvas);
      break;
    case 'Water':
      drawFireElement(context, canvas);
      drawEarthElement(context, canvas);
      drawLightningElement(context, canvas);
      drawWaterElement(context, canvas, true);
      break;
    default:
      drawFireElement(context, canvas);
      drawEarthElement(context, canvas);
      drawLightningElement(context, canvas);
      drawWaterElement(context, canvas);
      break;
  }
}

function drawFireElement(context, canvas, highlight = false) {
  let fireObject = new Image();
  fireObject.onload = function() {
    context.drawImage(
      fireObject,
      ((340/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
  }
  fireObject.src = '../assets/images/fire.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((340/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, canvas, highlight = false) {
  let earthObject = new Image();
  earthObject.onload = function() {
    context.drawImage(
      earthObject,
      ((390/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
  }
  earthObject.src = '../assets/images/earth.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((390/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, canvas, highlight = false) {
  let lightningObject = new Image();
  lightningObject.onload = function() {
    context.drawImage(
      lightningObject,
      ((440/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
  }
  lightningObject.src = '../assets/images/lightning.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((440/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, canvas, highlight = false) {
  let waterObject = new Image();
  waterObject.onload = function() {
    context.drawImage(
      waterObject,
      ((490/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
  }
  waterObject.src = '../assets/images/water.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(
      ((490/1440) * canvas.width),
      ((40/810) * canvas.height),
      ((40/1440) * canvas.width),
      ((40/810) * canvas.height)
    );
    context.stroke();
    context.closePath();
  }
}
