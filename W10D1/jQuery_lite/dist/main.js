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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n    constructor(array){\n        // the passed-in array is\n        // an array where each element is a node.\n\n        // Each node is an HTML DOM element.\n        this.array = array;\n    }\n\n    /*\n        If it receives an argument,\n        this will become the innerHTML of \n        each of the nodes.\n        If it does not receive an argument,\n        it should return the innerHTML of\n        the first node in the array.\n    */\n    html(str){\n        // optionally receive a string as a parameter.\n        // meaning that the str must be of type string.\n        // if str is not passed in, then str = undefined\n        if(str instanceof String){\n            \n            // HTML DOM \"innerHTML\" Property\n            for(let i =0; i<this.array.length;i++){\n                this.array[i].innerHTML = str;\n            }\n        }\n        else{\n            return this.array[0].innerHTML;\n        }\n    }\n\n    // clears out the content of all nodes in the internal array\n    empty(){\n        this.html(\"\");\n    }\n\n    append(obj){\n        if(obj instanceof jQuery\n            || obj instanceof HTMLElement\n            || obj instanceof String){\n            \n            for(let i = 0; i<obj.length;i++){\n                for(let j = 0; j<this.array.length; j++){\n                    this.array[i].innerHTML += obj[i];\n                }\n            }\n        }\n    }\n\n    // return a DOMNodeCollection\n    // of ALL children of all nodes in the array.\n    children(){\n        let arr = [];\n        for(let i =0; i<this.array.length;i++){\n            arr.push(this[i].children);\n        }\n        return new DOMNodeCollection([arr]);\n    }\n\n    parent(){\n        let arr = [];\n        for(let i =0; i<this.array.length;i++){\n            arr.push(this[i].parent);\n        }\n        return new DOMNodeCollection([arr]);\n    }\n\n\n    find(selector){\n        let arr = document.querySelectorAll(selector);\n        return new DOMNodeCollection([arr]);\n    }\n\n    remove(){\n        for(let i =0; i<this.array.length;i++){\n            this[i].remove();\n        }\n    }\n\n    \n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nwindow.$l = function(arg){\n    if(arg instanceof HTMLElement){\n        return new DOMNodeCollection([arg]);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });