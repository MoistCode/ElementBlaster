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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerIds = 0;

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
  }, {
    key: 'checkForCollision',
    value: function checkForCollision() {}
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _element = __webpack_require__(4);

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var elements = ['Fire', 'Earth', 'Lightning', 'Water'];

var directions = ['up', 'down', 'left', 'right'];

var ComputerPlayer = function (_Player) {
  _inherits(ComputerPlayer, _Player);

  function ComputerPlayer(context, canvas) {
    _classCallCheck(this, ComputerPlayer);

    var _this = _possibleConstructorReturn(this, (ComputerPlayer.__proto__ || Object.getPrototypeOf(ComputerPlayer)).call(this, context, canvas));

    _this.velocityX = (Math.random() - 0.5) * 3 + 1;
    _this.velocityY = (Math.random() - 0.5) * 3 + 1;
    _this.shotDelay = Math.floor(Math.random() * 101);
    _this.initialDelay = _this.shotDelay;
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
        this.automatedShots(humanPosX, humanPosY);
        this.shotDelay = 0;
        this.currentElement = elements[Math.floor(Math.random() * 3)];
      }
    }
  }, {
    key: 'automatedShots',
    value: function automatedShots(humanPosX, humanPosY) {
      var compElement = elements[Math.floor(Math.random() * 4)];
      var compDirection = directions[Math.floor(Math.random() * 4)];
      new _element2.default(compDirection, this.coordX, this.coordY, this.context, this.canvas, compElement);
    }
  }, {
    key: 'calculateDodgePercentage',
    value: function calculateDodgePercentage() {}
  }, {
    key: 'calculateCounterPercentage',
    value: function calculateCounterPercentage() {}
  }, {
    key: 'checkCollision',
    value: function checkCollision() {}
  }]);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _element = __webpack_require__(4);

var _element2 = _interopRequireDefault(_element);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      if (this.el != undefined) {
        this.el.showListOfElements().forEach(function (element) {
          if (element == undefined) {
            return;
          } else {
            element.drawElement();
          }
        });
      }
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
            _this2.el = new _element2.default('up', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            break;
          case 'arrowdown':
            _this2.el = new _element2.default('down', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            break;
          case 'arrowleft':
            _this2.el = new _element2.default('left', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
            break;
          case 'arrowright':
            _this2.el = new _element2.default('right', _this2.coordX, _this2.coordY, _this2.context, _this2.canvas, elements[_this2.element]);
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
}(_player2.default);

exports.default = HumanPlayer;

/***/ }),
/* 4 */
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
    this.velocity = 3;
    this.lifeline = 70;
  }

  _createClass(Element, [{
    key: 'drawElement',
    value: function drawElement() {
      switch (this.direction) {
        case 'up':
          this.context.beginPath();
          this.context.arc(this.posX, this.posY - 13, 5, 0, Math.PI * 2);
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
          this.posY -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'down':
          this.context.beginPath();
          this.context.arc(this.posX, this.posY + 13, 5, 0, Math.PI * 2);
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
          this.posY += this.velocity;
          this.lifeline -= 1;
          break;
        case 'left':
          this.context.beginPath();
          this.context.arc(this.posX - 13, this.posY, 5, 0, Math.PI * 2);
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
          this.posX -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'right':
          this.context.beginPath();
          this.context.arc(this.posX + 13, this.posY, 5, 0, Math.PI * 2);
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

exports.default = Element;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(0);

var _humanplayer = __webpack_require__(3);

var _humanplayer2 = _interopRequireDefault(_humanplayer);

var _computerplayer = __webpack_require__(2);

var _computerplayer2 = _interopRequireDefault(_computerplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elements = ['Fire', 'Earth', 'Lightning', 'Water'];

document.addEventListener("DOMContentLoaded", function () {
  var gameCanvas = document.getElementById('gameCanvas');
  var gameContext = gameCanvas.getContext('2d');

  gameCanvas.width = window.innerWidth * 0.98;
  gameCanvas.height = window.innerHeight * 0.98;

  var humanPlayer = new _humanplayer2.default(gameContext, gameCanvas);
  arrayOfPlayers[humanPlayer.id] = humanPlayer;
  generateComputerPlayers(gameContext, gameCanvas);

  function update() {
    requestAnimationFrame(update);
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    humanPlayer.changePosition();
    Object.values(arrayOfPlayers).forEach(function (cp) {
      cp.changePosition(humanPlayer.coordX, humanPlayer.coordY);
    });

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
  for (var i = 0; i < 5; i++) {
    var cplayer = new _computerplayer2.default(context, canvas);
    arrayOfPlayers[cplayer.id] = cplayer;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map