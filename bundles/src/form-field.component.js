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
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "./form-control-finder"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var forms_1 = require("@angular/forms");
    var form_control_finder_1 = require("./form-control-finder");
    var FormFieldComponent = /** @class */ (function () {
        function FormFieldComponent() {
            /**
             * The number of colunms to use for the Label.
             * Default 3.
             */
            this.labelCols = 3;
            /**
             * The number of colunmns to use for the contents.
             * Bootstrap uses the allocated space to render an input field.
             * Default 2.
             */
            this.cols = 2;
            /**
             * When set top true, ommit assiging the Bootstrap `form-group` class to the container element.
             * Default false.
             */
            this.noFormGroupClass = false;
            /**
             * Ommit the Boostrap `row` class  to the container element.
             * Default false.
             */
            this.noRow = false;
        }
        FormFieldComponent.prototype.ngOnInit = function () {
            this.labelColClass = "col-sm-" + this.labelCols.toString();
            this.colClass = "col-sm-" + this.cols.toString();
        };
        ;
        FormFieldComponent.prototype.ngAfterContentInit = function () {
            // try to find the control in the content so it can be passed to the FormInputComponent
            this.control = form_control_finder_1.FormControlFinder.findFormControl(this.ngModelChildren);
        };
        __decorate([
            core_1.ContentChildren(forms_1.FormControlName),
            __metadata("design:type", core_1.QueryList)
        ], FormFieldComponent.prototype, "ngModelChildren", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], FormFieldComponent.prototype, "label", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], FormFieldComponent.prototype, "labelCols", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], FormFieldComponent.prototype, "cols", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], FormFieldComponent.prototype, "noFormGroupClass", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Boolean)
        ], FormFieldComponent.prototype, "noRow", void 0);
        FormFieldComponent = __decorate([
            core_1.Component({
                selector: 'sf-form-field',
                template: "\n<div [ngClass]=\"{'form-group': !noFormGroupClass, 'row': !noRow}\">\n    <label *ngIf=\"labelCols > 0\" class=\"control-label\" [ngClass]=\"labelColClass\">{{label}}</label>\n    <div [ngClass]=\"colClass\">\n        <sf-form-input [control]=\"control\">\n            <ng-content></ng-content>\n        </sf-form-input>\n    </div>\n</div>\n    ",
            })
            /**
             * This component is a wrapper for a form-field.The real field needs to be added as content to this control.
             * This component renders the given label and contents in a Bootstrap structure (which can be influenced by setting optional properties).
             * The real field (in the content) is rendered wrapped in a FormInputComponent, which adds validation messages functionality.
             */
            ,
            __metadata("design:paramtypes", [])
        ], FormFieldComponent);
        return FormFieldComponent;
    }());
    exports.FormFieldComponent = FormFieldComponent;
});
//# sourceMappingURL=form-field.component.js.map