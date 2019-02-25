
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StdAddComponent } from './std-add/std-add.component';
import { StdGetComponent } from './std-get/std-get.component';
import { StdEditComponent } from './std-edit/std-edit.component';
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
import { StdFilterPipe } from './std.filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { Collegemodal } from 'app/main/apps/clg/clg.model';
import { ServiceService } from 'app/main/apps/clg/clg.service';
const routes: Routes = [

  {
    path: 'get',
    component: StdGetComponent,
  },
  {
    path: 'add',
    component: StdAddComponent
  },
  {
    path: 'edit/:std_Nic',
    component: StdEditComponent
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
    RouterModule.forChild(routes),

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
  declarations: [StdAddComponent, StdGetComponent, StdEditComponent, StdFilterPipe]
})
export class StdModule { }

