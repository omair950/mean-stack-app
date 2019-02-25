
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';



const routes: Routes = [
    {
        path     : '**',
        component: ApplicationsComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ApplicationsComponent]
})
export class ApplicationsModule { }
