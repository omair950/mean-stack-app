import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gaudianmodal } from './gaud.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GaudService {
    uri = 'http://localhost:3000/gaudian';
    url = 'http://localhost:3000/profession';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // addGaudian(gaud_Name, gaud_Income, gaud_cnic, prof_id) {
    //     const obj = {
    //         guad_Name: gaud_Name,
    //         guad_Income: gaud_Income,
    //         guad_Cnic: gaud_cnic,
    //         prof_id: prof_id
    //     };
    //     console.log('yes');
    //     this.http.post(`${this.uri}/add`, obj)
    //         .subscribe(res => console.log('Done'));
    //     console.log('again');
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
    getdatapro() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        console.log('salam1');
        return this.http.get(`${this.url}`, { headers });
    }

    // getdata_list() {
    //     console.log('salam1');
    //     return this.http.get(`${this.uri}`);
    // }
    // tslint:disable-next-line:typedef
    deleteGaudian(id) {

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
    geteditdata(gaud_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${gaud_id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateGaudian(gaud_Name, gaud_Income, gaud_cnic, prof_id, gaud_id) {
        const obj = {
            guad_Name: gaud_Name,
            guad_Income: gaud_Income,
            guad_Cnic: gaud_cnic,
            prof_id: prof_id
        };


        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        this
            .http
            .put(`${this.uri}/update/${gaud_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/gaudian/get']);
                }

            });
    }

    // tslint:disable-next-line:typedef
    // updateG(gaud_Name, gaud_Income, gaud_cnic, prof_id, gaud_id) {
    //     const obj = {
    //         guad_Name: gaud_Name,
    //         guad_Income: gaud_Income,
    //         guad_Cnic: gaud_cnic,
    //         prof_id: prof_id

    //     };
    //     console.log(gaud_Name, gaud_Income, gaud_cnic, prof_id, gaud_id);

    //     this
    //             .http
    //             .put(`${this.uri}/update/app/${gaud_id}`, obj)
    //             .subscribe((res: any) => {

    //     console.log('updated Done');
    //     // this._router.navigate(['/apps/application/view']);
    // });

    //     }
}
