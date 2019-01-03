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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/canvas.ts":
/*!************************!*\
  !*** ./libs/canvas.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar plugin_1 = __webpack_require__(/*! ../plugin */ \"./plugin.ts\");\nvar Plugin_Canvas = /** @class */ (function (_super) {\n    __extends(Plugin_Canvas, _super);\n    function Plugin_Canvas(options) {\n        var _this = _super.call(this) || this;\n        _this.lineWidth = 0.01;\n        _this.options = {\n            width: Number,\n            height: Number,\n            angle: Number,\n            gain: Number,\n            bgColor: String,\n            lineWidth: Number\n        };\n        _this.lineWidth = options.lineWidth;\n        _this.dom = document.createElement(\"div\");\n        _this.dom.width = options.width;\n        _this.dom.height = options.height;\n        _this.bgColor = options.bgColor || \"#fff\";\n        _this.dom.style.backgroundColor = options.bgColor;\n        return _this;\n    }\n    Plugin_Canvas.prototype.renderBgTable = function () {\n        var ctx = this.dom.getContext(\"2d\");\n        ctx.lineWidth = this.lineWidth;\n        var x_dis = this.dom.width / 10;\n        var y_dis = this.dom.height / 10;\n        for (var i = 0; i < this.dom.width; i += x_dis) {\n            for (var j = 0; j < this.dom.height; j += y_dis) {\n                ctx.moveTo(0, j);\n                ctx.lineTo(this.dom.width, j);\n                ctx.moveTo(i, 0);\n                ctx.lineTo(i, this.dom.height);\n            }\n        }\n        ctx.stroke();\n    };\n    return Plugin_Canvas;\n}(plugin_1.Plugin));\nexports.Plugin_Canvas = Plugin_Canvas;\n\n\n//# sourceURL=webpack:///./libs/canvas.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar canvas_1 = __webpack_require__(/*! ./libs/canvas */ \"./libs/canvas.ts\");\nvar Plugins;\n(function (Plugins) {\n    canvas_1.default;\n})(Plugins = exports.Plugins || (exports.Plugins = {}));\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./plugin.ts":
/*!*******************!*\
  !*** ./plugin.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Plugin = /** @class */ (function () {\n    function Plugin() {\n        this.width = 0;\n        this.height = 0;\n        this.angle = 0;\n        this.gain = 1.25;\n    }\n    Plugin.prototype.roll_left = function () {\n        this.angle -= 5;\n        this.dom.style.transform = \"rotate(\" + this.angle + \"deg)\";\n    };\n    Plugin.prototype.roll_right = function () {\n        this.angle += 5;\n        this.dom.style.transform = \"rotate(\" + this.angle + \"deg)\";\n    };\n    Plugin.prototype.zoom = function () {\n        this.dom.width *= this.gain;\n        this.dom.height *= this.gain;\n    };\n    Plugin.prototype.narrow = function () {\n        this.dom.width /= this.gain;\n        this.dom.height /= this.gain;\n    };\n    return Plugin;\n}());\nexports.Plugin = Plugin;\n\n\n//# sourceURL=webpack:///./plugin.ts?");

/***/ })

/******/ });