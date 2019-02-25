import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Studentmodal } from './std.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class StdService {
    uri = 'http://localhost:3000/student';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef
    addStudent(std_Nic, std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender) {


        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        const obj = {
            std_Nic: std_Nic,
            std_Name: std_Name,
            std_F_Name: std_F_Name,
            std_DOB: std_DOB,
            std_Gender: std_Gender,
            std_Phone_no: std_Phone_no,
            std_Email: std_Email
        };
        console.log('yes');
        this.http.post(`${this.uri}/add`, obj, { headers })
            .subscribe(res => console.log('Done'));
        console.log('again');
    }
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
    deleteStudent(std_Nic) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .delete(`${this.uri}/delete/${std_Nic}`, { headers });
    }
    // tslint:disable-next-line:typedef
    geteditdata(std_Nic) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${std_Nic}`, { headers });
    }
    // tslint:disable-next-line:typedef
    updateStudent(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, std_Nic) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        const obj = {
            std_Nic: std_Nic,
            std_Name: std_Name,
            std_F_Name: std_F_Name,
            std_DOB: std_DOB,
            std_Gender: std_Gender,
            std_Phone_no: std_Phone_no,
            std_Email: std_Email
        };
        console.log(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, std_Nic);
        this
            .http
            .put(`${this.uri}/update/${std_Nic}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/student/get']);
                }

            });
    }
}


