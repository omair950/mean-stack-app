import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Studentmodal } from 'app/main/apps/student/std.model';
import { StdService } from 'app/main/apps/student/std.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-std-get',
  templateUrl: './std-get.component.html',
  styleUrls: ['./std-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class StdGetComponent implements OnInit {
  // lcomments: Studentmodal[];
  lcomments = [];
  displayedColumns = ['std_Nic', 'std_Name', 'std_F_Name', 'std_DOB', 'std_Phone_no', 'std_Email', 'std_Gender', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: StdService,
    public std: MatSnackBar
  ) {
    let details = localStorage.getItem("details")

    if (details === null) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Studentmodal[]) => {

      this.lcomments = data;
    });
  }
  // tslint:disable-next-line:typedef
  deleteStudent(std_Nic) {
    this.ac.deleteStudent(std_Nic).subscribe(res => {
      if (res) {
        console.log('Deleted');
        // this._router.navigate(['/apps/clg/get']);
        this.ac.getdata().subscribe((data: any) => {
          this.lcomments = data;
          console.log(this.lcomments);
        });
      }
    });
    this.openSnackBar();
  }
  // tslint:disable-next-line:typedef
  openSnackBar() {
    this.std.open('Student ', ' Deleted', {
      duration: 2000,
      panelClass: 'error2-dialog',


    });
  }
}
