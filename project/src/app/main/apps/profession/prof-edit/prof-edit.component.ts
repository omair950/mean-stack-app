import { ProService } from './../prof.service';
import { Collegemodal } from 'app/main/apps/clg/clg.model';
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
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.scss']
})
export class ProfEditComponent implements OnInit {
  productForm: FormGroup;
  lcomments = [];
  datashow: any = [];
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: ProService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
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
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['pro_id']).subscribe((data: any) => {
        this.datashow = data[0].profession;
        console.log(data[0].profession);

      });
    });
  }
  // tslint:disable-next-line:typedef
  // updateProfession(profession, pro_id) {
  //   this.route.params.subscribe(params => {
  //     this.ac.updateProfession(profession, params['pro_id']);
  //     // this.router.navigate(['college/get']);

  //   });

  //   this.openSnackBar(profession);
  // }




  a: any;
  updateProfession(profession, pro_id) {
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

      }
      else {

        this.route.params.subscribe(params => {
          this.ac.updateProfession(profession, params['pro_id']);
          this.openSnackBar(profession);
          this.productForm.reset();
        }
        )
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
    this._matSnackBar.open(profession, ' Updated', {
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
