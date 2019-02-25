import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AddService {
    uri = 'http://localhost:3000/address';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // addAddrs(temp_add, parmnt_add, add_City, add_province, add_Country, std_Nic) {
    //     console.log('yes' + std_Nic);
    //     const obj = {
    //         temp_add: temp_add,
    //         parmnt_add: parmnt_add,
    //         add_City: add_City,
    //         add_province: add_province,
    //         add_Country: add_Country
    //     };
    //     console.log('yes' + std_Nic);
    //     this
    //         .http
    //         .post(`${this.uri}/add/${std_Nic}`, obj)
    //         .subscribe(res => console.log('Done'));
    // }
    // tslint:disable-next-line:typedef
    getdata() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        console.log('salam1');
        return this.http.get(`${this.uri}`, { headers });
    }
    // tslint:disable-next-line:typedef
    deleteAddrs(id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .delete(`${this.uri}/delete/${id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    editAddrs(add_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${add_id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateAddrs(temp_add, parmnt_add, add_City, add_province, add_id) {
        const obj = {
            temp_add: temp_add,
            parmnt_add: parmnt_add,
            add_City: add_City,
            add_province: add_province
        };

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        this
            .http
            .put(`${this.uri}/update/${add_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/address/get']);
                }

            });
    }
}
