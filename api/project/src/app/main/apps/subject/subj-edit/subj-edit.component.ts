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
import { CustomValidator } from '../../CustomValidation';
@Component({
  selector: 'app-subj-edit',
  templateUrl: './subj-edit.component.html',
  styleUrls: ['./subj-edit.component.scss']
})
export class SubjEditComponent implements OnInit {
  datashow: any = [];
  lcomments = [];
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: SubjService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      subj_Name: new FormControl()
    });
    this.productForm = this._formBuilder.group({
      'subj_Name': ['', [Validators.required, CustomValidator.alphabetValidator]]

    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['sub_id']).subscribe((data: any) => {
        this.datashow = data[0];
        console.log(data[0]);

      });
    });
  }
  // tslint:disable-next-line:typedef
  // updateSubject(subj_Group_department, sub_id) {
  //   this.route.params.subscribe(params => {
  //     this.ac.updateSubject(subj_Group_department, params['sub_id']);
  //   });
  //   this.openSnackBar(subj_Group_department);
  // }



  a: any;
  updateSubject(subj_Group_department, sub_id) {
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

      }
      else {

        this.route.params.subscribe(params => {
          this.ac.updateSubject(subj_Group_department, params['sub_id']);
          this.openSnackBar(subj_Group_department);
          this.productForm.reset();
        }

        )
      }
    });



  }



  errorSnackBar(clg_Name) {
    this._matSnackBar.open('Subject Name already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });
  }

  // tslint:disable-next-line:typedef
  openSnackBar(subj_Group_department) {
    this._matSnackBar.open(subj_Group_department, ' Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
