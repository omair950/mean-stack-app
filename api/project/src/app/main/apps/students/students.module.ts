import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';



const routes: Routes = [
    {
        path     : '**',
        component: StudentsComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
