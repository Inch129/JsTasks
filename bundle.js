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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag__ = __webpack_require__(1);


let someTag = new __WEBPACK_IMPORTED_MODULE_0__tag__["a" /* default */]();
someTag.setTagAttr({data: "someData"}).setTagName("header").setTagContent("рабочий");
console.log(someTag.render);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(2);


class Tag {
    constructor(tagName = "div", obj = {}, content = "") {
        this._name = tagName;
        this._obj = obj;
        this._content = content;
    }

    setTagName (name) {
        this._name = name;
        return this;
    }

    setTagAttr (obj) {
        this._obj = obj;
        return this;
    }

    setTagContent (content) {
        this._content = content;
        return this;
    }

    get render() {
        return this._exec();
    }

    _validateTagName() {
        let tagPattern = /[0-9-_ ]+/;
        if (tagPattern.test(this._name)) {
            throw new Error("Not valid: " + this._name);
        }
    }

    _validateAttributes() {
        let objPattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
        for (let key in this._obj) {
            if (!objPattern.test(key)) {
                throw new Error("Not valid: " + key);
            }

        }
    }

    _exec() {
        let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
        let result = "<" + this._name;

        this._validateTagName();
        this._validateAttributes();

        let i = 0;
        for (let key in this._obj) {
            result += __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* default */].formatted(" {" + i + "}" + "=" + "\"" + "{" + i + 1 + "}" + "\"", key, this._obj[key]);
            i++;
        }
        singleTagPattern.test(this._name) ? result += "/>" : result += ">" + this._content + "</" + this._name + ">";

        return result;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tag;







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Utils = {

    formatted: function (sourceString) {

        let source = sourceString;
        //количество скобок со значениями
        let counter = 0;
        let result;
        //поскольку псевдо-массив аргументов на самом деле является объектом, и не имеет соо-вующих методов
        //то приводим его к массиву
        let values = [];
        for (let i = 0; i < arguments.length; i++) {
            values[i] = arguments[i + 1];
        }
        //регулярное выражение ищет паттерн вида "{n}" - где n, любое число.
        result = source.replace(/\{\d+\}/g, function () {
            let result = values[counter];
            counter++;

            return result;
        });


        return result;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Utils);



/***/ })
/******/ ]);