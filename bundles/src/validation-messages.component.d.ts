import { FormControl } from '@angular/forms';
export declare class ValidationMessagesComponent {
    control: FormControl;
    constructor();
    /**
     * Determine if the attached control has at least one validation error. If so, get the belonging validation message, fill in its placeholders and return it.
     * @returns {string} the composed validation message which belongs to the first validation error.
     */
    readonly errorMessage: any;
}
