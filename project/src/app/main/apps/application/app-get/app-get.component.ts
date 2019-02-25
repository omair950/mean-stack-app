import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { AppService } from 'app/main/apps/application/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-app-get',
  templateUrl: './app-get.component.html',
  styleUrls: ['./app-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AppGetComponent implements OnInit {
  myItem: any;
  item: any;
  token: any;
  newtoken: any;
  // datashow: any;
  lcomments = [];
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['app_id', 'std_Nic', 'std_Name', 'guad_Income', 'bill_Average', 'percentage_last_exam', 'current_degree_tittle', 'current_study_year', 'current_degree_fee_amount', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router, private _router: Router,
    private ac: AppService,
    public app: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this._router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: any[]) => {

      this.lcomments = data;
      console.log(data)

    });
  }
  // tslint:disable-next-line:typedef
  deleteApp(id) {
    this.ac.deleteApp(id).subscribe(res => {
      if (res) {
        console.log('Deleted');
        // this._router.navigate(['/apps/clg/get']);
        this.ac.getdata().subscribe((data: any) => {
          this.lcomments = data;
          console.log(this.lcomments);
        });
      }

    });
    this.openSnackBar(id);
  }
  // tslint:disable-next-line:typedef
  openSnackBar(id) {
    this.app.open('Application Details', ' Deleted', {
      duration: 2000,
      panelClass: 'error7-dialog',


    });
  }
}
