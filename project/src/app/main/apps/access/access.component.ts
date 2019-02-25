
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Collegemodal } from 'app/main/apps/clg/clg.model';
import { loginService } from '../../../main/pages/authentication/login-2/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';


import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';

import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AccessComponent implements OnInit {

  lcomments: any;
  displayedColumns = ['reg_id', 'Name', 'Email', 'status', 'button'];
  datashow: any;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: loginService,
    private _router: Router,
    private _matSnackBar: MatSnackBar,
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this._router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;


      //   for (let i = 0; i < data.length; i++) {
      //     this.datashow = this.lcomments[i];

      //     console.log(this.datashow.name);
      //   }

    });
  }


  update(role, id, email) {
    this.ac.getdatarole().subscribe((data: any) => {
      var a = data.length;
      // if (data.length == 1 && JSON.parse(localStorage.getItem("details")).role === "2" && JSON.parse(localStorage.getItem("details")).email === email) {

      // }else{


      // }
    });




    if (JSON.parse(localStorage.getItem("details")).role === "2") {
      this.ac.updateaccess(role, id);
      this.openSnackBar();
    } else {

      if (role === "2") {
        this.errorSnackBar();

        this.ac.getdata().subscribe((data: any) => {
          this.lcomments = data;

        });

      }
      else {
        this.ac.updateaccess(role, id);
        this.openSnackBar();
      }

    }





  }





  delete(id, email, role): void {

    if (role === "2") {
      this._matSnackBar.open('Status Master Cannot be ', ' Remove', {
        duration: 2000,
        panelClass: 'error9-dialog',


      });
    }
    else {
      if (JSON.parse(localStorage.getItem("details")).email === email) {
        this.dlterrorSnackBar();


      } else {
        this.ac.deleteaccess(id).subscribe(res => {

          if (res) {
            this.deleteerrorSnackBar();
            // this._router.navigate(['/apps/clg/get']);
            this.ac.getdata().subscribe((data: any) => {
              this.lcomments = data;

            });

          }
        });
      }

    }




  }


  dlterrorSnackBar() {
    this._matSnackBar.open('Cannot', ' Remove', {
      duration: 2000,
      panelClass: 'error9-dialog',


    });

  }
  openSnackBar() {
    this._matSnackBar.open('Status', ' Updated', {
      duration: 2000


    });

  }

  deleteerrorSnackBar() {
    this._matSnackBar.open('User', ' Removed', {
      duration: 2000,
      panelClass: 'error9-dialog',


    });

  }
  errorSnackBar() {
    this._matSnackBar.open('Status Master Cannot be ', ' Change', {
      duration: 2000,
      panelClass: 'error9-dialog',


    });

  }
}
