import { StdService } from './../std.service';
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


import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { CustomValidator } from 'app/main/apps/CustomValidation';
@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class StdEditComponent implements OnInit {
  productForm: FormGroup;
  datashow: any = [];
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: StdService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      std_Nic: new FormControl(),
      std_Name: new FormControl(),
      std_F_Name: new FormControl(),
      std_DOB: new FormControl(),
      std_Phone_no: new FormControl(),
      std_Email: new FormControl(),
      std_Gender: new FormControl()
    });


    this.productForm = this._formBuilder.group({
      'std_Name': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'std_DOB': ['', [Validators.required]],
      'std_F_Name': [' ', [Validators.required, CustomValidator.alphabetValidator]],
      'std_Phone_no': ['', [Validators.required, CustomValidator.numberValidator]],
      'std_Email': ['', [Validators.required, CustomValidator.emailValidator]],
      'std_Gender': ['', [Validators.required]],
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['std_Nic']).subscribe((data: any) => {
        this.datashow = data[0];
        console.log(data[0].clg_Name);

      });
    });
  }
  // tslint:disable-next-line:typedef
  updateStudent(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, std_Nic) {
    this.route.params.subscribe(params => {
      this.ac.updateStudent(std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender, params['std_Nic']);
      // this.router.navigate(['college/get']);
    });
    this.openSnackBar(std_Name);
  }

  // tslint:disable-next-line:typedef
  openSnackBar(std_Name) {
    this._matSnackBar.open('Student Details ', ' Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
