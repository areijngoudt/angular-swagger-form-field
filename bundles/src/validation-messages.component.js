var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '@angular/forms', './validation-messages'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var forms_1 = require('@angular/forms');
    var validation_messages_1 = require('./validation-messages');
    var ValidationMessagesComponent = (function () {
        function ValidationMessagesComponent() {
        }
        Object.defineProperty(ValidationMessagesComponent.prototype, "errorMessage", {
            /**
             * Determine if the attached control has at least one validation error. If so, get the belonging validation message, fill in its placeholders and return it.
             * @returns {string} the composed validation message which belongs to the first validation error.
             */
            get: function () {
                if (this.control) {
                    //console.log('ValidationMessagesComponent.errorMessage: control.validator=' + this.control.validator + '\n control.value=' + this.control.value + '\n control.errors=', this.control.errors);
                    for (var propertyName in this.control.errors) {
                        // If control has a error
                        if (this.control.errors.hasOwnProperty(propertyName)) {
                            // get the validation message for the error type 
                            var message = validation_messages_1.ValidationMessages.getValidatorErrorMessage(propertyName);
                            // fill required and actual values based on the error type
                            var required = void 0;
                            var actual = void 0;
                            if (propertyName === 'pattern') {
                                required = this.control.errors[propertyName].requiredPattern.toString();
                                actual = this.control.errors[propertyName].actualValue.toString();
                            }
                            else if (propertyName === 'minlength') {
                                required = this.control.errors[propertyName].requiredLength.toString();
                                actual = this.control.errors[propertyName].actualLength.toString();
                            }
                            else if (propertyName === 'maxlength') {
                                required = this.control.errors[propertyName].requiredLength.toString();
                                actual = this.control.errors[propertyName].actualLength.toString();
                            }
                            else if (propertyName === 'minValue') {
                                required = this.control.errors[propertyName].required.toString();
                                actual = this.control.errors[propertyName].actual.toString();
                            }
                            else if (propertyName === 'maxValue') {
                                required = this.control.errors[propertyName].required.toString();
                                actual = this.control.errors[propertyName].actual.toString();
                            }
                            else if (propertyName === 'enum') {
                                required = this.control.errors[propertyName].required.toString();
                                actual = this.control.errors[propertyName].actual.toString();
                            }
                            // fill error message placeholders with the required and actual values
                            if (required) {
                                message = message.replace('{{required}}', required);
                            }
                            if (actual) {
                                message = message.replace('{{actual}}', actual);
                            }
                            return message;
                        }
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core_1.Input(), 
            __metadata('design:type', forms_1.FormControl)
        ], ValidationMessagesComponent.prototype, "control", void 0);
        ValidationMessagesComponent = __decorate([
            core_1.Component({
                selector: 'sf-validation-messages',
                template: "<div *ngIf=\"errorMessage !== null\" class=\"error\">{{errorMessage}}</div>"
            }), 
            __metadata('design:paramtypes', [])
        ], ValidationMessagesComponent);
        return ValidationMessagesComponent;
    }());
    exports.ValidationMessagesComponent = ValidationMessagesComponent;
});
//# sourceMappingURL=validation-messages.component.js.map