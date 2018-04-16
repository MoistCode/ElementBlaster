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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomColor = getRandomColor;
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

  while (colorHex.length < 6) {
    colorHex = colorHex.concat(randomChar[Math.floor(Math.random() * 15)]);
  }
  return colorHex;
}

function drawGame(context, canvas) {
  context.beginPath();
  context.strokeRect(330 / 1440 * canvas.width, 35 / 810 * canvas.height, 1090 / 1440 * canvas.width, 735 / 810 * canvas.height);
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
  context.fillText('Switch Elements', 180 / 1440 * canvas.width, 515 / 810 * canvas.height);
}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(30 / 1440 * canvas.width, 545 / 810 * canvas.height, 270 / 1440 * canvas.width, 200 / 810 * canvas.height);
  context.closePath();
  var fontSize = Math.ceil(20 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px Verdana';
  context.fillText('Settings', 129 / 1440 * canvas.width, 564 / 810 * canvas.height);
}

function drawElementPowerBorder(context, canvas) {
  context.beginPath();
  context.strokeRect(330 / 1440 * canvas.width, 35 / 810 * canvas.height, 270 / 1440 * canvas.width, 50 / 810 * canvas.height);
  context.stroke();
  context.closePath();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(context, canvas) {
    _classCallCheck(this, Player);

    this.color = (0, _util.getRandomColor)();
    this.canvas = canvas;
    this.context = context;

    var _generatePosition2 = this._generatePosition(),
        coordX = _generatePosition2.coordX,
        coordY = _generatePosition2.coordY;

    this.coordX = coordX;
    this.coordY = coordY;
    this.dx = Math.random() * 25 + 1;
    this.dy = Math.random() * 25 + 1;
    this.drawPlayer();
  }

  _createClass(Player, [{
    key: 'changePosition',
    value: function changePosition() {}
  }, {
    key: 'drawPlayer',
    value: function drawPlayer() {
      this.context.beginPath();
      this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
      this.context.fillStyle = '#' + this.color;
      this.context.fill();
      this.context.closePath();

      if (this.coordX + 30 >= 1064 / 1440 * this.canvas.width) {
        this.dx = -(Math.random() * 25 + 1);
      } else if (this.coordX - 30 <= 330 / 1440 * this.canvas.width) {
        this.dx = Math.random() * 25 + 1;
      }

      if (this.coordY + 30 >= 780 / 810 * this.canvas.height) {
        this.dy = -(Math.random() * 25 + 1);
      } else if (this.coordY - 30 <= 35 / 810 * this.canvas.height) {
        this.dy = Math.random() * 25 + 1;
      }

      this.coordX += this.dx;
      this.coordY += this.dy;
    }
  }, {
    key: '_generatePosition',
    value: function _generatePosition() {
      var coordX = Math.random() * (1064 / 1440 * this.canvas.width) + 343 / 1440 * this.canvas.width;

      var coordY = Math.random() * (710 / 810 * this.canvas.height) + 47 / 810 * this.canvas.height;

      while (coordX < 613 / 1440 * this.canvas.width && coordY < 98 / 810 * this.canvas.height) {
        coordX = Math.random() * (1064 / 1440 * this.canvas.width) + 343 / 1440 * this.canvas.width;
        coordY = Math.random() * (710 / 810 * this.canvas.height) + 47 / 810 * this.canvas.height;
      }

      return { coordX: coordX, coordY: coordY };
    }
  }]);

  return Player;
}();

exports.default = Player;

// let x = Math.random() * gameCanvas.width;
// let y = Math.random() * gameCanvas.height;
// let dx = Math.random() * 25;
// let dy = Math.random() * 25;
// animate();
//
// function animate() {
//   requestAnimationFrame(animate);
//   if (x + 30 >= gameCanvas.width) {
//     dx = -(Math.random() * 25)
//   } else if (x - 30 <= 0) {
//     dx = Math.random() * 25;
//   }
//   if (y + 30 >= gameCanvas.height) {
//     dy = -(Math.random() * 25);
//   } else if (y - 30 <= 0) {
//     dy = Math.random() * 25;
//   }
//   gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
//   gameContext.beginPath();
//   gameContext.arc(x, y, 30, 0, Math.PI * 2, false);
//   gameContext.fillStyle = 'blue';
//   gameContext.fill();
//   gameContext.closePath();
//
//   x += dx;
//   y += dy;
// }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComputerPlayer = function (_Player) {
  _inherits(ComputerPlayer, _Player);

  function ComputerPlayer(context, canvas) {
    _classCallCheck(this, ComputerPlayer);

    return _possibleConstructorReturn(this, (ComputerPlayer.__proto__ || Object.getPrototypeOf(ComputerPlayer)).call(this, context, canvas));
  }

  return ComputerPlayer;
}(_player2.default);

exports.default = ComputerPlayer;

/***/ }),
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HumanPlayer = function (_Player) {
  _inherits(HumanPlayer, _Player);

  function HumanPlayer(context, canvas) {
    _classCallCheck(this, HumanPlayer);

    return _possibleConstructorReturn(this, (HumanPlayer.__proto__ || Object.getPrototypeOf(HumanPlayer)).call(this, context, canvas));
  }

  return HumanPlayer;
}(_player2.default);

exports.default = HumanPlayer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _element = __webpack_require__(3);

var _humanplayer = __webpack_require__(4);

var _humanplayer2 = _interopRequireDefault(_humanplayer);

var _computerplayer = __webpack_require__(2);

var _computerplayer2 = _interopRequireDefault(_computerplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var gameCanvas = document.getElementById('gameCanvas');
  var gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;

  _generateGame(gameContext, gameCanvas);
});

var _generateGame = function _generateGame(context, canvas) {
  (0, _util.drawOuterBorders)(context, canvas);
  (0, _element.drawElements)(context, canvas);
  var humanPlayer = _generateHumanPlayer(context, canvas);
};

var _generateHumanPlayer = function _generateHumanPlayer(context, canvas) {
  return new _humanplayer2.default(context, canvas);
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map