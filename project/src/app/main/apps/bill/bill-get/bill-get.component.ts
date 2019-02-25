import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Billmodal } from 'app/main/apps/bill/bill.model';
import { BillService } from 'app/main/apps/bill/bill.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-bill-get',
  templateUrl: './bill-get.component.html',
  styleUrls: ['./bill-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class BillGetComponent implements OnInit {


  // lcomments: Billmodal[];
  lcomments = [];
  displayedColumns = ['bill_id', 'std_Nic', 'bill_last_month', 'bill_Average', 'bill_address', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: BillService,
    public bill: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Billmodal[]) => {

      this.lcomments = data;
    });
  }
  // tslint:disable-next-line:typedef
  deleteBill(id) {
    this.ac.deleteBill(id).subscribe(res => {
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
    this.bill.open('Bill Details', ' Deleted', {
      duration: 2000,
      panelClass: 'error8-dialog',


    });
  }
}
