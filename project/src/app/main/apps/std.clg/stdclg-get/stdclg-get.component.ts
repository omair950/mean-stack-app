import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Stdclgmodal } from 'app/main/apps/std.clg/stdclg.model';
import { StdclgService } from 'app/main/apps/std.clg/stdclg.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-stdclg-get',
  templateUrl: './stdclg-get.component.html',
  styleUrls: ['./stdclg-get.component.scss']
})
export class StdclgGetComponent implements OnInit {

  // lcomments: Stdclgmodal[];
  lcomments = [];
  displayedColumns = ['std_clg_id', 'std_Nic', 'std_Name', 'clg_Name', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: StdclgService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Stdclgmodal[]) => {
      this.lcomments = data;

      const json = JSON.stringify(data);

    });
  }
  // tslint:disable-next-line:typedef
  deletestdclg(id) {
    this.ac.deletestdclg(id).subscribe(res => {
      if (res) {
        console.log('Deleted');
        // this._router.navigate(['/apps/clg/get']);
        this.ac.getdata().subscribe((data: any) => {
          this.lcomments = data;
          console.log(this.lcomments);
        });
      }
    });
  }
}
