import { AcadService } from './../acad.service';
// import { Collegemodal, ServiceService } from 'app/main/apps/clg/clg.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { ActivatedRoute, Router } from '@angular/router';

import { merge, Observable, BehaviorSubject, fromEvent } from 'rxjs';
@Component({
  selector: 'app-acad-add',
  templateUrl: './acad-add.component.html',
  styleUrls: ['./acad-add.component.scss']
})
export class AcadAddComponent implements OnInit {
  productForm: FormGroup;

  constructor(private ac: AcadService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar) {
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
