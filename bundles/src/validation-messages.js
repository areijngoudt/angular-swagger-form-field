(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * Generic validation messages with placeholders, one per validation type.
     */
    var ValidationMessages = (function () {
        function ValidationMessages() {
        }
        /**
         * Returns the validation message for the given validation type, identified by it's key.
         * @param {string} key the validation type
         * @returns {string} the validation message which belongs to the given type (key)
         */
        ValidationMessages.getValidatorErrorMessage = function (key) {
            return ValidationMessages.config[key];
        };
        /**
         * Overrule the validation message for the given validation type, identified by it's key, with the given message.
         * @param {string} key the validation type
         * @param {string} the validation message to use. Depending on the type, may contain the placeholders {required} and/or {actual}.
         */
        ValidationMessages.setValidationErrorMessage = function (key, message) {
            ValidationMessages.config[key] = message;
        };
        /**
         * The individual validation messages with placeholders.
         */
        ValidationMessages.config = {
            'required': 'Dit veld is verplicht',
            'minlength': 'Dit veld moet minimaal {{required}} karakters bevatten maar bevat er {{actual}}',
            'maxlength': 'Dit veld mag maximaal {{required}} karakters bevatten maar bevat er {{actual}}',
            'minValue': 'Dit veld mag minimaal {{required}} bevatten maar bevat {{actual}}',
            'maxValue': 'Dit veld mag maximaal {{required}} bevatten maar bevat {{actual}}',
            'enum': 'Dit veld moet een waarde bevatten uit lijst {{required}} maar bevat {{actual}}',
            'email': 'Dit veld bevat een ongeldig email adres',
            'pattern': 'Dit veld bevat tenminste één ongeldig karakter (patroon is {{required}})',
        };
        return ValidationMessages;
    }());
    exports.ValidationMessages = ValidationMessages;
});
//# sourceMappingURL=validation-messages.js.map