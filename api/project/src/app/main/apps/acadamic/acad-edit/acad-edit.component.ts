import { AcadService } from './../acad.service';
import { Studentmodal } from 'app/main/apps/student/std.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { CustomValidator } from './../../CustomValidation';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
@Component({
  selector: 'app-acad-edit',
  templateUrl: './acad-edit.component.html',
  styleUrls: ['./acad-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AcadEditComponent implements OnInit {
  datashow: any = [];
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: AcadService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      last_degree_tittle: new FormControl(),
      board_university_last_exam: new FormControl(),
      last_exam_marks_obt: new FormControl(),
      last_exam_total_marks: new FormControl(),
      grade_last_exam: new FormControl(),
      percentage_last_exam: new FormControl(),
      year_passing_last_exam: new FormControl(),
      admission_date_current_degree: new FormControl(),
      current_degree_tittle: new FormControl(),
      current_study_year: new FormControl(),
      current_degree_fee_amount: new FormControl(),
    });
    this.productForm = this._formBuilder.group({
      'last_degree_tittle': ['', [Validators.required, CustomValidator.alphabetValidator]],

      'board_university_last_exam': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'last_exam_marks_obt': ['', [Validators.required, CustomValidator.numberValidator]],
      'last_exam_total_marks': ['', [Validators.required, CustomValidator.numberValidator]],
      'grade_last_exam': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'percentage_last_exam': ['', [Validators.required, CustomValidator.numberValidator]],
      'year_passing_last_exam': ['', [Validators.required, CustomValidator.numberValidator]],
      'admission_date_current_degree': [''],
      'current_degree_tittle': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'current_study_year': ['', [Validators.required, CustomValidator.numberValidator]],
      'current_degree_fee_amount': ['', [Validators.required, CustomValidator.numberValidator]],

    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['acad_id']).subscribe((data: any) => {
        this.datashow = data[0];
        console.log(data[0]);

      });
    });
  }
  // tslint:disable-next-line:max-line-length
  updateAcad(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount, acad_id): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:max-line-length
      console.log(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount);
      // tslint:disable-next-line:max-line-length
      this.ac.updateAcad(last_degree_tittle, board_university_last_exam, last_exam_marks_obt, last_exam_total_marks, grade_last_exam, percentage_last_exam, year_passing_last_exam, admission_date_current_degree, current_degree_tittle, current_study_year, current_degree_fee_amount, params['acad_id']);
      // this.router.navigate(['college/get']);
    });
    this.openSnackBar();
  }

  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._matSnackBar.open('Academic Details', ' Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
