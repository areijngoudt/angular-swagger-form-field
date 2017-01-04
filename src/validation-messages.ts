/**
 * Generic validation messages with placeholders, one per validation type. 
 */
export class ValidationMessages {

    /**
     * The individual validation messages with placeholders.
     */
    private static config = {
        'required': 'Dit veld is verplicht',
        'minlength': 'Dit veld moet minimaal {{required}} karakters bevatten maar bevat er {{actual}}',
        'maxlength': 'Dit veld mag maximaal {{required}} karakters bevatten maar bevat er {{actual}}',
        'minValue': 'Dit veld mag minimaal {{required}} bevatten maar bevat {{actual}}',
        'maxValue': 'Dit veld mag maximaal {{required}} bevatten maar bevat {{actual}}',
        'email': 'Dit veld bevat een ongedlig email adres',
        'pattern': 'Dit veld bevat tenminste één ongeldig karakter (patroon is {{required}})',
    };

    /**
     * Returns the validation message for the given validation type, identified by it's key.
     * @param {string} key the validation type 
     * @returns {string} the validation message which belongs to the given type (key)
     */
    static getValidatorErrorMessage(key: string) {
        return ValidationMessages.config[key];
    }

    /**
     * Overrule the validation message for the given validation type, identified by it's key, with the given message.
     * @param {string} key the validation type 
     * @param {string} the validation message to use. Depending on the type, may contain the placeholders {required} and/or {actual}.
     */
    static setValidationErrorMessage(key: string, message: string): void {
        ValidationMessages.config[key] = message;
    }
}
