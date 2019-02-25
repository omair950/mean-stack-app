import { ServiceService } from './../clg.service';
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
  selector: 'app-clg-edit',
  templateUrl: './clg-edit.component.html',
  styleUrls: ['./clg-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ClgEditComponent implements OnInit {
  productForm: FormGroup;
  lcomments = [];
  datashow: any = [];
  _snackBar: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: ServiceService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar,

  ) {
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
      this.ac.geteditdata(params['clg_id']).subscribe((data: any) => {
        this.datashow = data[0].clg_Name;
        console.log(data[0].clg_Name);

      });
    });

  }
  // tslint:disable-next-line:typedef
  // updateCollege(clg_Name, clg_id) {
  //   this.route.params.subscribe(params => {
  //     this.ac.updateCollege(clg_Name, params['clg_id']);
  //     this.openSnackBar(clg_Name);
  //     console.log(clg_Name, params['clg_id']);
  //     // this.router.navigate(['college/get']);

  //   });

  // }




  a: any;
  updateCollege(clg_Name, clg_id) {
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

      }
      else {

        this.route.params.subscribe(params => {
          this.ac.updateCollege(clg_Name, params['clg_id']);
          this.openSnackBar(clg_Name);
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
  openSnackBar(clg_Name) {
    this._matSnackBar.open(clg_Name, 'Updated', {
      duration: 2000,
      panelClass: 'success-dialog',
    });
  }

  errorSnackBar(clg_Name) {
    this._matSnackBar.open('College Name already', ' Exists', {
      duration: 2000,
      panelClass: 'error-msg',


    });
  }
}
