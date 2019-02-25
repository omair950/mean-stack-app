import { GaudService } from './../gaud.service';
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

import { Professionmodal } from 'app/main/apps/profession/prof.model';
import { ProService } from 'app/main/apps/profession/prof.service';
import { CustomValidator } from 'app/main/apps/CustomValidation';
@Component({
  selector: 'app-gaud-edit',
  templateUrl: './gaud-edit.component.html',
  styleUrls: ['./gaud-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class GaudEditComponent implements OnInit {

  lcomments: any = [];
  datashow: any = [];
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: GaudService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      gaud_Name: new FormControl(),
      gaud_Income: new FormControl(),
      gaud_cnic: new FormControl(),
      prof_id: new FormControl(),

    });

    this.productForm = this._formBuilder.group({
      'gaud_Name': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'gaud_Income': ['', [Validators.required, CustomValidator.numberValidator]],
      'prof_id': ['', [Validators.required]],
      'gaud_cnic': ['', [Validators.required, CustomValidator.cnicValidator]]
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['gaud_id']).subscribe((data: any) => {
        this.datashow = data[0];
        this.datashow.profession = data[0].pro_id;
        console.log(data[0]);


      });
    });

    this.ac.getdatapro().subscribe((data: Professionmodal[]) => {
      this.lcomments = data;


    });
  }
  // tslint:disable-next-line:typedef
  updateGaudian(gaud_Name, gaud_Income, gaud_cnic, prof_id, gaud_id) {

    console.log(gaud_Name, gaud_Income, gaud_cnic, prof_id);
    // console.log('this.datashow', this.datashow);
    // if (this.datashow) { return false; }
    this.route.params.subscribe(params => {
      console.log(gaud_Name, gaud_Income, gaud_cnic, prof_id);
      this.ac.updateGaudian(gaud_Name, gaud_Income, gaud_cnic, prof_id, params['gaud_id']);
      // this.router.navigate(['college/get']);
    });
    this.openSnackBar();
  }
  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._matSnackBar.open('Guardian Details', ' Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
