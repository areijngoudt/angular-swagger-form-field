import { OnInit, AfterContentInit, QueryList } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
export declare class FormFieldComponent implements OnInit, AfterContentInit {
    ngModelChildren: QueryList<NgModel>;
    /**
     * The label to show before the field.
     */
    label: string;
    /**
     * The number of colunms to use for the Label.
     * Default 3.
     */
    labelCols: number;
    /**
     * The number of colunmns to use for the contents.
     * Bootstrap uses the allocated space to render an input field.
     * Default 2.
     */
    cols: number;
    /**
     * When set top true, ommit assiging the Bootstrap `form-group` class to the container element.
     * Default false.
     */
    noFormGroupClass: boolean;
    /**
     * Ommit the Boostrap `row` class  to the container element.
     * Default false.
     */
    noRow: boolean;
    labelColClass: string;
    colClass: string;
    control: FormControl;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
