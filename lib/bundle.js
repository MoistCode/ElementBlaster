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
  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;
  var gameContext = gameCanvas.getContext('2d');
  (0, _util.drawOuterBorders)(gameContext, gameCanvas);
  (0, _element.drawElements)(gameContext, gameCanvas);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FULL_CIRCLE = exports.FULL_CIRCLE = 2 * Math.PI;

var drawOuterBorders = exports.drawOuterBorders = function drawOuterBorders(context, canvas) {
  drawGame(context, canvas);
  drawRightSide(context, canvas);
  drawStartButton(context, canvas);
  drawRulesBorder(context, canvas);
  drawControlsBorder(context, canvas);
  drawSettingsBorder(context, canvas);
  drawElementPowerBorder(context, canvas);
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

function drawGame(context, canvas) {
  context.beginPath();
  context.strokeRect(320 / 1440 * canvas.width, 35 / 810 * canvas.height, 1100 / 1440 * canvas.width, 735 / 810 * canvas.height);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawRightSide(context, canvas) {
  context.beginPath();
  context.strokeRect(10 / 1440 * canvas.width, 35 / 810 * canvas.height, 310 / 1440 * canvas.width, 735 / 810 * canvas.height);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
}

function drawStartButton(context, canvas) {
  context.beginPath();
  context.strokeRect(115 / 1440 * canvas.width, 55 / 810 * canvas.height, 100 / 1440 * canvas.width, 55 / 1440 * canvas.height);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  var fontSize = 30 * (canvas.height / canvas.width * (1440 / 810));
  context.font = fontSize + 'px Verdana';
  context.fillText('Start', 137 / 1440 * canvas.width, 79 / 810 * canvas.height);
}

function drawRulesBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(30 / 1440 * canvas.width, 105 / 810 * canvas.height, 270 / 1440 * canvas.width, 200 / 810 * canvas.height);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  context.font = '20px Verdana';
  context.fillText('Instructions', 118 / 1440 * canvas.width, 124 / 810 * canvas.height);
  var fontSize = Math.ceil(15 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';

  context.fillText('1. Shoot other circles.', 40 / 1440 * canvas.width, 145 / 810 * canvas.height);
  context.fillText('2. Dodge incoming projectiles', 40 / 1440 * canvas.width, 165 / 810 * canvas.height);
  context.fillText('3. Interrupt blast with an element stronger', 40 / 1440 * canvas.width, 185 / 810 * canvas.height);
  context.fillText('than the incoming projectile.', 55 / 1440 * canvas.width, 205 / 810 * canvas.height);

  context.fillText('4. Shoot other circles.', 40 / 1440 * canvas.width, 225 / 810 * canvas.height);
}

function drawControlsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(30 / 1440 * canvas.width, 325 / 810 * canvas.height, 270 / 1440 * canvas.width, 200 / 810 * canvas.height);

  // WASD keys
  context.strokeRect(72 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(97 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(122 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(97 / 1440 * canvas.width, 375 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);

  // Arrow keys
  context.strokeRect(182 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(207 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(232 / 1440 * canvas.width, 400 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.strokeRect(207 / 1440 * canvas.width, 375 / 810 * canvas.height, 25 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.closePath();

  context.beginPath();
  // Mouse left-click
  context.ellipse(109 / 1440 * canvas.width, 465 / 810 * canvas.height, 20 / 1440 * canvas.width, 30 / 810 * canvas.height, 0, 0, 20, false);
  context.moveTo(109 / 1440 * canvas.width, 435 / 810 * canvas.height);
  context.lineTo(109 / 1440 * canvas.width, 465 / 810 * canvas.height);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.rect(194 / 1440 * canvas.width, 450 / 810 * canvas.height, 50 / 1440 * canvas.width, 25 / 810 * canvas.height);
  context.stroke();
  context.closePath();

  var fontSize = Math.ceil(20 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';
  context.fillText('Controls', 131 / 1440 * canvas.width, 344 / 810 * canvas.height);

  fontSize = Math.ceil(15 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';
  context.fillText('Shoot', 92 / 1440 * canvas.width, 515 / 810 * canvas.height);

  fontSize = Math.ceil(15 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';
  context.fillText('Switch Elements', 185 / 1440 * canvas.width, 515 / 810 * canvas.height);
}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(30 / 1440 * canvas.width, 545 / 810 * canvas.height, 270 / 1440 * canvas.width, 200 / 810 * canvas.height);
  context.fillStyle = '#FF0000';
  context.fill();
  context.closePath();
  var fontSize = Math.ceil(20 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';
  context.fillText('Settings', 129 / 1440 * canvas.width, 564 / 810 * canvas.height);
}

function drawElementPowerBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(330 / 1440 * canvas.width, 35 / 810 * canvas.height, 270 / 1440 * canvas.width, 50 / 810 * canvas.height);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element() {
  _classCallCheck(this, Element);
};

function drawElements(context, canvas, element) {
  switch (element) {
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

function drawFireElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var fireObject = new Image();
  fireObject.onload = function () {
    context.drawImage(fireObject, 340 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  };
  fireObject.src = '../assets/images/fire.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(340 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var earthObject = new Image();
  earthObject.onload = function () {
    context.drawImage(earthObject, 390 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  };
  earthObject.src = '../assets/images/earth.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(390 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var lightningObject = new Image();
  lightningObject.onload = function () {
    context.drawImage(lightningObject, 440 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  };
  lightningObject.src = '../assets/images/lightning.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(440 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var waterObject = new Image();
  waterObject.onload = function () {
    context.drawImage(waterObject, 490 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  };
  waterObject.src = '../assets/images/water.png';
  if (highlight) {
    context.beginPath();
    context.strokeRect(490 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map