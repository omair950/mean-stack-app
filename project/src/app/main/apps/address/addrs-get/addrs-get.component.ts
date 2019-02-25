import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Addressmodal } from 'app/main/apps/address/addrs.model';
import { AddService } from 'app/main/apps/address/addrs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-addrs-get',
  templateUrl: './addrs-get.component.html',
  styleUrls: ['./addrs-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AddrsGetComponent implements OnInit {


  // lcomments: Addressmodal[];
  lcomments = [];
  displayedColumns = ['add_id', 'std_Nic', 'temp_add', 'parmnt_add', 'add_City', 'add_province', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: AddService,
    public addrs: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Addressmodal[]) => {

      this.lcomments = data;
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  deleteAddrs(id) {
    this.ac.deleteAddrs(id).subscribe(res => {
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
    this.addrs.open('Address Details', ' Deleted', {
      duration: 2000,
      panelClass: 'error5-dialog',


    });
  }
}
