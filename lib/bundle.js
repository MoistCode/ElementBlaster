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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var numOfElements = 0;
var listOfElements = {};

var Element = function () {
  function Element(direction, posX, posY, context, canvas, element) {
    _classCallCheck(this, Element);

    this.id = numOfElements;
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    this.element = element;
    listOfElements[numOfElements] = this;
    numOfElements += 1;
    this.velocity = 5;
    this.lifeline = 70;
  }

  _createClass(Element, [{
    key: 'drawElement',
    value: function drawElement() {
      switch (this.direction) {
        case 'up':
          this.context.beginPath();
          this.context.rect(this.posX - 13 / 2, this.posY - 18, 13, 13);
          switch (this.element) {
            case 'Fire':
              this.context.fillStyle = 'red';
              break;
            case 'Earth':
              this.context.fillStyle = '#7B1803';
              break;
            case 'Lightning':
              this.context.fillStyle = '#F5EE10';
              break;
            case 'Water':
              this.context.fillStyle = 'blue';
              break;
          }
          this.context.fill();
          this.context.closePath();

          this.context.beginPath();
          this.context.arc(this.posX, this.posY - 18, 7, 0, Math.PI, true);
          this.context.fillStyle = 'black';
          this.context.fill();
          this.context.closePath();

          this.posY -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'down':
          this.context.beginPath();
          this.context.rect(this.posX - 13 / 2, this.posY + 18, 13, 13);
          switch (this.element) {
            case 'Fire':
              this.context.fillStyle = 'red';
              break;
            case 'Earth':
              this.context.fillStyle = '#7B1803';
              break;
            case 'Lightning':
              this.context.fillStyle = '#F5EE10';
              break;
            case 'Water':
              this.context.fillStyle = 'blue';
              break;
          }
          this.context.fill();
          this.context.closePath();

          this.context.beginPath();
          this.context.arc(this.posX, this.posY + 30, 7, 0, Math.PI);
          this.context.fillStyle = 'black';
          this.context.fill();
          this.context.closePath();

          this.posY += this.velocity;
          this.lifeline -= 1;
          break;
        case 'left':
          this.context.beginPath();
          this.context.rect(this.posX - 18, this.posY - 13 / 2, 13, 13);
          switch (this.element) {
            case 'Fire':
              this.context.fillStyle = 'red';
              break;
            case 'Earth':
              this.context.fillStyle = '#7B1803';
              break;
            case 'Lightning':
              this.context.fillStyle = '#F5EE10';
              break;
            case 'Water':
              this.context.fillStyle = 'blue';
              break;
          }
          this.context.fill();
          this.context.closePath();

          this.context.beginPath();
          this.context.arc(this.posX - 18, this.posY, 7, Math.PI / 2, 3 * Math.PI / 2);
          this.context.fillStyle = 'black';
          this.context.fill();
          this.context.closePath();

          this.posX -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'right':
          this.context.beginPath();
          this.context.rect(this.posX + 13, this.posY - 13 / 2, 13, 13);
          switch (this.element) {
            case 'Fire':
              this.context.fillStyle = 'red';
              break;
            case 'Earth':
              this.context.fillStyle = '#7B1803';
              break;
            case 'Lightning':
              this.context.fillStyle = '#F5EE10';
              break;
            case 'Water':
              this.context.fillStyle = 'blue';
              break;
          }
          this.context.fill();
          this.context.closePath();

          this.context.beginPath();
          this.context.arc(this.posX + 26, this.posY, 7, Math.PI / 2, 3 * Math.PI / 2, true);
          this.context.fillStyle = 'black';
          this.context.fill();
          this.context.closePath();

          this.posX += this.velocity;
          this.lifeline -= 1;
          break;
      }
      this.checkForWall();
    }
  }, {
    key: 'showListOfElements',
    value: function showListOfElements() {
      return Object.values(listOfElements).map(function (el) {
        if (el.lifeline > 0) {
          return el;
        }
      });
    }
  }, {
    key: 'checkForWall',
    value: function checkForWall() {
      if (this.velocity == 0) {
        this.velocity = 5;
      }
      if (this.posX <= 617 / 1440 * this.canvas.width && this.posY <= 105 / 810 * this.canvas.height) {
        this.velocity = -this.velocity;
      } else if (this.posX >= 1404 / 1440 * this.canvas.width) {
        this.velocity = -this.velocity;
      } else if (this.posY <= 47 / 810 * this.canvas.height) {
        this.velocity = -this.velocity;
      } else if (this.posX <= 347 / 1440 * this.canvas.width) {
        this.velocity = -this.velocity;
      } else if (this.posY >= 754 / 810 * this.canvas.height) {
        this.velocity = -this.velocity;
      }
    }
  }]);

  return Element;
}();

function returnCurrentListOfElements() {
  Object.values(listOfElements).forEach(function (el) {
    if (el.lifeline <= 0) {
      delete listOfElements[el.id];
    }
  });
  return Object.values(listOfElements);
}

function deleteElement(id) {
  delete listOfElements[id];
}

exports.Element = Element;
exports.returnCurrentListOfElements = returnCurrentListOfElements;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPlayers = exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerIds = 0;
var players = {};

var Player = function () {
  function Player(context, canvas) {
    _classCallCheck(this, Player);

    this.id = playerIds;
    playerIds += 1;
    this.color = (0, _util.getRandomColor)();
    this.canvas = canvas;
    this.context = context;
    this.generatePosition();
    this.drawPlayer();
    players[this.id] = this;
  }

  _createClass(Player, [{
    key: 'drawPlayer',
    value: function drawPlayer() {
      this.context.beginPath();
      this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
      this.context.fillStyle = '#' + this.color;
      this.context.fill();
      this.context.closePath();
    }
  }, {
    key: 'generatePosition',
    value: function generatePosition() {
      this.coordX = Math.random() * (1064 / 1440 * this.canvas.width) + 343 / 1440 * this.canvas.width;

      this.coordY = Math.random() * (710 / 810 * this.canvas.height) + 47 / 810 * this.canvas.height;

      while (this.coordX < 613 / 1440 * this.canvas.width && this.coordY < 98 / 810 * this.canvas.height) {
        this.coordX = Math.random() * (1064 / 1440 * this.canvas.width) + 343 / 1440 * this.canvas.width;
        this.coordY = Math.random() * (710 / 810 * this.canvas.height) + 47 / 810 * this.canvas.height;
      }
    }
  }, {
    key: 'checkForWall',
    value: function checkForWall() {
      if (this.coordX <= 613 / 1440 * this.canvas.width && this.coordY <= 98 / 810 * this.canvas.height) {
        this.velocityX = Math.random() * 3 + 1;
        this.velocityY = Math.random() * 3 + 1;
      } else if (this.coordX >= 1409 / 1440 * this.canvas.width) {
        this.velocityX = -(Math.random() * 3 + 1);
      } else if (this.coordY <= 47 / 810 * this.canvas.height) {
        this.velocityY = Math.random() * 3 + 1;
      } else if (this.coordX <= 343 / 1440 * this.canvas.width) {
        this.velocityX = Math.random() * 3 + 1;
      } else if (this.coordY >= 757 / 810 * this.canvas.height) {
        this.velocityY = -(Math.random() * 3 + 1);
      }
    }
  }]);

  return Player;
}();

var getAllPlayers = function getAllPlayers() {
  return players;
};

exports.Player = Player;
exports.getAllPlayers = getAllPlayers;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomColor = getRandomColor;
exports.drawElements = drawElements;
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

  if (highlight) {
    context.beginPath();
    context.strokeRect(340 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (highlight) {
    context.beginPath();
    context.strokeRect(390 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (highlight) {
    context.beginPath();
    context.strokeRect(440 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (highlight) {
    context.beginPath();
    context.strokeRect(490 / 1440 * canvas.width, 40 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.stroke();
    context.closePath();
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComputer = exports.getEnemyElements = exports.ComputerPlayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _element = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listOfEnemyElements = {};

var elements = ['Fire', 'Earth', 'Lightning', 'Water'];

var directions = ['up', 'down', 'left', 'right'];

var ComputerPlayer = function (_Player) {
  _inherits(ComputerPlayer, _Player);

  function ComputerPlayer(context, canvas) {
    _classCallCheck(this, ComputerPlayer);

    var _this = _possibleConstructorReturn(this, (ComputerPlayer.__proto__ || Object.getPrototypeOf(ComputerPlayer)).call(this, context, canvas));

    _this.velocityX = (Math.random() - 0.5) * 3 + 1;
    _this.velocityY = (Math.random() - 0.5) * 3 + 1;
    _this.shotDelay = Math.floor(Math.random() * 1001);
    _this.currentElement = elements[Math.floor(Math.random() * 3)];
    return _this;
  }

  _createClass(ComputerPlayer, [{
    key: 'changePosition',
    value: function changePosition(humanPosX, humanPosY) {
      var fillStyle = void 0;
      switch (this.currentElement) {
        case elements[0]:
          fillStyle = 'red';
          break;
        case elements[1]:
          fillStyle = '#7B1803';
          break;
        case elements[2]:
          fillStyle = '#F5EE10';
          break;
        case elements[3]:
          fillStyle = 'blue';
          break;
      }

      this.checkForWall();
      this.coordX += this.velocityX;
      this.coordY += this.velocityY;
      this.context.beginPath();
      this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
      this.context.fillStyle = fillStyle;
      this.context.fill();
      this.context.closePath();
      this.shotDelay += 2;
      if (this.shotDelay >= 100) {
        // this.automatedShots(humanPosX, humanPosY);
        this.shotDelay = 0;
        this.currentElement = elements[Math.floor(Math.random() * 3)];
      }
    }
  }, {
    key: 'automatedShots',
    value: function automatedShots(humanPosX, humanPosY) {
      var compElement = elements[Math.floor(Math.random() * 4)];
      var compDirection = directions[Math.floor(Math.random() * 4)];
      var newEl = new _element.Element(compDirection, this.coordX, this.coordY, this.context, this.canvas, compElement);
      listOfEnemyElements[newEl.id] = newEl;
    }
  }]);

  return ComputerPlayer;
}(_player.Player);

function getEnemyElements() {
  Object.values(listOfEnemyElements).forEach(function (el) {
    if (el.lifeline <= 0) {
      delete listOfEnemyElements[el.id];
    }
  });
}

function deleteComputer(id) {
  delete listOfEnemyElements[id];
}

exports.ComputerPlayer = ComputerPlayer;
exports.getEnemyElements = getEnemyElements;
exports.deleteComputer = deleteComputer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteHuman = exports.getHumanElements = exports.HumanPlayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _element = __webpack_require__(0);

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listOfHumanElements = {};

var elements = ['Fire', 'Earth', 'Lightning', 'Water'];

var HumanPlayer = function (_Player) {
  _inherits(HumanPlayer, _Player);

  function HumanPlayer(context, canvas) {
    _classCallCheck(this, HumanPlayer);

    var _this = _possibleConstructorReturn(this, (HumanPlayer.__proto__ || Object.getPrototypeOf(HumanPlayer)).call(this, context, canvas));

    _this.velocityX = 0;
    _this.velocityY = 0;
    _this.element = 0;
    _this.movementBool = {
      up: false,
      left: false,
      down: false,
      right: false
    };

    _this.addUserControls();
    return _this;
  }

  _createClass(HumanPlayer, [{
    key: 'changePosition',
    value: function changePosition() {
      this.checkForWall();
      this.checkMovementBool();
      this.checkForWall();
      this.slowDown();
      this.checkForWall();
      this.drawCurrentLocation();
      this.checkForWall();
    }
  }, {
    key: 'addUserControls',
    value: function addUserControls() {
      this.addKeyUpEvents();
      this.addKeyDownEvents();
    }
  }, {
    key: 'addKeyDownEvents',
    value: function addKeyDownEvents() {
      var _this2 = this;

      document.addEventListener('keydown', function (event) {
        switch (event.key.toLowerCase()) {
          case 'w':
            _this2.movementBool.up = true;
            break;
          case 'a':
            _this2.movementBool.left = true;
            break;
          case 's':
            _this2.movementBool.down = true;
            break;
          case 'd':
            _this2.movementBool.right = true;
            break;
          case 'q':
            _this2.element -= 1;
            if (_this2.element < 0) {
              _this2.element = 3;
            }
            (0, _util.drawElements)(_this2.context, _this2.canvas, elements[_this2.element]);
            break;
          case 'e':
            _this2.element += 1;
            if (_this2.element > 3) {
              _this2.element = 0;
            }
            (0, _util.drawElements)(_this2.context, _this2.canvas, elements[_this2.element]);
            break;
          case 'arrowup':
            _this2.el = new _element.Element('up', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            listOfHumanElements[_this2.el.id] = _this2.el;
            break;
          case 'arrowdown':
            _this2.el = new _element.Element('down', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            listOfHumanElements[_this2.el.id] = _this2.el;
            break;
          case 'arrowleft':
            _this2.el = new _element.Element('left', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            listOfHumanElements[_this2.el.id] = _this2.el;
            break;
          case 'arrowright':
            _this2.el = new _element.Element('right', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            listOfHumanElements[_this2.el.id] = _this2.el;
            break;
        }
      });
    }
  }, {
    key: 'addKeyUpEvents',
    value: function addKeyUpEvents() {
      var _this3 = this;

      document.addEventListener('keyup', function (event) {
        switch (event.key.toLowerCase()) {
          case 'w':
            _this3.movementBool.up = false;
            break;
          case 'a':
            _this3.movementBool.left = false;
            break;
          case 's':
            _this3.movementBool.down = false;
            break;
          case 'd':
            _this3.movementBool.right = false;
            break;
        }
      });
    }
  }, {
    key: 'drawCurrentLocation',
    value: function drawCurrentLocation() {
      this.context.beginPath();
      this.context.arc(this.coordX, this.coordY, 18, 0, Math.PI * 2, false);
      this.context.fillStyle = 'black';
      this.context.fill();
      this.context.closePath();

      this.context.beginPath();
      this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
      this.context.fillStyle = '#42FF00';
      this.context.fill();
      this.context.closePath();
    }
  }, {
    key: 'slowDown',
    value: function slowDown() {
      this.coordX += this.velocityX;
      this.coordY += this.velocityY;
      this.velocityX *= 0.93;
      this.velocityY *= 0.93;
    }
  }, {
    key: 'checkMovementBool',
    value: function checkMovementBool() {
      if (this.movementBool.up) {
        this.velocityY = -2;
      }
      if (this.movementBool.left) {
        this.velocityX = -2;
      }
      if (this.movementBool.down) {
        this.velocityY = 2;
      }
      if (this.movementBool.right) {
        this.velocityX = 2;
      }
    }
  }, {
    key: 'checkForWall',
    value: function checkForWall() {
      if (this.coordX <= 613 / 1440 * this.canvas.width && this.coordY <= 98 / 810 * this.canvas.height) {
        this.velocityX = 0.5;
        this.velocityY = 0.5;
      } else if (this.coordX >= 1409 / 1440 * this.canvas.width) {
        this.velocityX = -0.5;
      } else if (this.coordY <= 47 / 810 * this.canvas.height) {
        this.velocityY = 0.5;
      } else if (this.coordX <= 343 / 1440 * this.canvas.width) {
        this.velocityX = 0.5;
      } else if (this.coordY >= 757 / 810 * this.canvas.height) {
        this.velocityY = -0.5;
      }
    }
  }]);

  return HumanPlayer;
}(_player.Player);

function getHumanElements() {
  Object.values(listOfHumanElements).forEach(function (el) {
    if (el.lifeline <= 0) {
      delete listOfHumanElements[el.id];
    }
  });
}

function deleteHuman() {
  delete listOfHumanElements[0];
}

exports.HumanPlayer = HumanPlayer;
exports.getHumanElements = getHumanElements;
exports.deleteHuman = deleteHuman;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(2);

var _humanplayer = __webpack_require__(4);

var _computerplayer = __webpack_require__(3);

var _element = __webpack_require__(0);

var _player = __webpack_require__(1);

var elements = ['Fire', 'Earth', 'Lightning', 'Water'];

document.addEventListener("DOMContentLoaded", function () {
  var gameCanvas = document.getElementById('gameCanvas');
  var gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth * 0.98;
  gameCanvas.height = window.innerHeight * 0.98;

  var humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas);
  arrayOfPlayers[humanPlayer.id] = humanPlayer;
  generateComputerPlayers(gameContext, gameCanvas);

  function update() {
    requestAnimationFrame(update);
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    humanPlayer.changePosition();

    Object.values(arrayOfPlayers).forEach(function (cp) {
      cp.changePosition(humanPlayer.coordX, humanPlayer.coordY);
    });

    var els = void 0;

    var currentListOfElements = (0, _element.returnCurrentListOfElements)();
    if (currentListOfElements != undefined) {
      els = Object.values((0, _element.returnCurrentListOfElements)()).map(function (el) {
        if (el.lifeline > 0) {
          el.drawElement();
          return el;
        };
      });
    }
    checkPlayerCollisions();
    (0, _util.drawElements)(gameContext, gameCanvas, elements[humanPlayer.element]);
    generateGame(gameContext, gameCanvas);
  }

  update();
});

var arrayOfPlayers = {};

var generateGame = function generateGame(context, canvas) {
  (0, _util.drawOuterBorders)(context, canvas);
};

var generateComputerPlayers = function generateComputerPlayers(context, canvas) {
  for (var i = 0; i < 50; i++) {
    var cplayer = new _computerplayer.ComputerPlayer(context, canvas);
    for (var j = 0; j < Object.values(arrayOfPlayers).length; j++) {
      var x1 = Object.values(arrayOfPlayers)[j].coordX;
      var y1 = Object.values(arrayOfPlayers)[j].coordY;
      var x2 = cplayer.coordX;
      var y2 = cplayer.coordY;

      var xPow = Math.pow(x2 - x1, 2);
      var yPow = Math.pow(y2 - y1, 2);
      var distance = Math.sqrt(xPow + yPow);
      if (distance <= 26) {
        cplayer.generatePosition();
        j = -1;
      }
    }
    arrayOfPlayers[cplayer.id] = cplayer;
  }
};

var checkPlayerCollisions = function checkPlayerCollisions() {
  var arrOfPlayers = Object.values((0, _player.getAllPlayers)());
  for (var i = 0; i < arrOfPlayers.length; i++) {
    for (var j = 0; j < arrOfPlayers.length; j++) {
      if (i == j) {
        continue;
      } else {
        checkCollision(arrayOfPlayers[i], arrOfPlayers[j]);
      }
    }
  }
};

var checkCollision = function checkCollision(player1, player2) {
  var x1 = player1.coordX;
  var y1 = player1.coordY;
  var x2 = player2.coordX;
  var y2 = player2.coordY;

  var xPow = Math.pow(x2 - x1, 2);
  var yPow = Math.pow(y2 - y1, 2);
  var distance = Math.sqrt(xPow + yPow);

  var xVelDiff = player2.velocityX - player1.velocityX;
  var yVelDiff = player2.velocityY - player1.velocityY;
  var xDistDiff = player2.coordX - player1.coordX;
  var yDistDiff = player2.coordY - player1.coordY;

  if (distance <= 26) {
    var _xPow = Math.pow(x2 - x1, 2);
    var _yPow = Math.pow(y2 - y1, 2);
    var _distance = Math.sqrt(_xPow + _yPow);

    while (_distance <= 26) {
      player1.coordX -= 0.7 * player1.velocityX;
      player1.coordY -= 0.7 * player1.velocityY;
      player2.coordX -= 0.7 * player2.velocityX;
      player2.coordY -= 0.7 * player2.velocityY;
      _xPow = Math.pow(player2.coordX - player1.coordX, 2);
      _yPow = Math.pow(player2.coordY - player1.coordY, 2);
      _distance = Math.sqrt(_xPow + _yPow);
    }
    handleCollision(player1, player2);
  }
};

var handleCollision = function handleCollision(player1, player2) {
  var x1 = player1.coordX;
  var y1 = player1.coordY;

  var x2 = player2.coordX;
  var y2 = player2.coordY;

  var dx = x2 - x1;
  var dy = y2 - y1;

  var rotatedAngle = -Math.atan2(dy, dx);

  var u1 = rotate({ x: player1.velocityX, y: player1.velocityY }, rotatedAngle);
  var u2 = rotate({ x: player2.velocityX, y: player2.velocityY }, rotatedAngle);

  var v1 = { x: u2.x, y: u1.y };
  var v2 = { x: u1.x, y: u2.y };

  var finalVel1 = rotate(v1, -rotatedAngle);
  var finalVel2 = rotate(v2, -rotatedAngle);

  player1.velocityX = finalVel1.x;
  player1.velocityY = finalVel1.y;

  player2.velocityX = finalVel2.x;
  player2.velocityY = finalVel2.y;

  var xPow = Math.pow(player2.coordX - player1.coordX, 2);
  var yPow = Math.pow(player2.coordY - player1.coordY, 2);
  var distance = Math.sqrt(xPow + yPow);
};

var rotate = function rotate(velocity, angle) {
  var rotatedVelocities = {
    x: velocity.x * Math.cos(angle * (180 / Math.PI)) - velocity.y * Math.sin(angle * (180 / Math.PI)),
    y: velocity.x * Math.sin(angle * (180 / Math.PI)) + velocity.y * Math.cos(angle * (180 / Math.PI))
  };

  return rotatedVelocities;
};

var handleOverlap = function handleOverlap(player1, player2) {};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map