/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const game = (function () {\r\n  const _adjList = new Map()\r\n\r\n  const _knightChoices = [\r\n    [2, 1],\r\n    [1, 2],\r\n    [-1, 2],\r\n    [-2, 1],\r\n    [-2, -1],\r\n    [-1, -2],\r\n    [1, -2],\r\n    [2, -1],\r\n  ]\r\n\r\n  const _addVertex = (vertex) => {\r\n    if (!_adjList.has(vertex)) {\r\n      _adjList.set(vertex, [])\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < 8; i++) {\r\n    for (let j = 0; j < 8; j++) {\r\n      // convert arrays into strings before adding to the list\r\n      _addVertex([i, j].join(','))\r\n    }\r\n  }\r\n\r\n  const _addEdge = (start, target) => {\r\n    if (_adjList.has(start) && _adjList.has(target)) {\r\n      if (!_adjList.get(start).includes(target)) {\r\n        _adjList.get(start).push(target)\r\n      }\r\n      if (!_adjList.get(target).includes(start)) {\r\n        _adjList.get(target).push(start)\r\n      }\r\n    }\r\n  }\r\n\r\n  for (const key of _adjList.keys()) {\r\n    // key is a string as '1,1'\r\n    for (const move of _knightChoices) {\r\n      let destX = parseInt(key[0]) + move[0]\r\n      let destY = parseInt(key[2]) + move[1]\r\n\r\n      if (destX >= 0 && destX < 8 && destY >= 0 && destY < 8) {\r\n        _addEdge(key, [destX, destY].join(','))\r\n      }\r\n    }\r\n  }\r\n\r\n  return {\r\n    print: () => console.log(_adjList),\r\n    knightMoves: (start, end, graph = _adjList) => {\r\n      // return the shortest path between start and end vertices using bfs\r\n\r\n      start = start.join(',')\r\n      end = end.join(',')\r\n      if (!graph.has(start) || !graph.has(end)) return 'Invalid start or end'\r\n\r\n      const queue = [[start]]\r\n      const visited = new Set()\r\n\r\n      while (queue.length) {\r\n        const path = queue.shift()\r\n        const vertex = path[path.length - 1]\r\n\r\n        if (!visited.has(vertex)) {\r\n          visited.add(vertex)\r\n\r\n          if (vertex === end) {\r\n            console.log(\r\n              `You made it in ${path.length - 1} moves! Here's your path:`\r\n            )\r\n            return path.map((coord) => coord.split(',').map(Number))\r\n          }\r\n\r\n          for (const neighbor of graph.get(vertex)) {\r\n            const newPath = [...path, neighbor]\r\n            queue.push(newPath)\r\n          }\r\n        }\r\n      }\r\n\r\n      return null // no path found\r\n    },\r\n  }\r\n})()\r\n\r\nconsole.log(game.knightMoves([0, 0], [7, 6]))\r\n\n\n//# sourceURL=webpack://odin-knights-travails-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;