import { group, transition } from '@angular/animations';
import { ServiceService } from './../clg.service';
// import { Collegemodal, ServiceService } from 'app/main/apps/clg/clg.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';

import { CustomValidator } from './../../CustomValidation';
@Component({
  selector: 'app-clg-add',
  templateUrl: './clg-add.component.html',
  styleUrls: ['./clg-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ClgAddComponent implements OnInit {
  productForm: FormGroup;
  lcomments = [];
  constructor(private ac: ServiceService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    public snackBar: MatSnackBar) {
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
  a: any;
  addCollege(clg_Name) {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;
      console.log(data.length);

      for (let i = 0; i < data.length; i++) {

        if (data[i].clg_Name === this.productForm.value.name) {



          this.a = data[i].clg_Name;

        }
        else {


          console.log('no')
        }
      }

      if (this.a === this.productForm.value.name) {
        this.errorSnackBar(clg_Name);
        this.productForm.reset();
      }
      else {

        this.ac.addCollege(clg_Name);
        this.openSnackBar(clg_Name);
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
  openSnackBar(clg_Name) {
    this.snackBar.open(clg_Name, ' Added', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }


  errorSnackBar(clg_Name) {
    this.snackBar.open('College Name already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });
  }
  // tslint:disable-next-line:typedef
  // errorSnackBar(clg_Name) {
  //   this.snackBar.open(clg_Name, ' exist', {
  //     duration: 2000,
  //     panelClass: 'success-dialog',


  //   });
  // }
}
