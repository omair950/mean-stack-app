import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { RegisterService } from './register.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    regdata = [];
    reg: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private ac: RegisterService,
        private _matSnackBar: MatSnackBar,
        private _router: Router
    ) {
        let details = localStorage.getItem("details")

        if (details !== null) {
            this._router.navigate(['apps/application/get']);
        }
        this.registerForm = this._formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', Validators.required],
            'passwordConfirm': ['', [Validators.required, confirmPasswordValidator]],
            'checkbox': ['', Validators.required],
        });
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {







        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    submit() {

        // this.ac.getdata().subscribe((data: any[]) => {
        //     this.regdata = data;



        //     for (let i = 0; i < data.length; i++) {

        //         if (data[i].email === this.registerForm.value.email) {



        //             this.reg = data[i].email;

        //         }
        //         else {


        //             console.log('no')
        //         }
        //     }

        // if (this.reg === this.registerForm.value.email) {
        //     this.errorSnackBar();

        // }
        // else {







        let name = this.registerForm.value.name;
        let email = this.registerForm.value.email;
        let password = this.registerForm.value.password;
        this.ac.registerdata(name, email, password);




        // setTimeout(() => {
        //     this._router.navigate(['/login']);
        // }, 3000);
        // }


        // });




    }
    openSnackBar() {
        this._matSnackBar.open('User', ' Registered', {
            duration: 2000,
            panelClass: 'success-dialog',


        });
    }




    errorSnackBar() {
        this._matSnackBar.open('Email already', ' Exists', {
            duration: 2000,
            panelClass: 'errormsg',


        });
    }

}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return { 'passwordsNotMatching': true };
};


