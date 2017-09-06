var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, NgForm } from '@angular/forms';
import { EnumPipe } from './enum.pipe';
import { FormFieldComponent } from './form-field.component';
import { FormInputComponent } from './form-input.component';
import { ValidationMessagesComponent } from './validation-messages.component';
var SwaggerFormFieldModule = /** @class */ (function () {
    function SwaggerFormFieldModule() {
    }
    SwaggerFormFieldModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
            ],
            exports: [
                // pipes
                EnumPipe,
                // widgets
                FormFieldComponent,
                FormInputComponent,
                ValidationMessagesComponent,
            ],
            declarations: [
                // pipes
                EnumPipe,
                // widgets
                FormFieldComponent,
                FormInputComponent,
                ValidationMessagesComponent,
            ],
            providers: [
                FormBuilder,
                NgForm,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        })
    ], SwaggerFormFieldModule);
    return SwaggerFormFieldModule;
}());
export { SwaggerFormFieldModule };
//# sourceMappingURL=swagger-form-field.module.js.map