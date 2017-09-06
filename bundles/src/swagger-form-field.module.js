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
        define(["require", "exports", "@angular/core", "@angular/common", "@angular/forms", "./enum.pipe", "./form-field.component", "./form-input.component", "./validation-messages.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var forms_1 = require("@angular/forms");
    var enum_pipe_1 = require("./enum.pipe");
    var form_field_component_1 = require("./form-field.component");
    var form_input_component_1 = require("./form-input.component");
    var validation_messages_component_1 = require("./validation-messages.component");
    var SwaggerFormFieldModule = /** @class */ (function () {
        function SwaggerFormFieldModule() {
        }
        SwaggerFormFieldModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    forms_1.ReactiveFormsModule,
                ],
                exports: [
                    // pipes
                    enum_pipe_1.EnumPipe,
                    // widgets
                    form_field_component_1.FormFieldComponent,
                    form_input_component_1.FormInputComponent,
                    validation_messages_component_1.ValidationMessagesComponent,
                ],
                declarations: [
                    // pipes
                    enum_pipe_1.EnumPipe,
                    // widgets
                    form_field_component_1.FormFieldComponent,
                    form_input_component_1.FormInputComponent,
                    validation_messages_component_1.ValidationMessagesComponent,
                ],
                providers: [
                    forms_1.FormBuilder,
                    forms_1.NgForm,
                ],
                schemas: [
                    core_1.NO_ERRORS_SCHEMA,
                ],
            })
        ], SwaggerFormFieldModule);
        return SwaggerFormFieldModule;
    }());
    exports.SwaggerFormFieldModule = SwaggerFormFieldModule;
});
//# sourceMappingURL=swagger-form-field.module.js.map