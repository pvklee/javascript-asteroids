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

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    COLOR: '#ccc',\n    RADIUS: 20,\n    SPEED: 1\n};\n\nfunction Asteroid(options){\n    options.game = options.game;\n    options.pos = options.pos;\n    options.vel = Util.randomVec(DEFAULTS.SPEED);\n    options.color = DEFAULTS.COLOR;\n    options.radius = DEFAULTS.RADIUS;\n    MovingObject.call(this, options);\n}\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(object){\n    if(object instanceof Ship){\n        object.relocate();\n    } else if(object instanceof Bullet){\n        this.game.remove(object);\n        this.game.remove(this);\n    }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nBullet.COLOR = 'red';\nBullet.RADIUS = 1;\nBullet.SPEED = 5;\n\nfunction Bullet(options){\n    options.color = Bullet.COLOR;\n    options.radius = Bullet.RADIUS;\n    MovingObject.call(this, options);\n}\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\")\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\n\nGame.DIM_X = 800;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 5;\nGame.BG_COLOR = 'black';\n\nfunction Game(){\n    this.asteroids = [];\n    this.ship = [];\n    this.bullets = [];\n    this.addAsteroids();\n};\n\nGame.prototype.randomPosition = function(){\n    let ranx = Math.random() * Game.DIM_X;\n    let rany = Math.random() * Game.DIM_Y;\n    return [ranx, rany];\n};\n\nGame.prototype.addAsteroids = function(){\n    for(let i=0; i< Game.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid({game: this, pos: this.randomPosition()}));\n    }\n};\n\nGame.prototype.addShip = function(){\n    newShip = new Ship({game: this, pos: this.randomPosition()})\n    this.ship.push(newShip);\n    return newShip;\n}\n\n\nGame.prototype.addBullet = function(bullet){\n    this.bullets.push(bullet);\n}\n\nGame.prototype.allObjects = function(){\n    return [].concat(this.asteroids, this.ship, this.bullets);\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0,0,Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(function(object){\n        object.draw(ctx);\n    });\n};\n\nGame.prototype.moveObjects = function(){\n    this.allObjects().forEach(function(object){\n        object.move();\n    });\n};\n\nGame.prototype.checkCollisions = function(){\n    allObjects = this.allObjects();\n    allObjects.slice(0,-1).forEach( function(object1, index) {\n        allObjects.slice(index+1).forEach( function(object2) {\n            if(object1.isCollidedWith(object2)){\n                object1.collideWith(object2);\n            };\n        });\n    });\n};\n\nGame.prototype.remove = function(object){\n    if(object instanceof Asteroid){\n        this.asteroids.splice(this.asteroids.indexOf(object), 1)\n    } else if(object instanceof Ship){\n        this.ship.splice(this.ship.indexOf(object), 1)\n    } else if(object instanceof Bullet){\n        this.bullets.splice(this.bullets.indexOf(object), 1)\n    };\n};\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.wrap = function(pos){\n    if (pos[0] < -15 || pos[0] > Game.DIM_X + 15){\n        pos[0] = Game.DIM_X - pos[0];\n    }\n    if (pos[1] < -15 || pos[1] > Game.DIM_Y + 15){\n        pos[1] = Game.DIM_Y - pos[1];\n    }\n    return pos;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction GameView(ctx){\n    this.game = new Game();\n    this.ctx = ctx;\n    this.ship = this.game.addShip();\n}\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0]\n}\n\nGameView.prototype.bindKeyHandlers = function(){\n    const ship = this.ship;\n    const game = this.game;\n    Object.keys(GameView.MOVES).forEach(function(k){\n        const move = GameView.MOVES[k];\n        key(k, function(){ship.power(move)});\n    });\n\n    key(\"space\", function () { ship.fireBullet(); });\n};\n\nGameView.prototype.start = function(){\n    this.bindKeyHandlers();\n    const game = this.game;\n    setInterval(function(){\n        game.step();\n        game.draw(this.ctx);\n    }, 20)\n}\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nwindow.GameView = GameView;\nwindow.Game = Game;\n\nwindow.addEventListener('DOMContentLoaded', function() {\n    canvas = document.getElementById('game-canvas');\n    ctx = canvas.getContext('2d');\n    canvas.height = Game.DIM_Y;\n    canvas.width = Game.DIM_X;\n\n    gameView = new GameView(ctx);\n    gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction MovingObject(options){\n    this.game = options.game;\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.strokeStyle = this.color;\n    ctx.lineWidth = 1;\n    ctx.stroke();\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    if(this.isWrappable){\n        this.pos = this.game.wrap(this.pos);\n    }\n    if(!this.isWrappable && this.isOutOfBounds()){\n        this.remove();\n    }\n}\n\nMovingObject.prototype.isOutOfBounds = function(){\n    return this.pos[0] < 0 || this.pos[1] < 0 || this.pos[0] > Game.Dim_X || this.pos[1] > Game.DIM_Y;\n}\n\n\nMovingObject.prototype.isCollidedWith = function(object){\n    return Util.distance(this.pos, object.pos) < (this.radius + object.radius);\n}\n\nMovingObject.prototype.collideWith = function(object){\n}\n\nMovingObject.prototype.remove = function(){\n    this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n    RADIUS: 10,\n    COLOR: 'blue'\n}\n\nfunction Ship(options){\n    options.game = options.game\n    options.pos = options.pos;\n    options.vel = [0,0];\n    options.color = DEFAULTS.COLOR;\n    options.radius = DEFAULTS.RADIUS;\n    MovingObject.call(this, options);\n}\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(){\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n}\n\nShip.prototype.power = function(impulse){\n    this.vel[0] += impulse[0] * .2;\n    this.vel[1] += impulse[1] * .2;\n}\n\nShip.prototype.fireBullet = function(){\n    let norm = Util.norm(this.vel);\n\n    if (norm === 0) {\n      // Can't fire unless moving.\n      return;\n    }\n\n    let relVel = Util.scale(\n        Util.directional(this.vel),\n        Bullet.SPEED\n    );\n\n    const bulletVel = [\n        relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n    ];\n    \n    let position = [this.pos[0], this.pos[1]];\n    let bullet = new Bullet({\n        pos: position,\n        vel: bulletVel,\n        game: this.game\n    });\n\n    this.game.addBullet(bullet);\n}\n\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass){\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    distance(pos1, pos2){\n        return Math.sqrt(\n            Math.pow(pos1[0]-pos2[0], 2)\n            + Math.pow(pos1[1]-pos2[1], 2)\n        );\n    },\n    norm(vec){\n        return Util.distance([0,0], vec);\n    },\n    directional(vec) {\n        const norm = Util.norm(vec);\n        return Util.scale(vec, 1 / norm);\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });