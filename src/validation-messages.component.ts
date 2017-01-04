import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessages } from './validation-messages';

@Component({
    selector: 'sf-validation-messages',
    template: `<div *ngIf="errorMessage !== null" class="error">{{errorMessage}}</div>`
})
/**
 * This component shows a validation message when the attached control has at least one validation error.
 * The validation messages are used from the ValidationMessages class.
 */
export class ValidationMessagesComponent {
    @Input() control: FormControl;
    constructor() {
    }

    /**
     * Determine if the attached control has at least one validation error. If so, get the belonging validation message, fill in its placeholders and return it.
     * @returns {string} the composed validation message which belongs to the first validation error.
     */
    get errorMessage() {
        if (this.control) {
            //console.log('ValidationMessagesComponent.errorMessage: control.validator=' + this.control.validator + '\n control.value=' + this.control.value + '\n control.errors=', this.control.errors);
            for (let propertyName in this.control.errors) {
                // If control has a error
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    // get the validation message for the error type 
                    let message = ValidationMessages.getValidatorErrorMessage(propertyName);

                    // fill required and actual values based on the error type
                    let required;
                    let actual;
                    if (propertyName === 'pattern') {
                        required = this.control.errors[propertyName].requiredPattern.toString();
                        actual = this.control.errors[propertyName].actualValue.toString();
                    } else if (propertyName === 'minlength') {
                        required = this.control.errors[propertyName].requiredLength.toString();
                        actual = this.control.errors[propertyName].actualLength.toString();
                    } else if (propertyName === 'maxlength') {
                        required = this.control.errors[propertyName].requiredLength.toString();
                        actual = this.control.errors[propertyName].actualLength.toString();
                    } else if (propertyName === 'minValue') {
                        required = this.control.errors[propertyName].required.toString();
                        actual = this.control.errors[propertyName].actual.toString();
                    } else if (propertyName === 'maxValue') {
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
    }
}