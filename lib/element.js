export function drawElements(context, element) {
  switch(element) {
    case 'Fire':
      drawFireElement(context, true);
      drawEarthElement(context);
      drawLightningElement(context);
      drawWaterElement(context);
      break;
    case 'Earth':
      drawFireElement(context);
      drawEarthElement(context, true);
      drawLightningElement(context);
      drawWaterElement(context);
      break;
    case 'Lightning':
      drawFireElement(context);
      drawEarthElement(context);
      drawLightningElement(context, true);
      drawWaterElement(context);
      break;
    case 'Water':
      drawFireElement(context);
      drawEarthElement(context);
      drawLightningElement(context);
      drawWaterElement(context, true);
      break;
    default:
      drawFireElement(context);
      drawEarthElement(context);
      drawLightningElement(context);
      drawWaterElement(context);
      break;
  }
}

function drawFireElement(context, highlight = false) {
  let fireObject = new Image();
  fireObject.onload = function() {
    context.drawImage(fireObject, 340, 40, 40, 40);
  }
  fireObject.src = '../assets/images/fire.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(340, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, highlight = false) {
  let earthObject = new Image();
  earthObject.onload = function() {
    context.drawImage(earthObject, 390, 40, 40, 40);
  }
  earthObject.src = '../assets/images/earth.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(390, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, highlight = false) {
  let lightningObject = new Image();
  lightningObject.onload = function() {
    context.drawImage(lightningObject, 440, 40, 40, 40);
  }
  lightningObject.src = '../assets/images/lightning.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(440, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, highlight = false) {
  let waterObject = new Image();
  waterObject.onload = function() {
    context.drawImage(waterObject, 490, 40, 40, 40);
  }
  waterObject.src = '../assets/images/water.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(490, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}
