import { StdService } from './../std.service';
// import { Collegemodal, ServiceService } from 'app/main/apps/clg/clg.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { ActivatedRoute, Router } from '@angular/router';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-std-add',
  templateUrl: './std-add.component.html',
  styleUrls: ['./std-add.component.scss']
})
export class StdAddComponent implements OnInit {
  productForm: FormGroup;

  constructor(private ac: StdService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar) {
    this.productForm = new FormGroup({

      std_Nic: new FormControl(),
      std_Name: new FormControl(),
      std_F_Name: new FormControl(),
      std_DOB: new FormControl(),
      std_Phone_no: new FormControl(),
      std_Email: new FormControl(),
      std_Gender: new FormControl()
    });
  }

  // createForm() {
  //   this.productForm = this.group({
  //     std_Nic: ['', Validators.required],
  //     std_Name: ['', Validators.required],
  //     std_F_Name: ['', Validators.required],
  //     std_DOB: ['', Validators.required],
  //     std_Gender: ['', Validators.required],
  //     std_Phone_no: ['', Validators.required],
  //     std_Email: ['', Validators.required],
  //   });
  // }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  addStudent(std_Nic, std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender) {
    this.ac.addStudent(std_Nic, std_Name, std_F_Name, std_DOB, std_Phone_no, std_Email, std_Gender);
    console.log(std_Nic, std_Name, std_F_Name, std_DOB, std_Gender, std_Phone_no, std_Email);
  }
}
