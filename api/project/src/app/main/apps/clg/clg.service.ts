import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegemodal } from './clg.model';
import { Router } from '@angular/router';



@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    uri = 'http://localhost:3000/college';
    constructor(private http: HttpClient,
        private _router: Router) { }


    getdata(): Observable<any> {
        console.log('salam1');
        return this.http.get(`${this.uri}`);
    }
    // tslint:disable-next-line:typedef
    geteditdata(clg_id) {

        return this.http.get(`${this.uri}/edit/${clg_id}`);
    }
    // tslint:disable-next-line:typedef
    addCollege(clg_Name) {
        const obj = {
            clg_Name: clg_Name
        };
        console.log(obj);
        this.http.post(`${this.uri}/add`, obj).subscribe(err => {


            console.log('done');

        });


        // .subscribe((res: any) => {
        //     console.log('ressss', res);
        //     if (res) {

        //         console.log('Done');
        //         this._router.navigate(['/apps/clg/get']);
        //     }
        // });

    }

    // tslint:disable-next-line:typedef
    deleteCollege(id) {
        return this
            .http
            .delete(`${this.uri}/delete/${id}`);
    }

    // tslint:disable-next-line:typedef
    editCollege(clg_id) {
        return this
            .http
            .get(`${this.uri}/edit/${clg_id}`);
    }

    // tslint:disable-next-line:typedef
    updateCollege(clg_Name, clg_id) {
        const obj = {
            clg_Name: clg_Name,
        };
        this
            .http
            .put(`${this.uri}/update/${clg_id}`, obj)
            .subscribe((res => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/clg/get']);
                }
                else {

                    console.log('Name Already Exists');


                }

            }));
    }
}
