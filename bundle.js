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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tag = __webpack_require__(1);

var _tag2 = _interopRequireDefault(_tag);

var _markupParser = __webpack_require__(3);

var _markupParser2 = _interopRequireDefault(_markupParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = new _markupParser2.default();
console.log('<header class=\"required\" id=\"name\"><input type=\"email\" placeholder=\"email\"></div> ');

parser.parseHtml('<header class=\"required\" id=\"name\"><input type=\"email\" placeholder=\"email\"></div> ');

var someTag = new _tag2.default();
someTag.setTagAttr({ data: "someData" }).setTagName("header").setTagContent("рабочий");
console.log(someTag.render);
var anotherTag = new _tag2.default("div", { class: "test", some: "pspsps" }, "content");
console.log(anotherTag.render);
var anotherTag2 = new _tag2.default("textarea", { some: "pspsps", pfpf: "ftftft" }, "content");
console.log(anotherTag2.render);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tag = function () {
    function Tag() {
        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
        var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        _classCallCheck(this, Tag);

        this._name = tagName;
        this._obj = obj;
        this._content = content;
    }

    _createClass(Tag, [{
        key: "setTagName",
        value: function setTagName(name) {
            this._name = name;
            return this;
        }
    }, {
        key: "setTagAttr",
        value: function setTagAttr(obj) {
            this._obj = obj;
            return this;
        }
    }, {
        key: "setTagContent",
        value: function setTagContent(content) {
            this._content = content;
            return this;
        }
    }, {
        key: "_validateTagName",
        value: function _validateTagName() {
            var tagPattern = /[0-9-_ ]+/;
            if (tagPattern.test(this._name)) {
                throw new Error("Not valid: " + this._name);
            }
        }
    }, {
        key: "_validateAttributes",
        value: function _validateAttributes() {
            var objPattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
            for (var key in this._obj) {
                if (!objPattern.test(key)) {
                    throw new Error("Not valid: " + key);
                }
            }
        }
    }, {
        key: "_exec",
        value: function _exec() {
            var singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
            var result = "<" + this._name;

            this._validateTagName();
            this._validateAttributes();

            var i = 0;
            for (var key in this._obj) {
                result += _utils2.default.formatted(" {" + i + "}" + "=" + "\"" + "{" + i + 1 + "}" + "\"", key, this._obj[key]);
                i++;
            }
            singleTagPattern.test(this._name) ? result += "/>" : result += ">" + this._content + "</" + this._name + ">";

            return result;
        }
    }, {
        key: "render",
        get: function get() {
            return this._exec();
        }
    }]);

    return Tag;
}();

exports.default = Tag;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = {

    formatted: function formatted(sourceString) {

        var source = sourceString;
        //количество скобок со значениями
        var counter = 0;
        var result = void 0;
        //поскольку псевдо-массив аргументов на самом деле является объектом, и не имеет соо-вующих методов
        //то приводим его к массиву
        var values = [];
        for (var i = 0; i < arguments.length; i++) {
            values[i] = arguments[i + 1];
        }
        //регулярное выражение ищет паттерн вида "{n}" - где n, любое число.
        result = source.replace(/\{\d+\}/g, function () {
            var result = values[counter];
            counter++;

            return result;
        });

        return result;
    }
};

exports.default = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MarkupParser = function () {
    function MarkupParser() {
        _classCallCheck(this, MarkupParser);
    }

    _createClass(MarkupParser, [{
        key: "parseHtml",
        value: function parseHtml(str) {
            var patternTag = /^<\w+/g;
            var patternObj = /\w+="\w+"/g;
            var result = "";

            var temp = str.search(/=/g);
            console.log(temp);
            var test = {};
            test.class = "background";
            console.log(test);
        }
    }]);

    return MarkupParser;
}();

exports.default = MarkupParser;

/***/ })
/******/ ]);