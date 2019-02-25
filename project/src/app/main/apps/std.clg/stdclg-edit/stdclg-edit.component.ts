import { Stdclgmodal } from 'app/main/apps/std.clg/stdclg.model';
import { StdclgService } from 'app/main/apps/std.clg/stdclg.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
@Component({
  selector: 'app-stdclg-edit',
  templateUrl: './stdclg-edit.component.html',
  styleUrls: ['./stdclg-edit.component.scss'],
  animations: fuseAnimations

})
export class StdclgEditComponent implements OnInit {
  clg_detail: any;
  datashow: any = [];
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private ac: StdclgService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      clg_Name: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ac.geteditdata(params['std_clg_id']).subscribe((data: any) => {
        this.datashow = data[0];
        console.log(data[0].clg_Name);

      });
    });
    this.ac.getdataclg().subscribe((clgdata: Stdclgmodal[]) => {

      this.clg_detail = clgdata;

    });
  }
  // tslint:disable-next-line:typedef
  updatestdclg(clg_id, std_clg_id) {

    this.route.params.subscribe(params => {
      this.ac.updatestdclg(clg_id, params['std_clg_id']);

      console.log(clg_id, params['std_clg_id']);

    });

  }
}
