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
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: \"endlessInterval\" is read-only\n\n\u001b[0m \u001b[90m 200 | \u001b[39m    destroyAllEnemyElements()\u001b[33m;\u001b[39m\n \u001b[90m 201 | \u001b[39m    humanPlayer \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mHumanPlayer\u001b[39m(gameContext\u001b[33m,\u001b[39m gameCanvas\u001b[33m,\u001b[39m humanSpritePng)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 202 | \u001b[39m    endlessInterval \u001b[33m=\u001b[39m setInterval(generatePlayers(gameContext\u001b[33m,\u001b[39m gameCanvas\u001b[33m,\u001b[39m fireSpritePng\u001b[33m,\u001b[39m earthSpritePng\u001b[33m,\u001b[39m lightningSpritePng\u001b[33m,\u001b[39m waterSpritePng\u001b[33m,\u001b[39m \u001b[35m1\u001b[39m)\u001b[33m,\u001b[39m \u001b[35m1000\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m     | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 203 | \u001b[39m    \u001b[90m// generatePlayers(gameContext, gameCanvas, fireSpritePng, earthSpritePng, lightningSpritePng, waterSpritePng, 1);\u001b[39m\n \u001b[90m 204 | \u001b[39m  })\u001b[33m;\u001b[39m\n \u001b[90m 205 | \u001b[39m\u001b[0m\n");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map