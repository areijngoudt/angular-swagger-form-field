import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, NgForm } from '@angular/forms';

import { EnumPipe } from './enum.pipe';

import { FormFieldComponent } from './form-field.component';
import { FormInputComponent } from './form-input.component';
import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
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
        NO_ERRORS_SCHEMA, // for ng-content select='tag'
    ],
})
export class SwaggerFormFieldModule {
}
