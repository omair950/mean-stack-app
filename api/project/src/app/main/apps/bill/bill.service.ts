import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Billmodal } from './bill.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BillService {
    uri = 'http://localhost:3000/bill';
    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // addBill(bill_Name, bill_last_month, bill_Average, bill_address) {
    //     const obj = {
    //         bill_Name: bill_Name,
    //         bill_last_month: bill_last_month,
    //         bill_Average: bill_Average,
    //         bill_address: bill_address
    //     };
    //     console.log('yes');
    //     this.http.post(`${this.uri}/add`, obj)
    //         .subscribe(res => console.log('Done'));
    //     console.log('again');
    // }
    // tslint:disable-next-line:typedef
    getdata() {
        console.log('salam1');
        return this.http.get(`${this.uri}`);
    }
    // tslint:disable-next-line:typedef
    deleteBill(id) {
        return this
            .http
            .delete(`${this.uri}/delete/${id}`);
    }
    // tslint:disable-next-line:typedef
    geteditdata(bill_id) {
        return this
            .http
            .get(`${this.uri}/edit/${bill_id}`);
    }
    // tslint:disable-next-line:typedef
    updateBill(bill_last_month, bill_Average, bill_address, bill_id) {
        const obj = {

            bill_last_month: bill_last_month,
            bill_Average: bill_Average,
            bill_address: bill_address
        };
        console.log(bill_last_month, bill_Average, bill_address, bill_id);
        this
            .http
            .put(`${this.uri}/update/${bill_id}`, obj)
            .subscribe((res: any) => {
                if (res) {
                    console.log('updated Done');
                    this._router.navigate(['/apps/bill/get']);
                }

            });
    }
}
