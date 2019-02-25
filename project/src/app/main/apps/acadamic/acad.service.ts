import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Acadamicmodal } from './acad.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AcadService {
    uri = 'http://localhost:3000/acadamic';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }


    // tslint:disable-next-line:max-line-length
    addAcad(std_Nic, last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount): void {
        const obj = {
            std_Nic: std_Nic,
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
        // tslint:disable-next-line:max-line-length




        // let details = JSON.parse(localStorage.getItem('details'));
        // let token = details.token;
        // let headers = new HttpHeaders({

        //     'Authorization': token
        // });



        console.log(std_Nic, last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount);
        console.log('yes');
        this.http.post(`${this.uri}/add`, obj)
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
    deleteAcad(id) {


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
    geteditdata(acad_id) {


        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        return this
            .http
            .get(`${this.uri}/edit/${acad_id}`, { headers });
    }

    // tslint:disable-next-line:typedef
    // tslint:disable-next-line:max-line-length
    updateAcad(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount, acad_id): void {
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



        let details = JSON.parse(localStorage.getItem('details'));
        let token = details.token;
        let headers = new HttpHeaders({

            'Authorization': token
        });



        this
            .http
            .put(`${this.uri}/update/${acad_id}`, obj, { headers })
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/acadamic/get']);
                }

            });
    }
}
