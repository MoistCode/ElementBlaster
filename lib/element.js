export const FULL_CIRCLE = 2 * Math.PI;

export function drawElements(context, element = 'Lightning') {
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
  if (highlight) {
    context.beginPath();
    context.arc(360, 60, 20, 0, FULL_CIRCLE);
    context.strokeRect(340, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.arc(360, 60, 20, 0, FULL_CIRCLE);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, highlight = false) {
  if (highlight) {
    context.beginPath();
    context.arc(410, 60, 20, 0, FULL_CIRCLE);
    context.strokeRect(390, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.arc(410, 60, 20, 0, FULL_CIRCLE);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, highlight = false) {
  if (highlight) {
    context.beginPath();
    context.arc(460, 60, 20, 0, FULL_CIRCLE);
    context.strokeRect(440, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.arc(460, 60, 20, 0, FULL_CIRCLE);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, highlight = false) {
  if (highlight) {
    context.beginPath();
    context.arc(510, 60, 20, 0, FULL_CIRCLE);
    context.strokeRect(490, 40, 40, 40);
    context.stroke();
    context.closePath();
  } else {
    context.beginPath();
    context.arc(510, 60, 20, 0, FULL_CIRCLE);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    context.closePath();
  }
}
