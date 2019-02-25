import { ProService } from './../prof.service';
import { Professionmodal } from 'app/main/apps/profession/prof.model';
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
  selector: 'app-prof-add',
  templateUrl: './prof-add.component.html',
  styleUrls: ['./prof-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProfAddComponent implements OnInit {
  lcomments = [];
  productForm: FormGroup;

  constructor(private ac: ProService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar) {
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
  // addProfession(profession) {
  //   this.ac.addProfession(profession);
  //   console.log('checking');
  //   this.productForm.reset();
  //   this.openSnackBar(profession);
  // }




  a: any;
  addProfession(profession) {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;
      console.log(data.length);

      for (let i = 0; i < data.length; i++) {

        if (data[i].profession === this.productForm.value.name) {



          this.a = data[i].profession;

        }
        else {


          console.log('no')
        }
      }

      if (this.a === this.productForm.value.name) {
        this.errorSnackBar(profession);
        this.productForm.reset();
      }
      else {

        this.ac.addProfession(profession);
        this.openSnackBar(profession);
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
  openSnackBar(profession) {
    this._matSnackBar.open(profession, ' Added', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }



  errorSnackBar(clg_Name) {
    this._matSnackBar.open('Profession already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });
  }
}
