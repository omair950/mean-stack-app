import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subjectmodal } from 'app/main/apps/subject/subj.model';
import { SubjService } from 'app/main/apps/subject/subj.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-subj-get',
  templateUrl: './subj-get.component.html',
  styleUrls: ['./subj-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SubjGetComponent implements OnInit {

  // lcomments: Subjectmodal[];
  lcomments = [];
  displayedColumns = ['sub_id', 'subj_Group_department', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: SubjService,
    public sub: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Subjectmodal[]) => {

      this.lcomments = data;
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  deleteSubject(id) {
    this.ac.deleteSubject(id).subscribe(res => {
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
    this.sub.open('Subject ', ' Deleted', {
      duration: 2000,
      panelClass: 'error3-dialog',


    });
  }
}
