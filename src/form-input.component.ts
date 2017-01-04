import { Component, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';
import { FormControl, NgModel, NgForm, FormControlName } from '@angular/forms';

import { FormControlFinder } from './form-control-finder';

@Component({
    selector: 'sf-form-input',
    template: 
    `
<ng-content></ng-content>
<span *ngIf="control">
    <sf-validation-messages *ngIf="showErrors" [control]="control"></sf-validation-messages>
</span>
<!-- use this transclude placeholder to add custom validation messages -->
<ng-content select="custom-messages"></ng-content>
    `,
})
/**
 * This component is a wrapper for an input field (input, select, textarea etc).
 * It renders a ValidationMessageComponent to show validation errors.
 */
export class FormInputComponent implements AfterContentInit {
    @ContentChildren(FormControlName) ngModelChildren: QueryList<NgModel>; 

    /**
     * Optional: the control which needs to be validated
     * Only needs to be set if this FormInputControl is defined inside another component (like FormFieldComponent)
     * If not set, this FormInputComponents tries to find the attached control itself by inspecting it's content
     * trying to find elements with both an ngModel and ngControl directives.
     */
    @Input() control: FormControl;

    constructor(
        private ngForm: NgForm) {
    }

    ngAfterContentInit() {
        if (!this.control) {
            // no control passed in, Try to find the control in the ContentChildren
            this.control = FormControlFinder.findFormControl(this.ngModelChildren);
        }
    }

    get showErrors() {
        if (this.control) {
            return this.ngForm.submitted || (this.control.touched && !this.control.valid);
        }
        return false;
    }
}
