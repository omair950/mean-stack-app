import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { loginService } from './login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Http, Headers } from '@angular/http';
import { PlatformLocation } from '@angular/common';
import { AppGetComponent } from "../../../apps/application/app-get/app-get.component"

@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit {
    loginForm: FormGroup;
    logdata: any = [];
    myObj: any;

    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();


    // username: string = 'omair';
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private ac: loginService,
        private _router: Router,
        private _matSnackBar: MatSnackBar,
        public platformLocation: PlatformLocation
    ) {

        let details = localStorage.getItem("details")

        if (details !== null) {
            this._router.navigate(['apps/application/get']);
        }

        // this.notify.emit('message from child');
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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {


        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }




    logindata() {




        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;

        this.ac.getemail(email).subscribe((data: any) => {
            this.logdata = data[0];





            if (data.rows[0] === undefined) {
                this.newerrorSnackBar();

            } else {
                this.myObj = { name: data.rows[0].name, email: data.rows[0].email, role: data.rows[0].role, token: data.token };
                if (email === data.rows[0].email && password === data.rows[0].password && data.rows[0].role === "1" || data.rows[0].role === "2") {
                    this.openSnackBar();


                    setTimeout(() => {
                        this._router.navigate(['apps/application/get']);
                    }, 1000);
                    localStorage.setItem('details', JSON.stringify(this.myObj));
                    //    let details = JSON.parse(localStorage.getItem('details'));
                    // let token = details.token;
                    // var headers = new Headers();
                    // headers.append('Content-Type', 'application/json');

                }

                else {
                    if (email === data.rows[0].email && password === data.rows[0].password && data.rows[0].role === "0") {
                        this.unautherrorSnackBar();
                    }
                    else {
                        this.errorSnackBar();
                    }
                }
            }








        })
    }



    openSnackBar() {
        this._matSnackBar.open('Succesfully', ' Login', {
            duration: 2000,
            panelClass: 'success-dialog',


        });
    }
    errorSnackBar() {
        this._matSnackBar.open('Email or Password', ' Invalid', {
            duration: 2000,
            panelClass: 'error--msg',


        });

    }
    newerrorSnackBar() {
        this._matSnackBar.open('Email', ' Unregistered', {
            duration: 2000,
            panelClass: 'error--msg',


        });

    }
    unautherrorSnackBar() {
        this._matSnackBar.open('User', ' UnAuthorized', {
            duration: 2500,
            panelClass: 'error--msg',


        });

    }
}

