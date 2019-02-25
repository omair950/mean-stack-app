import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { gaudianmodal } from 'app/main/apps/gaudian/gaud.model';
import { GaudService } from 'app/main/apps/gaudian/gaud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-gaud-get',
  templateUrl: './gaud-get.component.html',
  styleUrls: ['./gaud-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class GaudGetComponent implements OnInit {
  // lcomments: gaudianmodal[];
  lcomments = [];
  displayedColumns = ['guad_id', 'guad_Name', 'guad_Income', 'guad_cnic', 'profession', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: GaudService,
    public gaud: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: gaudianmodal[]) => {

      this.lcomments = data;
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  deleteGaudian(id) {
    this.ac.deleteGaudian(id).subscribe(res => {
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
    this.gaud.open('Guardian Details', ' Deleted', {
      duration: 2000,
      panelClass: 'error10-dialog',


    });
  }
}
