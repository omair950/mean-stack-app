import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schlorshipmodal } from './sch.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SchService {
    uri = 'http://localhost:3000/schlorship';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef
    addSchlorship(sch_Name) {



        const obj = {
            sch_Name: sch_Name
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
    deleteSchlorship(id) {

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
    editSchlorship(sch_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${sch_id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateSchlorship(sch_Name, sch_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        console.log(sch_id + sch_Name);
        const obj = {
            sch_Name: sch_Name
        };
        this
            .http
            .put(`${this.uri}/update/${sch_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('Done');
                    this._router.navigate(['/apps/schlorship/get']);
                }

            });
    }
}
