import { SubjService } from './../subj.service';
import { Subjectmodal } from 'app/main/apps/subject/subj.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { ActivatedRoute, Router } from '@angular/router';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { CustomValidator } from '../../CustomValidation';
@Component({
  selector: 'app-subj-add',
  templateUrl: './subj-add.component.html',
  styleUrls: ['./subj-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SubjAddComponent implements OnInit {
  lcomments = [];
  productForm: FormGroup;

  constructor(private ac: SubjService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar) {
    this.productForm = new FormGroup({
      subj_Name: new FormControl()
    });
    this.productForm = this._formBuilder.group({
      'subj_Name': ['', [Validators.required, CustomValidator.alphabetValidator]]

    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  a: any;
  addSubject(subj_Group_department) {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;

      for (let i = 0; i < data.length; i++) {

        if (data[i].subj_Group_department === this.productForm.value.subj_Name) {



          this.a = data[i].subj_Group_department;

        }
        else {


          console.log('no')
        }
      }

      if (this.a === this.productForm.value.subj_Name) {
        this.errorSnackBar(subj_Group_department);
        this.productForm.reset();
      }
      else {

        this.ac.addSubject(subj_Group_department);
        this.openSnackBar(subj_Group_department);
        this.productForm.reset();
      }


    });



  }






  // tslint:disable-next-line:typedef
  openSnackBar(subj_Group_department) {
    this._matSnackBar.open(subj_Group_department, ' Added', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }


  errorSnackBar(subj_Group_department) {
    this._matSnackBar.open('Subject Name already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });

  }
}
