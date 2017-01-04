/**
 * Generic validation messages with placeholders, one per validation type.
 */
export declare class ValidationMessages {
    /**
     * The individual validation messages with placeholders.
     */
    private static config;
    /**
     * Returns the validation message for the given validation type, identified by it's key.
     * @param {string} key the validation type
     * @returns {string} the validation message which belongs to the given type (key)
     */
    static getValidatorErrorMessage(key: string): any;
    /**
     * Overrule the validation message for the given validation type, identified by it's key, with the given message.
     * @param {string} key the validation type
     * @param {string} the validation message to use. Depending on the type, may contain the placeholders {required} and/or {actual}.
     */
    static setValidationErrorMessage(key: string, message: string): void;
}
