var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var EnumPipe = /** @class */ (function () {
        /**
         * Pipe which transforms an enum definition to an array, e.g.
         * export enum gender {
         *     unknown = <any>"unknown",
         *     male = <any>"male",
         *     female = <any>"female",
         * }
         *
         * is transformed to
         * ["unknown", "male", "female"]
         * @param {string} value enum definition
         * @returns {string[]} array with enum values as strings
         */
        function EnumPipe() {
        }
        EnumPipe.prototype.transform = function (value, args) {
            var result = [];
            for (var property in value) {
                if (value.hasOwnProperty(property)) {
                    result.push(value[property]);
                }
            }
            //console.log('value', value, 'result', result);
            return result;
        };
        EnumPipe = __decorate([
            core_1.Pipe({ name: 'sfEnum' })
            /**
             * Pipe which transforms an enum definition to an array, e.g.
             * export enum gender {
             *     unknown = <any>"unknown",
             *     male = <any>"male",
             *     female = <any>"female",
             * }
             *
             * is transformed to
             * ["unknown", "male", "female"]
             * @param {string} value enum definition
             * @returns {string[]} array with enum values as strings
             */
        ], EnumPipe);
        return EnumPipe;
    }());
    exports.EnumPipe = EnumPipe;
});
//# sourceMappingURL=enum.pipe.js.map