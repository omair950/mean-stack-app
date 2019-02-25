
import { AbstractControl } from '@angular/forms';
export class CustomValidator {

    // number validator
    static numberValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
        number.markAsTouched();
        if (NUMBER_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }

    // date validator
    static dateValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /^\d{ 4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }

    // cnic validator
    static cnicValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /\d{5}-\d{7}-\d/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }


    // alphbet validator
    static alphabetValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }

    // email validator
    static emailValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }

    // phone validator
    static phoneValidator(number): any {
        if (number.pristine) {
            return null;
        }
        const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        number.markAsTouched();
        if (PHONE_REGEXP.test(number.value)) {
            return null;
        }
        return {
            invalidNumber: true
        };
    }


}

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;

        let confirmPassword = control.get('confirmPassword').value;

        if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        } else {
            return null
        }
    }
}