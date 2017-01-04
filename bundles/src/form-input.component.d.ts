import { AfterContentInit, QueryList } from '@angular/core';
import { FormControl, NgModel, NgForm } from '@angular/forms';
export declare class FormInputComponent implements AfterContentInit {
    private ngForm;
    ngModelChildren: QueryList<NgModel>;
    /**
     * Optional: the control which needs to be validated
     * Only needs to be set if this FormInputControl is defined inside another component (like FormFieldComponent)
     * If not set, this FormInputComponents tries to find the attached control itself by inspecting it's content
     * trying to find elements with both an ngModel and ngControl directives.
     */
    control: FormControl;
    constructor(ngForm: NgForm);
    ngAfterContentInit(): void;
    readonly showErrors: boolean;
}
