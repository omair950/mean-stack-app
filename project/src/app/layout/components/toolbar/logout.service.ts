import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class logoutService {

    // tslint:disable-next-line:eofline
    constructor(private http: HttpClient, private _router: Router) { }
    // tslint:disable-next-line:typedef
}
