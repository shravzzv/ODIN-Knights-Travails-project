/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/graph.js":
/*!******************************!*\
  !*** ./src/classes/graph.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Graph: () => (/* binding */ Graph)\n/* harmony export */ });\nclass Graph {\r\n  constructor() {\r\n    this.adjList = new Map()\r\n  }\r\n\r\n  addVertex(vertex) {\r\n    if (!this.adjList.has(vertex)) {\r\n      this.adjList.set(`${vertex}`, [])\r\n    }\r\n  }\r\n\r\n  addEdge(src, dest) {\r\n    if (!this.adjList.has(src) || !this.adjList.has(dest)) {\r\n      // console.error('Invalid vertex')\r\n      return\r\n    }\r\n\r\n    if (!this.adjList.get(src).includes(dest)) {\r\n      this.adjList.get(src).push(dest)\r\n    } else {\r\n      // console.error('Edge already exists')\r\n    }\r\n\r\n    // since the graph is undirected, add an edge from dest to src also\r\n    if (!this.adjList.get(dest).includes(src)) {\r\n      this.adjList.get(dest).push(src)\r\n    } else {\r\n      // console.error('Edge already exists')\r\n    }\r\n  }\r\n\r\n  doBFS(startingVertex, fn = null) {\r\n    if (!this.adjList.has(startingVertex)) {\r\n      console.error('Invalid starting vertex')\r\n      return\r\n    }\r\n\r\n    const visited = {}\r\n    visited[startingVertex] = true\r\n    const queue = []\r\n    queue.push(startingVertex)\r\n\r\n    while (queue.length > 0) {\r\n      let vertex = queue.shift()\r\n      fn ? fn(vertex) : console.log(vertex)\r\n\r\n      const adjacents = this.adjList.get(vertex)\r\n\r\n      for (let adjacent of adjacents) {\r\n        if (!visited[adjacent]) {\r\n          visited[adjacent] = true\r\n          queue.push(adjacent)\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  print() {\r\n    console.log(this.adjList)\r\n  }\r\n\r\n  knightMoves(start, end) {\r\n    console.log(start + ' ' + end)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-knights-travails-project/./src/classes/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/graph */ \"./src/classes/graph.js\");\n\r\n\r\nconst gameBoard = new _classes_graph__WEBPACK_IMPORTED_MODULE_0__.Graph()\r\n\r\n// add all vertices\r\nfor (let i = 0; i < 8; i++) {\r\n  for (let j = 0; j < 8; j++) {\r\n    let key = [i, j]\r\n    gameBoard.addVertex(key)\r\n  }\r\n}\r\n\r\nconst knightChoices = [\r\n  [2, 1],\r\n  [1, 2],\r\n  [-1, 2],\r\n  [-2, 1],\r\n  [-2, -1],\r\n  [-1, -2],\r\n  [1, -2],\r\n  [2, -1],\r\n]\r\n\r\n// add all edges\r\nfor (const key of gameBoard.adjList.keys()) {\r\n  for (const move of knightChoices) {\r\n    let destX = parseInt(key[0]) + parseInt(move[0])\r\n    let destY = parseInt(key[2]) + parseInt(move[1])\r\n\r\n    if (destX >= 0 && destX < 8 && destY >= 0 && destY < 8) {\r\n      let destination = `${destX},${destY}`\r\n      gameBoard.addEdge(key, destination)\r\n    }\r\n  }\r\n}\r\n\r\ngameBoard.print()\r\ngameBoard.doBFS('5,5')\r\n\r\ngameBoard.knightMoves('1,1', '5,4')\r\n\n\n//# sourceURL=webpack://odin-knights-travails-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;