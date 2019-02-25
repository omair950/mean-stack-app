import { AddService } from './../addrs.service';
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
import { CustomValidator } from '../../CustomValidation';

@Component({
  selector: 'app-addrs-edit',
  templateUrl: './addrs-edit.component.html',
  styleUrls: ['./addrs-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AddrsEditComponent implements OnInit {
  datashow: any = [];

  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: AddService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {

    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
    this.productForm = new FormGroup({
      temp_add: new FormControl(),
      parmnt_add: new FormControl(),
      add_City: new FormControl(),
      add_province: new FormControl(),


    });

    this.productForm = this._formBuilder.group({
      'temp_add': ['', [Validators.required]],
      'parmnt_add': ['', [Validators.required]],
      'add_City': ['', [Validators.required, CustomValidator.alphabetValidator]],
      'add_province': ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.editAddrs(params['add_id']).subscribe((data: any) => {
        this.datashow = data[0];

        console.log(data[0]);

      });
    });
  }
  // tslint:disable-next-line:typedef
  updateAddrs(temp_add, parmnt_add, add_City, add_province, add_id) {
    this.route.params.subscribe(params => {
      console.log(temp_add, parmnt_add, add_City, add_province);
      this.ac.updateAddrs(temp_add, parmnt_add, add_City, add_province, params['add_id']);
      // this.router.navigate(['college/get']);
    });

    this.openSnackBar();
  }

  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._matSnackBar.open('Address Details', 'Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
