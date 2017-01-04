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
        define(["require", "exports", '@angular/core', '@angular/forms', './form-control-finder'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var forms_1 = require('@angular/forms');
    var form_control_finder_1 = require('./form-control-finder');
    var FormInputComponent = (function () {
        function FormInputComponent(ngForm) {
            this.ngForm = ngForm;
        }
        FormInputComponent.prototype.ngAfterContentInit = function () {
            if (!this.control) {
                // no control passed in, Try to find the control in the ContentChildren
                this.control = form_control_finder_1.FormControlFinder.findFormControl(this.ngModelChildren);
            }
        };
        Object.defineProperty(FormInputComponent.prototype, "showErrors", {
            get: function () {
                if (this.control) {
                    return this.ngForm.submitted || (this.control.touched && !this.control.valid);
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core_1.ContentChildren(forms_1.FormControlName), 
            __metadata('design:type', core_1.QueryList)
        ], FormInputComponent.prototype, "ngModelChildren", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', forms_1.FormControl)
        ], FormInputComponent.prototype, "control", void 0);
        FormInputComponent = __decorate([
            core_1.Component({
                selector: 'sf-form-input',
                template: "\n<ng-content></ng-content>\n<span *ngIf=\"control\">\n    <sf-validation-messages *ngIf=\"showErrors\" [control]=\"control\"></sf-validation-messages>\n</span>\n<!-- use this transclude placeholder to add custom validation messages -->\n<ng-content select=\"custom-messages\"></ng-content>\n    ",
            }), 
            __metadata('design:paramtypes', [forms_1.NgForm])
        ], FormInputComponent);
        return FormInputComponent;
    }());
    exports.FormInputComponent = FormInputComponent;
});
//# sourceMappingURL=form-input.component.js.map