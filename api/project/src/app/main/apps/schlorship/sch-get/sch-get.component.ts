import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Schlorshipmodal } from 'app/main/apps/schlorship/sch.model';
import { SchService } from 'app/main/apps/schlorship/sch.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-sch-get',
  templateUrl: './sch-get.component.html',
  styleUrls: ['./sch-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class SchGetComponent implements OnInit {
  // lcomments: Schlorshipmodal[];
  lcomments = [];
  displayedColumns = ['sch_id', 'sch_Name', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: SchService,
    public sch: MatSnackBar
  ) { }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Schlorshipmodal[]) => {
      this.lcomments = data;

      const json = JSON.stringify(data);

    });
  }
  // tslint:disable-next-line:typedef
  deleteSchlorship(id) {
    this.ac.deleteSchlorship(id).subscribe(res => {
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
    this.sch.open('Scholarship', ' Deleted', {
      duration: 2000,
      panelClass: 'error1-dialog',


    });
  }
}