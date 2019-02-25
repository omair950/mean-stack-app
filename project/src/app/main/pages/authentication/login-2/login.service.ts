import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class loginService {
    uri = 'http://localhost:3000/register';
    url = 'http://localhost:3000/login';

    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef









    // posttoken(token) {
    //     const obj = {
    //         token: token,

    //     };
    //     this
    //         .http
    //         .post(`${this.sendtoken}`, obj)
    //         .subscribe((res: any) => {
    //             if (res) {
    //                 console.log('updated Done');

    //             }

    //         });
    // }





    registerdata(name, email, password) {
        const obj = {
            name: name,
            email: email,
            password: password
        };

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        this.http.post(`${this.uri}/add`, obj, { headers })
            .subscribe(err => {
                if (err) {
                    console.log('done');
                }
            });
    }
    // tslint:disable-next-line:typedef
    getdata() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this.http.get(`${this.uri}`, { headers });
    }
    getdatarole() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this.http.get(`${this.uri}/role`, { headers });
    }
    getemail(email) {

        return this.http.get(`${this.url}/${email}`);
    }
    updateaccess(role, reg_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        const obj = {
            role: role,
            reg_id: reg_id,

        };
        this
            .http
            .put(`${this.uri}/update/${reg_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');

                }

            });
    }

    deleteaccess(id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .delete(`${this.uri}/delete/${id}`, { headers });
    }
}

