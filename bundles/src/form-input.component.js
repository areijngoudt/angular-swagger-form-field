var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChildren, QueryList } from '@angular/core';
import { FormControl, NgForm, FormControlName } from '@angular/forms';
import { FormControlFinder } from './form-control-finder';
var FormInputComponent = /** @class */ (function () {
    function FormInputComponent(ngForm) {
        this.ngForm = ngForm;
    }
    FormInputComponent.prototype.ngAfterContentInit = function () {
        if (!this.control) {
            // no control passed in, Try to find the control in the ContentChildren
            this.control = FormControlFinder.findFormControl(this.ngModelChildren);
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
        ContentChildren(FormControlName),
        __metadata("design:type", QueryList)
    ], FormInputComponent.prototype, "ngModelChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], FormInputComponent.prototype, "control", void 0);
    FormInputComponent = __decorate([
        Component({
            selector: 'sf-form-input',
            template: "\n<ng-content></ng-content>\n<span *ngIf=\"control\">\n    <sf-validation-messages *ngIf=\"showErrors\" [control]=\"control\"></sf-validation-messages>\n</span>\n<!-- use this transclude placeholder to add custom validation messages -->\n<ng-content select=\"custom-messages\"></ng-content>\n    ",
        })
        /**
         * This component is a wrapper for an input field (input, select, textarea etc).
         * It renders a ValidationMessageComponent to show validation errors.
         */
        ,
        __metadata("design:paramtypes", [NgForm])
    ], FormInputComponent);
    return FormInputComponent;
}());
export { FormInputComponent };
//# sourceMappingURL=form-input.component.js.map