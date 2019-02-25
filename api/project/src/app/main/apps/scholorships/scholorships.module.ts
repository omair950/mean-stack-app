import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScholorshipsComponent } from './scholorships.component';



const routes: Routes = [
    {
        path     : '**',
        component: ScholorshipsComponent
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ScholorshipsComponent]
})
export class ScholorshipsModule { }
