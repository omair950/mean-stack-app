import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { tokenKey } from '@angular/core/src/view';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    uri = 'http://localhost:3000/application';
    clg = 'http://localhost:3000/college';
    subj = 'http://localhost:3000/subject';
    sch = 'http://localhost:3000/schlorship';
    url = 'http://localhost:3000/profession';
    std = 'http://localhost:3000/student';
    addrs = 'http://localhost:3000/address';
    gaud = 'http://localhost:3000/gaudian';
    bill = 'http://localhost:3000/bill';
    acad = 'http://localhost:3000/acadamic';

    ;

    constructor(private http: HttpClient, private _router: Router) {

    }
    // addBill(bill_Name, bill_last_month, bill_Average, bill_address) {
    //     const obj = {
    //     };
    //     console.log('yes');
    //     this.http.post(`${this.uri}/add`, obj)
    //         .subscribe(res => console.log('Done'));
    //     console.log('again');
    // }
    // tslint:disable-next-line:typedef










    // createAuthorizationHeader(headers: Headers) {
    //     headers.append('Authorization', 'Basic ');
    //     headers.set('Authorization', 'sakam  ');
    // }

    getdata() {
        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;

        let headers = new HttpHeaders({

            'Authorization': token
        });





        return this.http.get(`${this.uri}`, { headers });
    }



    // getdata() {

    //     return this.http.get(`${ this.uri }`);
    // }
    // tslint:disable-next-line:typedef
    deleteApp(id) {
        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .delete(`${this.uri} / delete /${id}`, { headers });
    }




    // getclgdata(): Observable<any> {

    //     let details = JSON.parse(localStorage.getItem('details'));
    //     let headers = new HttpHeaders();
    //     headers = headers.set('appkey', details);


    //     return this.http.get(`${this.clg}`, { headers });
    // }

    getclgdata(): Observable<any> {
        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.clg}`, { headers });
    }

    // tslint:disable-next-line:typedef

    // tslint:disable-next-line:typedef
    getsubdata() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.subj}`, { headers });
    }
    // tslint:disable-next-line:typedef
    getschdata() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.sch}`, { headers });
    }

    // tslint:disable-next-line:typedef
    geteditclg(app_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.uri}/edit/${app_id}`, { headers });
    }


    // tslint:disable-next-line:typedef
    getdatapro(id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.gaud}/${id}`), { headers };
    }


    // tslint:disable-next-line:typedef
    getprodata() {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        return this.http.get(`${this.url}`, { headers });
    }

    // tslint:disable-next-line:typedef
    updateApp(clg_id, sub_id, sch_id, app_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        const obj = {
            clg_id: clg_id,
            subj_id: sub_id,
            sch_id: sch_id,
        };
        this
            .http
            .put(`${this.uri}/update/${app_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');

                }

            });
    }





    // tslint:disable-next-line:typedef
    updateStudent(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, std_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        const obj = {
            std_id: std_id,
            std_Name: std_Name,
            std_F_Name: std_F_Name,
            std_DOB: std_DOB,
            std_Gender: std_Gender,
            std_Phone_no: std_Phone_no,
            std_Email: std_Email
        };
        console.log(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, std_id);
        this
            .http
            .put(`${this.std}/update/app/${std_id}`, obj, { headers })
            .subscribe((res: any) => {

                console.log('updated Done');
                // this._router.navigate(['/apps/application/view']);
            });


    }





    // tslint:disable-next-line:typedef
    updateGaudian(gaud_Name, gaud_cnic, gaud_Income, prof_id, gaud_id) {


        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        const obj = {
            guad_Name: gaud_Name,
            guad_Income: gaud_Income,
            guad_Cnic: gaud_cnic,
            prof_id: prof_id,

        };
        console.log(gaud_Name, gaud_Income, gaud_cnic, prof_id, gaud_id);

        this
            .http
            .put(`${this.gaud}/update/${gaud_id}`, obj, { headers })
            .subscribe((res: any) => {

                console.log('updated Done');
                // this._router.navigate(['/apps/application/view']);
            });

    }



    // tslint:disable-next-line:typedef
    updateAddrs(temp_add, parmnt_add, add_City, add_province, add_id) {



        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        const obj = {
            temp_add: temp_add,
            parmnt_add: parmnt_add,
            add_City: add_City,
            add_province: add_province
        };

        console.log(temp_add, parmnt_add, add_City, add_province, add_id);
        this
            .http
            .put(`${this.addrs}/update/app/${add_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    // this._router.navigate(['/apps/address/get']);
                }

            });
    }



    // tslint:disable-next-line:typedef
    updateBill(bill_last_month, bill_Average, bill_address, bill_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });


        const obj = {

            bill_last_month: bill_last_month,
            bill_Average: bill_Average,
            bill_address: bill_address
        };
        console.log(bill_last_month, bill_Average, bill_address, bill_id);
        this
            .http
            .put(`${this.bill}/update/app/${bill_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');

                }

            });
    }




    // tslint:disable-next-line:typedef
    updateAcad(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam,
        percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year,
        current_degree_fee_amount, acad_id, app_id) {

        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });




        const obj = {

            last_degree_tittle: last_degree_tittle,
            board_university_last_exam: board_university_last_exam,
            last_exam_marks_obt: last_exam_marks_obt,
            last_exam_total_marks: last_exam_total_marks,
            grade_last_exam: grade_last_exam,
            percentage_last_exam: percentage_last_exam,
            year_passing_last_exam: year_passing_last_exam,
            admission_date_current_degree: admission_date_current_degree,
            current_degree_tittle: current_degree_tittle,
            current_study_year: current_study_year,
            current_degree_fee_amount: current_degree_fee_amount
        };
        this
            .http
            .put(`${this.acad}/update/app/${acad_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/application/show', app_id]);
                }

            });
    }

}


