import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegesComponent } from './colleges.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatTableModule, MatButtonToggleModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';




const routes: Routes = [
  {
    path: '**',
    component: CollegesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    FuseSharedModule,
    FuseConfirmDialogModule

  ],
  declarations: [CollegesComponent]
})
export class CollegesModule { }
