import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    uri = 'http://localhost:3000/register';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router, private _matSnackBar: MatSnackBar) { }
    // tslint:disable-next-line:typedef
    registerdata(name, email, password) {
        const obj = {
            name: name,
            email: email,
            password: password
        };

        this.http.post(`${this.uri}/add`, obj)
            .subscribe(res => {
                if (res === "error") {
                    this.errorSnackBar();
                } else {
                    this.openSnackBar();
                    setTimeout(() => {
                        this._router.navigate(['/login']);
                    }, 1500);

                }
            });
    }
    // tslint:disable-next-line:typedef
    getdata() {

        return this.http.get(`${this.uri}`);
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
