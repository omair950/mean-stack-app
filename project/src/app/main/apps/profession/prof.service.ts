import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Professionmodal } from './prof.model';

import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class ProService {
    uri = 'http://localhost:3000/profession';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef
    addProfession(profession) {





        const obj = {
            profession: profession
        };
        console.log('yes');
        this.http.post(`${this.uri}/add`, obj)
            .subscribe(err => {
                if (err) {
                    console.log('Name Already Exists');
                }
            });
    }
    // tslint:disable-next-line:typedef
    getdata() {





        console.log('salam1');
        return this.http.get(`${this.uri}`);
    }
    // tslint:disable-next-line:typedef
    deleteProfession(id) {

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
    geteditdata(pro_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${pro_id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateProfession(profession, pro_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        console.log(pro_id + profession);
        const obj = {
            profession: profession
        };
        this
            .http
            .put(`${this.uri}/update/${pro_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/profession/get']);
                }

            });
    }
}
