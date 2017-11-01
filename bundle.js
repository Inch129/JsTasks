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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(2);


//модель
let data = {
    name: "Evgeniy",
    lastname: "Borzunov",
    age: 23,
    developer: true
};
//еще модель
let data2 = {
    language: "Javascript",
    type: "Dynamical",
    oop: "prototypes",
    iscool: true
};

/*
    первым параметром передается имя требуемого тега
    вторым - модель, которые впоследствии будут атрибутами данного тега
    третий параметр является контентом, который будет содержанием в этом теге
 */
class Tag {
    constructor(tagName = "div", obj = {}, content = "") {
        this.name = tagName;
        this.obj = obj;
        this.content = content;
    }

    get render() {
        return this._exec();
    }

    _validateTagName() {
        let tagPattern = /[0-9-_ ]+/;
        if (tagPattern.test(this.name)) {
            throw new Error("Not valid: " + this.name);
        }
    }

    _validateAttributes() {
        let objPattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
        for (let key in this.obj) {
            if (!objPattern.test(key)) {
                throw new Error("Not valid: " + key);
            }

        }
    }

    _exec() {
        let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
        let result = "<" + this.name;

        this._validateTagName();
        this._validateAttributes();

        let i = 0;
        for (let key in this.obj) {
            result += __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* default */].formatted(" {" + i + "}" + "=" + "\"" + "{" + i + 1 + "}" + "\"", key, this.obj[key]);
            i++;
        }
        singleTagPattern.test(this.name) ? result += "/>" : result += ">" + this.content + "</" + this.name + ">";

        return result;
    }

}

let tag = new Tag("div", data, "Просто какой то текст");
console.log(tag.render);
let tag2 = new Tag("header", data2, "тест");
console.log(tag2.render);


/*
function tag(tagName="div", attributes={}, content="") {
    //для того, чтобы не изменять глобальный объект, переданный в функцию - создаем их копии.
    let name = tagName.toLowerCase();
    let obj = attributes;
    //без регулярных выражений было не обойтись - с их помощью производится валидация.
    let tagValidatePattern = /[0-9-_ ]+/;
    let objValidatePattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
    let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
    //форма для выходной строки, сформированной по заданному имени тега, атрибутам и контенту.
    let result = "<" + name;
    //простенькая валидация, которую в будущем, возможно - нужно будет дописать.
    validateTagName(name, tagValidatePattern);
    validateAttributes(obj, objValidatePattern);
    //присваиваем аттрибуты тегу в валидный хтмл вид.
    let i = 0;
    for (let key in obj) {
        let temp = Utils.formatted(" {"+ i +"}" + "=" +"\""+ "{"+i+1+"}"+"\"", key, obj[key]);
        result += temp;
        i++;
    }
    //поскольку в хтмл есть парные и одиночные теги - здесь происходит их фильтрация
    singleTagPattern.test(name) ? result += "/>" : result +=">" + content +"</"+name+">";


    return result;
}
*/


//вызываем
/*console.log(tag("div", data, tag("div", data2)));
console.log(tag("div", data, "Просто какой то текст"));
console.log(tag(), "тест без параметров");*/




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