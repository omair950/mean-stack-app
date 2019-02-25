import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subjectmodal } from './subj.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SubjService {
    uri = 'http://localhost:3000/subject';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef
    addSubject(subj_Group) {



        const obj = {
            subj_Group_department: subj_Group
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
    deleteSubject(id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .delete(`${this.uri}/delete/${id}`, { headers })
    }
    // tslint:disable-next-line:typedef
    geteditdata(sub_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${sub_id}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateSubject(subj_Group_department, sub_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        console.log(subj_Group_department + sub_id);
        const obj = {
            subj_Group_department: subj_Group_department
        };
        this
            .http
            .put(`${this.uri}/update/${sub_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/subject/get']);
                }

            });
    }
}
