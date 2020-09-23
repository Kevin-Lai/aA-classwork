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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Banana == MovingObject\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n// Asteroid({pos: [0,0]})\n\nfunction Asteroid(options){\n    // this.COLOR = \"orange\";\n    // this.RADIUS = 15;\n\n    // Surrogate has all of the ParentClass's functions\n\n    // this.prototype = Surrogate\n    // Surrogate.pos == ParentClass.pos\n\n    // this.prototype.prototype = Surrogate.prototype = Parent's Prototype\n    // this.pos = this.prototype.pos;\n\n    let newOptions = {\n        color: \"orange\",\n        radius: 15,\n        pos: options[\"pos\"],\n        vel: Util.randomVec(10),\n        game: options[\"game\"]\n    };\n\n    MovingObject.call(this, newOptions)\n    // Obj.func.call(context, args)\n    // new MovingObject(newOptions)\n}\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nfunction Game(){\n    this.DIM_X = 400;\n    this.DIM_Y = 400;\n    this.NUM_ASTEROIDS = 5;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship({pos: this.randomPosition(), game: this});\n}\n\nGame.prototype.randomPosition = function(){\n    // .random() => between 0 and 1\n    let x = Math.floor((Math.random() * this.DIM_X))\n    let y = Math.floor((Math.random() * this.DIM_Y))\n\n    return [x,y];\n}\n\nGame.prototype.addAsteroids = function(){\n    for(let i=0; i<this.NUM_ASTEROIDS;i++){\n        this.asteroids.push( new Asteroid( {pos: this.randomPosition(), game: this} ) )\n    }\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    for (let i = 0; i < this.allObjects.length; i++) {\n        this.allObjects[i].draw(ctx);        \n    }\n    // this.ship.draw(ctx);\n    // this.asteroids.forEach(ele => ele.draw(ctx));\n}\n\nGame.prototype.allObjects = function(){\n    return this.asteroids.concat(this.ship)\n}\n\nGame.prototype.moveObjects = function(){\n    for (let i = 0; i < this.allObjects.length; i++) {\n        this.allObjects[i].move();        \n    }\n    // this.asteroids.forEach(ele => ele.move());\n}\n\nGame.prototype.wrap = function(pos){\n    //if pos hits negative...\n    let wrappedPosX = pos[0];\n    let wrappedPosY = pos[1];\n\n    if (pos[0] < 0) {\n        wrappedPosX = 400;\n    }\n\n    if (pos[1] < 0) {\n        wrappedPosY = 400;\n    }\n\n    if (pos[0] > 400) {\n        wrappedPosX = 0;\n    }\n\n    if (pos[1] > 400) {\n        wrappedPosY = 0;\n    }\n\n    // let wrappedPosX = Math.abs(pos[0] % 400);\n    // let wrappedPosY = Math.abs(pos[1] % 400);\n    return [wrappedPosX, wrappedPosY]\n}\n\nGame.prototype.checkCollisions = function(){\n    // let ship = this.allObjects[this.allObjects.length -1 ]\n\n    for (let i = 0; i < this.allObjects.length - 1; i++) {\n        if(this.allObjects[i].collideWith(this.ship)){\n\n            break;\n        }\n    }\n\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid){\n    let removeIndex = this.allObjects.indexOf(asteroid);\n    // splice(startIndex,numberOfItemsToRemove)\n    // howmany\tOptional. The number of items to be removed. If set to 0, no items will be removed\n    this.asteroids.splice(removeIndex, 1);\n\n}\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx){\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    let that = this;\n\n    function startGame(){\n        that.game.step();\n        that.game.draw(that.ctx);\n    }\n\n    setInterval(startGame, 30);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// index.js\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\n\nwindow.addEventListener(\"DOMContentLoaded\",()=>{\n    // created 2 new variables to use on the console for index.\n    canvasElement = document.getElementById(\"canvas\")\n    ctx = canvasElement.getContext(\"2d\")\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// moving_object.js\nfunction MovingObject(options) {\n\n    this.pos = options[\"pos\"];\n    this.vel = options[\"vel\"];\n    this.radius = options[\"radius\"];\n    this.color = options[\"color\"];\n    this.game = options[\"game\"];\n}\n\nMovingObject.prototype.draw = function(ctx){\n    // Draw a circle of the appropriate radius centered at pos.\n    // Fill it with the appropriate color.\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n  \n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n    ctx.fill();\n}\n\n\nMovingObject.prototype.move = function(){\n    // Increment the pos by the vel.\n    //console.log(this);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    //let objectDistance = sqrt( (x2-x1)^2 + (y2-y1)^2 )\n    let objectDistance = Math.sqrt( (this.pos[0]-otherObject.pos[0]) ** 2 + (this.pos[1]-otherObject.pos[1]) ** 2 );\n    let radiiSum = this.radius + otherObject.radius;\n    if (objectDistance < radiiSum){\n        return true;\n    }\n    return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject){\n    if (this.isCollidedWith(otherObject)){\n        this.game.remove(otherObject);\n        // this.game.remove(this);\n        return true;\n    }\n    return false;\n}\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\nmodule.exports = MovingObject;\n\n// const mo = {\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// };\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Ship(options){\n    \n    options[\"color\"] = \"green\";\n    options[\"radius\"] = 5;\n    options[\"vel\"] = 0;\n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(){\n\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    // Sets up inheritance\n    inherits(childClass, parentClass) {\n      //...\n      function Surrogate (){};\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n\n};\n  \n  module.exports = Util;\n  \n//   module.exports = {\n//     Util,\n//     banana\n//   }\n  \n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });