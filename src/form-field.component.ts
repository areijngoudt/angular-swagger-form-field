import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { FormControl, NgModel, FormControlName } from '@angular/forms';

import { FormControlFinder } from './form-control-finder';

@Component({
    selector: 'sf-form-field',
    template: 
    `
<div [ngClass]="{'form-group': !noFormGroupClass, 'row': !noRow}">
    <label *ngIf="labelCols > 0" class="control-label" [ngClass]="labelColClass">{{label}}</label>
    <div [ngClass]="colClass">
        <sf-form-input [control]="control">
            <ng-content></ng-content>
        </sf-form-input>
    </div>
</div>
    `,
})
/**
 * This component is a wrapper for a form-field.The real field needs to be added as content to this control.
 * This component renders the given label and contents in a Bootstrap structure (which can be influenced by setting optional properties).
 * The real field (in the content) is rendered wrapped in a FormInputComponent, which adds validation messages functionality.
 */
export class FormFieldComponent implements OnInit, AfterContentInit {
    @ContentChildren(FormControlName) ngModelChildren: QueryList<NgModel>; 

    /**
     * The label to show before the field.
     */
    @Input() label: string;
    /**
     * The number of colunms to use for the Label. 
     * Default 3. 
     */
    @Input() labelCols: number = 3;
    /**
     * The number of colunmns to use for the contents.
     * Bootstrap uses the allocated space to render an input field. 
     * Default 2.
     */
    @Input() cols: number = 2;
    /**
     * When set top true, ommit assiging the Bootstrap `form-group` class to the container element.
     * Default false.
     */
    @Input() noFormGroupClass: boolean = false;
    /**
     * Ommit the Boostrap `row` class  to the container element.
     * Default false.
     */
    @Input() noRow: boolean = false;

    labelColClass: string;
    colClass: string;
    control: FormControl;

    constructor() {
    }

    ngOnInit() {
        this.labelColClass = `col-sm-${this.labelCols.toString()}`;
        this.colClass = `col-sm-${this.cols.toString()}`;
    };

    ngAfterContentInit() {
        // try to find the control in the content so it can be passed to the FormInputComponent
        this.control = FormControlFinder.findFormControl(this.ngModelChildren);
    }
}
