import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Acadamicmodal } from 'app/main/apps/acadamic/acad.model';
import { AcadService } from 'app/main/apps/acadamic/acad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar } from '@angular/material';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-acad-get',
  templateUrl: './acad-get.component.html',
  styleUrls: ['./acad-get.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AcadGetComponent implements OnInit {

  // lcomments: Acadamicmodal[];
  lcomments = [];
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['acad_id', 'std_Nic', 'last_degree_tittle', 'board_university_last_exam', 'grade_last_exam', 'percentage_last_exam', 'year_passing_last_exam', 'admission_date_current_degree', 'current_degree_tittle', 'current_study_year', 'current_degree_fee_amount', 'edit_button'];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router,
    private ac: AcadService,
    public acad: MatSnackBar
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.ac.getdata().subscribe((data: Acadamicmodal[]) => {

      this.lcomments = data;
      console.log(this.lcomments);

    });

  }
  // tslint:disable-next-line:typedef
  deleteAcad(id) {
    this.ac.deleteAcad(id).subscribe(res => {
      if (res) {
        console.log('Deleted');
        // this._router.navigate(['/apps/clg/get']);
        this.ac.getdata().subscribe((data: any) => {
          this.lcomments = data;
          console.log(this.lcomments);
        });
      }
    });

    // tslint:disable-next-line:no-shadowed-variable
    // const lcomments = this.lcomments.find(item => item.acad_id === id);
    // this.lcomments.splice(this.lcomments.indexOf(lcomments));
    // console.log(lcomments);

    this.openSnackBar(id);

  }

  // tslint:disable-next-line:typedef
  openSnackBar(id) {
    this.acad.open('Academic Details', ' Deleted', {
      duration: 2000,
      panelClass: 'error4-dialog',


    });
  }
  // tslint:disable-next-line:typedef
  // fun() {
  //   this.ac.getdata().subscribe((data: Acadamicmodal[]) => {

  //     this.lcomments = data;
  //     // tslint:disable-next-line:no-shadowed-variable
  //     // const item = this.lcomments.find(item => item.acad_id);
  //     // this.lcomments.splice(this.lcomments.indexOf(item));
  //     // console.log(item);
  //   });
  // }
}
