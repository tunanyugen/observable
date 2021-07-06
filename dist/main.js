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

/***/ "./src/Observable.ts":
/*!***************************!*\
  !*** ./src/Observable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Observable = /** @class */ (function () {\n    function Observable(callback) {\n        var _this = this;\n        if (callback === void 0) { callback = null; }\n        this.observables = [];\n        this.getCallbackByRef = function () { return _this._callback; };\n        this.setCallback = function (callback) { _this._callback = callback; };\n        this.Add = function () {\n            var _a;\n            var observable = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                observable[_i] = arguments[_i];\n            }\n            (_a = _this.observables).push.apply(_a, observable);\n            return observable;\n        };\n        // execute all observables and callback\n        this.Resolve = function (parameter) {\n            // resolve all observables' callbacks\n            for (var o = 0; o < _this.observables.length; o++) {\n                _this.observables[o].Resolve(parameter);\n            }\n            // resolve self callback\n            if (_this._callback) {\n                return _this._callback(parameter);\n            }\n        };\n        this.setCallback(callback);\n    }\n    return Observable;\n}());\nexports.default = Observable;\n\n\n//# sourceURL=webpack://observable/./src/Observable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Observable = __webpack_require__(/*! ./Observable */ \"./src/Observable.ts\");\n\n\n//# sourceURL=webpack://observable/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;