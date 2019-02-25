import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Professionmodal } from 'app/main/apps/profession/prof.model';
import { ProService } from 'app/main/apps/profession/prof.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-prof-get',
  templateUrl: './prof-get.component.html',
  styleUrls: ['./prof-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProfGetComponent implements OnInit {

  // lcomments: Professionmodal[];
  lcomments = [];
  displayedColumns = ['pro_id', 'profession', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: ProService,
    public pro: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Professionmodal[]) => {
      this.lcomments = data;

      const json = JSON.stringify(data);

    });
  }
  // tslint:disable-next-line:typedef
  deleteProfession(id) {
    this.ac.deleteProfession(id).subscribe(res => {
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
    this.pro.open('Profession', ' Deleted', {
      duration: 2000,
      panelClass: 'error11-dialog',


    });
  }
}
