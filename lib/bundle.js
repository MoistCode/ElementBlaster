/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(1);

var _element = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {
  var gameCanvas = document.getElementById('gameCanvas');
  var gameContext = gameCanvas.getContext('2d');
  (0, _util.drawOuterBorders)(gameContext);
  (0, _element.drawElements)(gameContext);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var drawOuterBorders = exports.drawOuterBorders = function drawOuterBorders(context) {
  drawGame(context);
  drawRightSide(context);
  drawStartButton(context);
  drawRulesBorder(context);
  drawControlsBorder(context);
  drawSettingsBorder(context);
  drawElementPowerBorder(context);
};

function getRandomColor() {
  var randomChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  var colorHex = '';
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
  context.strokeRect(115, 55, 100, 30);
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
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(72, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(97, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(122, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(97, 360, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(182, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(207, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(232, 385, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
  context.strokeRect(207, 360, 25, 25);
  context.fillStyle = '#FF0000';
  context.fill();
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

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawElements = drawElements;
var FULL_CIRCLE = exports.FULL_CIRCLE = 2 * Math.PI;

function drawElements(context) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Lightning';

  switch (element) {
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

function drawFireElement(context) {
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var fireObject = new Image();
  fireObject.onload = function () {
    context.drawImage(fireObject, 340, 40, 40, 40);
  };
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

function drawEarthElement(context) {
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var earthObject = new Image();
  earthObject.onload = function () {
    context.drawImage(earthObject, 390, 40, 40, 40);
  };
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

function drawLightningElement(context) {
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var lightningObject = new Image();
  lightningObject.onload = function () {
    context.drawImage(lightningObject, 440, 40, 40, 40);
  };
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

function drawWaterElement(context) {
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var waterObject = new Image();
  waterObject.onload = function () {
    context.drawImage(waterObject, 490, 40, 40, 40);
  };
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map