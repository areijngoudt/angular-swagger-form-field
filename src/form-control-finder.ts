import { QueryList } from '@angular/core';
import { NgModel, FormControlName, FormControl } from '@angular/forms';

/**
 * The FormControlFinder tries to find a formControl in the given ngModelChildren.
 * The input element of a control must contain a formControlName directive.
 * If more than 1 control is found, the attached formControlName contents (the model's property name) must be the same (so the same validation rules are applicable).  
 */
export class FormControlFinder {
    /**
     * Try to find the formControl in the given collection. If found, return it.
     * If more than 1 control is found, check if the all contain the same formControlName. If not, throw an exception.  
     * @param {ngModelChildren} QueryList<NgModel> the ngModel ContentChildren to inspect.
     * @returns {FormControl} Returns the found control or undefined (if not found)
     */
    static findFormControl(ngModelChildren: QueryList<NgModel>): FormControl {
        // filter ngControlName directives (select only controls with ngControl properties, skip the ones with only ngModel)
        let controls = ngModelChildren.filter((ngModel) => { return (ngModel instanceof FormControlName); });
        if (controls && controls.length > 0) {
            // all ngModelChildren must contain the same control (otherwise, validation will only occure to the first one)
            if (controls.length > 1) {
                FormControlFinder.checkArrayContainsSameNameValues(controls);
            }
            return controls[0].control;
        }
    }

    /**
     * checks if all items in the given array are the same 
     * @param {any[]} array
     * @returns {boolean} true if all items in array are the same, throws error if not
     */
    private static checkArrayContainsSameNameValues(array: any[]): boolean {
        let firstName = array[0].name;
        for (let element of array) {
            if (element.name !== firstName) {
                console.log('More than one formControlName found in transcluded children. first:', firstName, ' second:', element.name);
                throw `More than one formControlName found in transcluded children (first=${firstName}, other=${element.name})`;
            }
        }
        return true;
    }

}
