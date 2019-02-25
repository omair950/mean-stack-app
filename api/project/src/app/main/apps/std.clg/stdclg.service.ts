import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Stdclgmodal } from './stdclg.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StdclgService {
    uri = 'http://localhost:3000/std_clg';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }

    // tslint:disable-next-line:typedef
    getdata() {
        console.log('salam1');
        return this.http.get(`${this.uri}`);
    }
    // tslint:disable-next-line:typedef
    deletestdclg(id) {
        return this
            .http
            .delete(`${this.uri}/delete/${id}`);
    }
    // tslint:disable-next-line:typedef
    updatestdclg(clg_id, std_clg_id) {
        const obj = {
            clg_id: clg_id,
        };
        this
            .http
            .put(`${this.uri}/update/${std_clg_id}`, obj)
            .subscribe((res: any) => {
                if (res) {
                    console.log('Done');
                    this._router.navigate(['/apps/std.clg/get']);
                }
            });


    }
    // tslint:disable-next-line:typedef
    getdataclg() {
        console.log('salam1');
        return this.http.get(`${this.uri}/get/clg`);
    }
    // tslint:disable-next-line:typedef
    geteditdata(std_clg_id) {
        return this
            .http
            .get(`${this.uri}/edit/${std_clg_id}`);
    }
}
