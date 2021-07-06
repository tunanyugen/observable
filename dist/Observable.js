"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable(callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.observables = [];
        this.getCallbackByRef = function () { return _this._callback; };
        this.setCallback = function (callback) { _this._callback = callback; };
        this.Add = function () {
            var _a;
            var observable = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                observable[_i] = arguments[_i];
            }
            (_a = _this.observables).push.apply(_a, observable);
            return observable;
        };
        // execute all observables and callback
        this.Resolve = function (parameter) {
            // resolve all observables' callbacks
            for (var o = 0; o < _this.observables.length; o++) {
                _this.observables[o].Resolve(parameter);
            }
            // resolve self callback
            if (_this._callback) {
                return _this._callback(parameter);
            }
        };
        this.setCallback(callback);
    }
    return Observable;
}());
exports.default = Observable;
