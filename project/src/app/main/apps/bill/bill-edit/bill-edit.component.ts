import { BillService } from './../bill.service';
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
import { CustomValidator } from 'app/main/apps/CustomValidation';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  datashow: any = [];
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: BillService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
    this.productForm = new FormGroup({

      bill_last_month: new FormControl(),
      bill_Average: new FormControl(),
      bill_address: new FormControl(),

    });

    this.productForm = this._formBuilder.group({
      'bill_last_month': ['', [Validators.required, CustomValidator.numberValidator]],
      'bill_Average': ['', [Validators.required, CustomValidator.numberValidator]],
      'bill_address': ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['bill_id']).subscribe((data: any) => {
        this.datashow = data[0];
        console.log(data[0]);

      });
    });
  }
  // tslint:disable-next-line:typedef
  updateBill(bill_last_month, bill_Average, bill_address, bill_id) {
    this.route.params.subscribe(params => {
      console.log(bill_last_month, bill_Average, bill_address);
      this.ac.updateBill(bill_last_month, bill_Average, bill_address, params['bill_id']);
      // this.router.navigate(['college/get']);
    });
    this.openSnackBar();
  }

  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._matSnackBar.open('Bill Details', ' Updated', {
      duration: 2000,
      panelClass: 'success-dialog',


    });
  }
}
