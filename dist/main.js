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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/Observable */ \"./src/ts/Observable.ts\");\n\nwindow.Observable = _ts_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack://observable/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Observable.ts":
/*!******************************!*\
  !*** ./src/ts/Observable.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Observable = /** @class */ (function () {\n    function Observable(callback, executeOnce) {\n        var _this = this;\n        if (callback === void 0) { callback = null; }\n        this._observables = [];\n        this._executeOnce = true;\n        this.getCallbackByRef = function () { return _this._callback; };\n        this.setCallback = function (callback) { _this._callback = callback; };\n        this.Add = function (callback, executeOnce) {\n            return _this.AddObservable(new Observable(callback, executeOnce));\n        };\n        this.AddObservable = function (observable) {\n            if (observable != _this) {\n                _this._observables.push(observable);\n                // remove observable from self array when it get disposed of\n                if (observable.onDispose) {\n                    observable.onDispose.AddObservable(new Observable(function () { _this.Remove(observable); }, true));\n                }\n                else {\n                    observable.onDispose = new Observable(function () {\n                        _this.Remove(observable);\n                    }, true);\n                }\n            }\n            else {\n                console.error(\"Cannot add observable to itself.\");\n            }\n            return _this;\n        };\n        this.Remove = function (observable) {\n            var index = _this._observables.indexOf(observable);\n            if (index >= 0) {\n                _this._observables.splice(index, 1);\n            }\n        };\n        // execute all observables and callback\n        this.Resolve = function () {\n            // resolve all observables' callbacks\n            for (var o = 0; o < _this._observables.length; o++) {\n                _this._observables[o].Resolve();\n            }\n            // resolve self callback\n            if (_this._callback) {\n                return _this._callback();\n            }\n            if (_this._executeOnce) {\n                _this.Dispose();\n            }\n        };\n        this.Dispose = function () {\n            if (_this.onDispose) {\n                _this.onDispose.Resolve();\n            }\n            for (var i = 0; i < _this._observables.length; i++) {\n                _this._observables[i].Dispose();\n            }\n        };\n        this.setCallback(callback);\n        this._executeOnce = executeOnce;\n    }\n    return Observable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);\n\n\n//# sourceURL=webpack://observable/./src/ts/Observable.ts?");

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