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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Observable_1 = __importDefault(__webpack_require__(/*! ./ts/Observable */ \"./src/ts/Observable.ts\"));\nObservable_1.default;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Observable.ts":
/*!******************************!*\
  !*** ./src/ts/Observable.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Observable = /** @class */ (function () {\n    function Observable(callback, executeOnce) {\n        var _this = this;\n        if (callback === void 0) { callback = null; }\n        this._observables = [];\n        this._executeOnce = true;\n        this.getCallbackByRef = function () { return _this._callback; };\n        this.setCallback = function (callback) { _this._callback = callback; };\n        this.Add = function (callback, executeOnce) {\n            return _this.AddObservable(new Observable(callback, executeOnce));\n        };\n        this.AddObservable = function (observable) {\n            if (observable != _this) {\n                _this._observables.push(observable);\n                // remove observable from self array when it get disposed of\n                if (observable.onDispose) {\n                    observable.onDispose.AddObservable(new Observable(function () { _this.Remove(observable); }, true));\n                }\n                else {\n                    observable.onDispose = new Observable(function () {\n                        _this.Remove(observable);\n                    }, true);\n                }\n            }\n            else {\n                console.error(\"Cannot add observable to itself.\");\n            }\n            return _this;\n        };\n        this.Remove = function (observable) {\n            var index = _this._observables.indexOf(observable);\n            if (index >= 0) {\n                _this._observables.splice(index, 1);\n            }\n        };\n        // execute all observables and callback\n        this.Resolve = function () {\n            // resolve all observables' callbacks\n            for (var o = 0; o < _this._observables.length; o++) {\n                _this._observables[o].Resolve();\n            }\n            // resolve self callback\n            if (_this._callback) {\n                return _this._callback();\n            }\n            if (_this._executeOnce) {\n                _this.Dispose();\n            }\n        };\n        this.Dispose = function () {\n            if (_this.onDispose) {\n                _this.onDispose.Resolve();\n            }\n            for (var i = 0; i < _this._observables.length; i++) {\n                _this._observables[i].Dispose();\n            }\n        };\n        this.setCallback(callback);\n        this._executeOnce = executeOnce;\n    }\n    return Observable;\n}());\nexports[\"default\"] = Observable;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/ts/Observable.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;