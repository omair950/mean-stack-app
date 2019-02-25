import { SchService } from './../sch.service';
// import { Collegemodal, ServiceService } from 'app/main/apps/clg/clg.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomValidator } from './../../CustomValidation';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { ActivatedRoute, Router } from '@angular/router';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-sch-add',
  templateUrl: './sch-add.component.html',
  styleUrls: ['./sch-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SchAddComponent implements OnInit {
  lcomments = [];
  productForm: FormGroup;

  constructor(private ac: SchService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar, public router: Router) {

    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
    this.productForm = new FormGroup({
      name: new FormControl()
    });
    this.productForm = this._formBuilder.group({
      'name': ['', [Validators.required, CustomValidator.alphabetValidator]]


    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  // addSchlorship(sch_Name) {
  //   this.ac.addSchlorship(sch_Name);
  //   console.log('checking');
  //   this.productForm.reset();
  //   this.openSnackBar(sch_Name);
  // }

  a: any;
  addSchlorship(sch_Name) {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;
      console.log(data.length);

      for (let i = 0; i < data.length; i++) {

        if (data[i].sch_Name === this.productForm.value.name) {



          this.a = data[i].sch_Name;

        }
        else {


          console.log('no')
        }
      }

      if (this.a === this.productForm.value.name) {
        this.errorSnackBar(sch_Name);
        this.productForm.reset();
      }
      else {

        this.ac.addSchlorship(sch_Name);
        this.openSnackBar(sch_Name);
        this.productForm.reset();
      }


    });


    // tslint:disable-next-line:triple-equals
    // console.log(typeof data[1].clg_Name);
    // console.log(typeof this.productForm.value.name);


    // this.ac.addCollege(clg_Name);

    // console.log(clg_Name);
    // this.productForm.reset();

    // this.openSnackBar(clg_Name);
    // this._router.navigate(['/apps/clg/get']);
  }


  // tslint:disable-next-line:typedef
  openSnackBar(sch_Name) {
    this._matSnackBar.open(sch_Name, ' Added', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }

  errorSnackBar(clg_Name) {
    this._matSnackBar.open('Scholarship already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });
  }

}
