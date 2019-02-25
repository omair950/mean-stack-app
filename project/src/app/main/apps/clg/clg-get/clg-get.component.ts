
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Collegemodal } from 'app/main/apps/clg/clg.model';
import { ServiceService } from 'app/main/apps/clg/clg.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';


import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';

import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-clg-get',
  templateUrl: './clg-get.component.html',
  styleUrls: ['./clg-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations

})
export class ClgGetComponent implements OnInit {

  lcomments = [];
  displayedColumns = ['clg_id', 'clg_Name', 'edit_button'];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: ServiceService,
    private _router: Router,
    public clg: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: any) => {
      this.lcomments = data;
      console.log(this.lcomments);
    });
  }





  deleteCollege(id): void {
    this.openSnackBar(id);
    this.ac.deleteCollege(id).subscribe(res => {

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
    this.clg.open('College ', ' Deleted', {
      duration: 2000,
      panelClass: 'error9-dialog',


    });
  }

}
