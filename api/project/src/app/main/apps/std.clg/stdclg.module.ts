


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';

import { StdclgGetComponent } from './stdclg-get/stdclg-get.component';
import { StdclgEditComponent } from './stdclg-edit/stdclg-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';
import {
  MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatSortModule,
  MatTableModule, MatTabsModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';



const routes: Routes = [

  {
    path: 'get',
    component: StdclgGetComponent,
  },
  {
    path: 'edit/:std_clg_id',
    component: StdclgEditComponent
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    FuseSharedModule,
    FuseConfirmDialogModule,
    HttpModule,


    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,

    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    }),

    FuseSharedModule,
    FuseWidgetModule
  ],
  declarations: [StdclgGetComponent, StdclgEditComponent]
})
export class StdclgModule { }

