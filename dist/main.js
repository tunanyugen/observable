/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ts_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/Observable */ \"./src/ts/Observable.ts\");\n\nwindow.Observable = _ts_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar arg1 = \"ADHJKASHKD\";\nvar arg2 = 1231232154;\nvar a = new _ts_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"](function () { }, false);\nvar b = new _ts_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"](function (args) {\n    console.log(args);\n}, false);\na.AddObservable(b);\na.Resolve({ a1: arg1, a2: arg2 });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ts_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://observable/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Observable.ts":
/*!******************************!*\
  !*** ./src/ts/Observable.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Observable = /** @class */ (function () {\n    function Observable(callback, executeOnce) {\n        var _this = this;\n        if (callback === void 0) { callback = null; }\n        if (executeOnce === void 0) { executeOnce = true; }\n        this.observables = [];\n        this.getCallbackByRef = function () { return _this._callback; };\n        this.setCallback = function (callback) { _this._callback = callback; };\n        this.Add = function (callback, executeOnce) {\n            return _this.AddObservable(new Observable(callback, executeOnce));\n        };\n        this.AddObservable = function (observable) {\n            if (observable != _this) {\n                _this.observables.push(observable);\n                // remove observable from self array when it get disposed of\n                if (observable.onDispose) {\n                    observable.onDispose.AddObservable(new Observable(function () {\n                        _this.Remove(observable);\n                    }, true));\n                }\n                else {\n                    observable.onDispose = new Observable(function () {\n                        _this.Remove(observable);\n                    }, true);\n                }\n            }\n            else {\n                console.error(\"Cannot add observable to itself.\");\n            }\n            return _this;\n        };\n        this.Remove = function (observable) {\n            var index = _this.observables.indexOf(observable);\n            if (index >= 0) {\n                _this.observables.splice(index, 1);\n            }\n        };\n        // execute all observables and callback\n        this.Resolve = function (args) {\n            // resolve self callback\n            if (_this._callback) {\n                _this._callback(args);\n            }\n            // resolve all observables\n            for (var o = 0; o < _this.observables.length; o++) {\n                _this.observables[o].Resolve(args);\n            }\n            // dispose all executeOnce observables\n            for (var o = _this.observables.length - 1; o >= 0; o--) {\n                if (_this.observables[o].executeOnce) {\n                    _this.observables[o].Dispose(args);\n                }\n            }\n        };\n        this.Dispose = function (args) {\n            if (_this.onDispose) {\n                _this.onDispose.Resolve(args);\n            }\n            for (var i = 0; i < _this.observables.length; i++) {\n                _this.observables[i].Dispose(args);\n            }\n        };\n        this.setCallback(callback);\n        this.executeOnce = executeOnce;\n    }\n    return Observable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);\n\n\n//# sourceURL=webpack://observable/./src/ts/Observable.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});