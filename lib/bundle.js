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
    var human = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

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
    this.human = human;
  }

  _createClass(Element, [{
    key: 'drawElement',
    value: function drawElement() {
      switch (this.direction) {
        case 'up':
          this.context.beginPath();
          this.context.rect(this.posX - 13 / 2, this.posY - 40, 13, 13);
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
          this.context.arc(this.posX, this.posY - 40, 7, 0, Math.PI, true);
          this.context.fillStyle = 'white';
          this.context.fill();
          this.context.closePath();

          this.posY -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'down':
          this.context.beginPath();
          this.context.rect(this.posX - 13 / 2, this.posY + 40, 13, 13);
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
          this.context.arc(this.posX, this.posY + 52, 7, 0, Math.PI);
          this.context.fillStyle = 'white';
          this.context.fill();
          this.context.closePath();

          this.posY += this.velocity;
          this.lifeline -= 1;
          break;
        case 'left':
          this.context.beginPath();
          this.context.rect(this.posX - 40, this.posY - 13 / 2, 13, 13);
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
          this.context.arc(this.posX - 40, this.posY, 7, Math.PI / 2, 3 * Math.PI / 2);
          this.context.fillStyle = 'white';
          this.context.fill();
          this.context.closePath();

          this.posX -= this.velocity;
          this.lifeline -= 1;
          break;
        case 'right':
          this.context.beginPath();
          this.context.rect(this.posX + 40, this.posY - 13 / 2, 13, 13);
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
          this.context.arc(this.posX + 52, this.posY, 7, Math.PI / 2, 3 * Math.PI / 2, true);
          this.context.fillStyle = 'white';
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
      // if (
      //     (this.posX <= (625/1440) * this.canvas.width) &&
      //     (this.posY <= (115/810) * this.canvas.height)
      //   ) {
      //     this.velocity = -(this.velocity);
      if (this.posX >= 1440 / 1440 * this.canvas.width) {
        this.velocity = -this.velocity;
      } else if (this.posY <= 20 / 810 * this.canvas.height) {
        this.velocity = -this.velocity;
      } else if (this.posX <= 370 / 1440 * this.canvas.width) {
        this.velocity = -this.velocity;
      } else if (this.posY >= 810 / 810 * this.canvas.height) {
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

function destroyAllElements() {
  listOfElements = {};
}

exports.Element = Element;
exports.returnCurrentListOfElements = returnCurrentListOfElements;
exports.destroyAllElements = destroyAllElements;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyAllPlayers = exports.deletePlayer = exports.getAllPlayers = exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var playerIds = 0;
var players = {};

var Player = function () {
  function Player(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng) {
    _classCallCheck(this, Player);

    this.id = playerIds;
    playerIds += 1;
    this.color = (0, _util.getRandomColor)();
    this.canvas = canvas;
    this.context = context;
    this.generatePosition();
    // this.drawPlayer();
    players[this.id] = this;
  }

  //
  //
  // drawPlayer() {
  //   this.context.beginPath();
  //   this.context.arc(this.coordX, this.coordY, 13, 0, Math.PI * 2, false);
  //   this.context.fillStyle = `#${this.color}`;
  //   this.context.fill();
  //   this.context.closePath();
  // }

  _createClass(Player, [{
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
      } else if (this.coordX >= 1420 / 1440 * this.canvas.width) {
        this.velocityX = -(Math.random() * 3 + 1);
      } else if (this.coordY <= 15 / 810 * this.canvas.height) {
        this.velocityY = Math.random() * 3 + 1;
      } else if (this.coordX <= 343 / 1440 * this.canvas.width) {
        this.velocityX = Math.random() * 3 + 1;
      } else if (this.coordY >= 725 / 810 * this.canvas.height) {
        this.velocityY = -(Math.random() * 3 + 1);
      }
    }
  }]);

  return Player;
}();

var getAllPlayers = function getAllPlayers() {
  return players;
};

var deletePlayer = function deletePlayer(id) {
  delete players[id];
};

var destroyAllPlayers = function destroyAllPlayers() {
  players = {};
};

exports.Player = Player;
exports.getAllPlayers = getAllPlayers;
exports.deletePlayer = deletePlayer;
exports.destroyAllPlayers = destroyAllPlayers;

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
  drawTitle(context, canvas);
  drawRulesBorder(context, canvas);
  drawSettingsBorder(context, canvas);
  // drawElementPowerBorder(context, canvas)
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
  context.lineWidth = '5';
  context.rect(330 / 1440 * canvas.width, 2 / 810 * canvas.height, 1110 / 1440 * canvas.width, 808 / 810 * canvas.height);
  context.fillStyle = 'rgba(200, 255, 255, 0.1)';
  context.fill();
  context.stroke();
  context.closePath();
}

function drawRightSide(context, canvas) {
  context.beginPath();
  context.lineWidth = '5';
  context.rect(10 / 1440 * canvas.width, 0 / 810 * canvas.height, 310 / 1440 * canvas.width, 735 / 810 * canvas.height);
  context.fillStyle = 'rgba(200, 255, 255, 0.1)';
  context.fill();
  context.closePath();
}

function drawTitle(context, canvas) {
  context.beginPath();
  context.lineWidth = '1';
  context.fillStyle = '#' + getRandomColor();
  context.fill();
  context.closePath();
  context.font = 'italic bold 41px arcade';
  context.fillText('ELEMENT', 25 / 1440 * canvas.width, 41 / 810 * canvas.height);
  context.fillText('BLASTER', 140 / 1440 * canvas.width, 80 / 810 * canvas.height);
  context.closePath();
}

function drawRulesBorder(context, canvas) {
  context.font = '23px arcade';
  context.fillStyle = 'white';
  context.fillText('Instructions', 100 / 1440 * canvas.width, 112 / 810 * canvas.height);

  var fontSize = Math.ceil(15 * (canvas.height / canvas.width * (1440 / 810)));
  context.font = fontSize + 'px arcade';

  context.fillText('1. Shoot other circles.', 40 / 1440 * canvas.width, 140 / 810 * canvas.height);
  context.fillText('2. Dodge incoming projectiles', 40 / 1440 * canvas.width, 160 / 810 * canvas.height);
  context.fillText('3. Only bullets with the right element', 40 / 1440 * canvas.width, 180 / 810 * canvas.height);
  context.fillText('will eliminate the enemy.', 55 / 1440 * canvas.width, 198 / 810 * canvas.height);
}

function drawSettingsBorder(context, canvas) {
  context.beginPath();
  context.strokeStyle = '#' + getRandomColor();
  context.lineWidth = 5;
  context.strokeRect(36 / 1440 * canvas.width, 570 / 810 * canvas.height, 260 / 1440 * canvas.width, 159 / 810 * canvas.height);
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

function drawElements(context, canvas, element, firePng, earthPng, lightningPng, waterPng) {

  switch (element) {
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

function drawFireElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var firePng = arguments[3];

  context.drawImage(firePng, 340 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(340 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.strokeStyle = 'red';
    context.stroke();
    context.closePath();
  }
}

function drawEarthElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var earthPng = arguments[3];

  context.drawImage(earthPng, 390 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  context.drawImage(earthPng, 390 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(390 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.strokeStyle = '#7B1803';
    context.stroke();
    context.closePath();
  }
}

function drawLightningElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var lightningPng = arguments[3];

  context.drawImage(lightningPng, 440 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(440 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.strokeStyle = '#F5EE10';
    context.stroke();
    context.closePath();
  }
}

function drawWaterElement(context, canvas) {
  var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var waterPng = arguments[3];

  context.drawImage(waterPng, 490 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
  if (highlight) {
    context.beginPath();
    context.lineWidth = '3';
    context.strokeRect(490 / 1440 * canvas.width, 6 / 810 * canvas.height, 40 / 1440 * canvas.width, 40 / 810 * canvas.height);
    context.strokeStyle = 'blue';
    context.stroke();
    context.closePath();
  }
}

var drawInstructions = exports.drawInstructions = function drawInstructions(context, canvas, instructionPng, movementPng) {
  var fontSize = Math.ceil(15 * (canvas.height / canvas.width * (1440 / 810)));

  context.drawImage(instructionPng, 90 / 1440 * canvas.width, 330 / 810 * canvas.height, 150 / 1440 * canvas.width, 230 / 810 * canvas.height);

  context.drawImage(movementPng, 55 / 1440 * canvas.width, 215 / 810 * canvas.height, 220 / 1440 * canvas.width, 65 / 810 * canvas.height);

  context.beginPath();
  context.font = fontSize + 'px arcade';
  context.fillText('Move', 84 / 1440 * canvas.width, 305 / 810 * canvas.height);
  context.fillText('Shoot', 210 / 1440 * canvas.width, 305 / 810 * canvas.height);
  context.closePath();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyAllEnemyElements = exports.deleteComputer = exports.getEnemyElements = exports.ComputerPlayer = undefined;

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

  function ComputerPlayer(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng) {
    _classCallCheck(this, ComputerPlayer);

    var _this = _possibleConstructorReturn(this, (ComputerPlayer.__proto__ || Object.getPrototypeOf(ComputerPlayer)).call(this, context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng));

    _this.velocityX = (Math.random() - 0.5) * 3 + 1;
    _this.velocityY = (Math.random() - 0.5) * 3 + 1;
    _this.shotDelay = Math.floor(Math.random() * 1001);
    _this.currentElement = elements[Math.floor(Math.random() * 4)];
    _this.fireSpritePng = fireSpritePng;
    _this.earthSpritePng = earthSpritePng;
    _this.lightningSpritePng = lightningSpritePng;
    _this.waterSpritePng = waterSpritePng;
    _this.context = context;
    return _this;
  }

  _createClass(ComputerPlayer, [{
    key: 'changePosition',
    value: function changePosition() {
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
      this.drawElementalSprites();
      this.shotDelay += 2;
      if (this.shotDelay >= 100) {
        this.automatedShots();
        this.shotDelay = 0;
      }
    }
  }, {
    key: 'drawElementalSprites',
    value: function drawElementalSprites() {
      switch (this.currentElement) {
        case 'Fire':
          this.context.drawImage(this.fireSpritePng, this.coordX - 20, this.coordY, 50, 50);
          break;
        case 'Water':
          this.context.drawImage(this.waterSpritePng, this.coordX - 20, this.coordY, 50, 50);
          break;
        case 'Earth':
          this.context.drawImage(this.earthSpritePng, this.coordX - 20, this.coordY, 50, 50);
          break;
        case 'Lightning':
          this.context.drawImage(this.lightningSpritePng, this.coordX - 20, this.coordY, 50, 50);
          break;
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

function destroyAllEnemyElements() {
  listOfEnemyElements = {};
}

exports.ComputerPlayer = ComputerPlayer;
exports.getEnemyElements = getEnemyElements;
exports.deleteComputer = deleteComputer;
exports.destroyAllEnemyElements = destroyAllEnemyElements;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyAllHumanElements = exports.deleteHuman = exports.getHumanElements = exports.HumanPlayer = undefined;

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

  function HumanPlayer(context, canvas, humanSpritePng) {
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
    _this.alive = true;
    _this.humanSpritePng = humanSpritePng;
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
        return _this2.keyDownHandler(event);
      });
    }
  }, {
    key: 'addKeyUpEvents',
    value: function addKeyUpEvents() {
      var _this3 = this;

      document.addEventListener('keyup', function (event) {
        return _this3.keyUpHandler(event);
      });
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler(event) {
      if (this.alive) {
        switch (event.key.toLowerCase()) {
          case 'w':
            this.movementBool.up = false;
            break;
          case 'a':
            this.movementBool.left = false;
            break;
          case 's':
            this.movementBool.down = false;
            break;
          case 'd':
            this.movementBool.right = false;
            break;
        }
      }
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(event) {
      if (this.alive) {
        switch (event.key.toLowerCase()) {
          case 'w':
            this.movementBool.up = true;
            break;
          case 'a':
            this.movementBool.left = true;
            break;
          case 's':
            this.movementBool.down = true;
            break;
          case 'd':
            this.movementBool.right = true;
            break;
          case 'q':
            this.element -= 1;
            if (this.element < 0) {
              this.element = 3;
            }
            break;
          case 'e':
            this.element += 1;
            if (this.element > 3) {
              this.element = 0;
            }
            break;
          case 'arrowup':
            this.el = new _element.Element('up', this.coordX, this.coordY, this.context, this.canvas, elements[this.element], true);
            listOfHumanElements[this.el.id] = this.el;
            break;
          case 'arrowdown':
            this.el = new _element.Element('down', this.coordX, this.coordY, this.context, this.canvas, elements[this.element], true);
            listOfHumanElements[this.el.id] = this.el;
            break;
          case 'arrowleft':
            this.el = new _element.Element('left', this.coordX, this.coordY, this.context, this.canvas, elements[this.element], true);
            listOfHumanElements[this.el.id] = this.el;
            break;
          case 'arrowright':
            this.el = new _element.Element('right', this.coordX, this.coordY, this.context, this.canvas, elements[this.element], true);
            listOfHumanElements[this.el.id] = this.el;
            break;
        }
      }
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      var _this4 = this;

      document.removeEventListener('keydown', function (event) {
        return _this4.keyDownHandler(event);
      });
      document.removeEventListener('keyup', function (event) {
        return _this4.keyUpHandler(event);
      });
    }
  }, {
    key: 'drawCurrentLocation',
    value: function drawCurrentLocation() {
      switch (elements[this.element]) {
        case 'Fire':
          this.context.beginPath();
          this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
          this.context.fillStyle = 'red';
          this.context.fill();
          this.context.closePath();
          break;
        case 'Earth':
          this.context.beginPath();
          this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
          this.context.fillStyle = '#ac6b25';
          this.context.fill();
          this.context.closePath();
          break;
        case 'Lightning':
          this.context.beginPath();
          this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
          this.context.fillStyle = 'yellow';
          this.context.fill();
          this.context.closePath();
          break;
        case 'Water':
          this.context.beginPath();
          this.context.arc(this.coordX, this.coordY, 29, 0, Math.PI * 2, false);
          this.context.fillStyle = 'blue';
          this.context.fill();
          this.context.closePath();
          break;
      }

      this.context.drawImage(this.humanSpritePng, this.coordX - 25, this.coordY - 25, 50, 50);
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
      } else if (this.coordX <= 375 / 1440 * this.canvas.width) {
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

function destroyAllHumanElements() {
  listOfHumanElements = {};
}

exports.HumanPlayer = HumanPlayer;
exports.getHumanElements = getHumanElements;
exports.deleteHuman = deleteHuman;
exports.destroyAllHumanElements = destroyAllHumanElements;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

  var imagesLoaded = 0;

  var firePng = new Image();
  firePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/fire.png';
  firePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var earthPng = new Image();
  earthPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/earth.png';
  earthPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var lightningPng = new Image();
  lightningPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/lightning.png';
  lightningPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var waterPng = new Image();
  waterPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/water.png';
  waterPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var explosionPng = new Image();
  explosionPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/explosion.png';
  explosionPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var fireSpritePng = new Image();
  fireSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/fireSprite.png';
  fireSpritePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var earthSpritePng = new Image();
  earthSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/earthSprite.png';
  earthSpritePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var lightningSpritePng = new Image();
  lightningSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/lightningSprite.png';
  lightningSpritePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var waterSpritePng = new Image();
  waterSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/waterSprite.png';
  waterSpritePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var humanSpritePng = new Image();
  humanSpritePng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/human.png';
  humanSpritePng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var instructionPng = new Image();
  instructionPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/instruct.png';
  instructionPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var movementPng = new Image();
  movementPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/movement.png';
  movementPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var gameoverPng = new Image();
  gameoverPng.src = 'https://raw.githubusercontent.com/MoistCode/BallBlaster/gh-pages/assets/images/gameover.png';
  gameoverPng.onload = function () {
    imagesLoaded += 1;
    update(imagesLoaded);
  };

  var humanPlayer = void 0;
  var generated = false;
  var start = false;
  var endlessInterval = setInterval(function () {
    return generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
  }, 1000);
  clearInterval(endlessInterval);

  var restartButton = document.getElementById('restart-button');
  restartButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
  });

  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function () {
    restartButton.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
    start = true;
  });

  var easyButton = document.getElementById('easy-button');
  easyButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
  });

  var mediumButton = document.getElementById('medium-button');
  mediumButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 2);
  });

  var hardButton = document.getElementById('hard-button');
  hardButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 4);
  });

  var extremeButton = document.getElementById('extreme-button');
  extremeButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 10);
  });

  var endlessButton = document.getElementById('endless-button');
  endlessButton.addEventListener('click', function () {
    clearInterval(endlessInterval);
    humanPlayer.alive = false;
    (0, _player.destroyAllPlayers)();
    (0, _element.destroyAllElements)();
    (0, _humanplayer.destroyAllHumanElements)();
    (0, _computerplayer.destroyAllEnemyElements)();
    humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
    generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
    endlessInterval = setInterval(function () {
      return generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
    }, 5000);
  });

  function update(imagesLoaded) {
    if (imagesLoaded >= 12 && !generated && start) {
      humanPlayer = new _humanplayer.HumanPlayer(gameContext, gameCanvas, humanSpritePng);
      generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);
      generated = true;
    }

    if (imagesLoaded >= 12) {
      requestAnimationFrame(update);
      gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      gameContext.beginPath();
      gameContext.rect(0, 0, gameCanvas.width, gameCanvas.height);
      gameContext.fillStyle = 'white';
      gameContext.fill();
      gameContext.closePath();
      if (humanPlayer != undefined && !humanPlayer.alive) {
        generateGame(gameContext, gameCanvas);
        generateGameover(gameContext, gameCanvas, gameoverPng);
      }
      if (Object.values((0, _player.getAllPlayers)())[0] instanceof _humanplayer.HumanPlayer) {
        Object.values((0, _player.getAllPlayers)()).forEach(function (player) {
          player.changePosition();
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
          (0, _util.drawElements)(gameContext, gameCanvas, elements[humanPlayer.element], firePng, earthPng, lightningPng, waterPng);
          // generateGame(gameContext, gameCanvas);
        }

        if (Object.values((0, _player.getAllPlayers)()).length > 1) {
          checkPlayerCollisions();
          checkElementCollisions(els, Object.values((0, _player.getAllPlayers)()), explosionPng, gameContext);
        }
      }
      generateGame(gameContext, gameCanvas);
    }
    (0, _util.drawInstructions)(gameContext, gameCanvas, instructionPng, movementPng);
  }
});

var generateGameover = function generateGameover(context, canvas, gameoverPng) {
  context.drawImage(gameoverPng, 330 / 1440 * canvas.width, 5 / 810 * canvas.height, 1105 / 1440 * canvas.width, 803 / 810 * canvas.height);
};

var arrayOfPlayers = {};

var generateGame = function generateGame(context, canvas) {
  (0, _util.drawOuterBorders)(context, canvas);
};

var checkElementCollisions = function checkElementCollisions(els, players, explosionPng, context) {

  for (var i = 0; i < els.length; i++) {
    for (var j = 0; j < players.length; j++) {
      if ((els[i].human == true && !(players[j] instanceof _humanplayer.HumanPlayer) || els[i].human == false && players[j] instanceof _humanplayer.HumanPlayer) && players[j].coordX < els[i].posX + 20 && players[j].coordX > els[i].posX - 20 && players[j].coordY < els[i].posY + 20 && players[j].coordY > els[i].posY - 20) {
        if (players[j] instanceof _humanplayer.HumanPlayer) {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          players[j].alive = false;
          (0, _player.deletePlayer)(players[j].id);
        } else if (els[i].element == 'Fire' && players[j].currentElement == 'Earth') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          (0, _player.deletePlayer)(players[j].id);
        } else if (els[i].element == 'Earth' && players[j].currentElement == 'Lightning') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          (0, _player.deletePlayer)(players[j].id);
        } else if (els[i].element == 'Lightning' && players[j].currentElement == 'Water') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          (0, _player.deletePlayer)(players[j].id);
        } else if (els[i].element == 'Water' && players[j].currentElement == 'Fire') {
          generateExplosion(explosionPng, players[j].coordX, players[j].coordY, context);
          (0, _player.deletePlayer)(players[j].id);
        }
      }
    }
  }
};

var generateExplosion = function generateExplosion(explosionPng, posX, posY, context) {
  var timer = 0;

  var _loop = function _loop(i) {
    var _loop2 = function _loop2(j) {
      if (i == 5 && j >= 4) {
        return {
          v: {
            v: void 0
          }
        };
      } else if (i == 0) {
        timer += 300;
        setTimeout(function () {
          context.drawImage(explosionPng, 1 / j * (200 / 11), 0, 200 / 11, 200 / 11, posX, posY, 200 / 11, 200 / 11);
        }, timer);
      } else if (j == 0) {
        timer += 300;
        setTimeout(function () {
          context.drawImage(explosionPng, 0, 1 / i * (200 / 11), 200 / 11, 200 / 11, posX, posY, 200 / 11, 200 / 11);
        }, timer);
      } else {
        timer += 300;
        setTimeout(function () {
          context.drawImage(explosionPng, 1 / j * (200 / 11), 1 / i * (200 / 11), 200 / 11, 200 / 11, posX, posY, 200 / 11, 200 / 11);
        }, timer);
      }
    };

    for (var j = 0; j < 6; j++) {
      var _ret2 = _loop2(j);

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }
  };

  for (var i = 0; i < 6; i++) {
    var _ret = _loop(i);

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
};

var generatePlayers = function generatePlayers(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, difficulty) {
  console.log('yeah');
  for (var i = 0; i < difficulty; i++) {
    console.log('yeah');
    var cplayer = new _computerplayer.ComputerPlayer(context, canvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng);
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
  }
};

var checkPlayerCollisions = function checkPlayerCollisions() {
  var arrOfPlayers = Object.values((0, _player.getAllPlayers)());
  if (arrOfPlayers.length < 2) {
    return;
  }
  for (var i = 0; i < arrOfPlayers.length; i++) {
    for (var j = 0; j < arrOfPlayers.length; j++) {
      if (i == j) {
        continue;
      } else {
        checkCollision(arrOfPlayers[i], arrOfPlayers[j]);
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
    handleOverlap(player1, player2);
  }
};

var handleOverlap = function handleOverlap(player1, player2) {
  var xPow = Math.pow(player2.coordX - player1.coordX, 2);
  var yPow = Math.pow(player2.coordY - player1.coordY, 2);
  var distance = Math.sqrt(xPow + yPow);
  while (distance <= 26) {
    player1.coordX -= 2 / 3 * player1.velocityX;
    player1.coordY -= 2 / 3 * player1.velocityY;
    player2.coordX -= 2 / 3 * player2.velocityX;
    player2.coordY -= 2 / 3 * player2.velocityY;
    xPow = Math.pow(player2.coordX - player1.coordX, 2);
    yPow = Math.pow(player2.coordY - player1.coordY, 2);
    distance = Math.sqrt(xPow + yPow);
  }
  handleCollision(player1, player2);
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map