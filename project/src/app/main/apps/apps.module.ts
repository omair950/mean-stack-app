import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FuseSharedModule } from '@fuse/shared.module';
import { AcadAddComponent } from './acadamic/acad-add/acad-add.component';
import { AcadGetComponent } from './acadamic/acad-get/acad-get.component';
import { AcadEditComponent } from './acadamic/acad-edit/acad-edit.component';
import { AppAddComponent } from './application/app-add/app-add.component';
import { AppGetComponent } from './application/app-get/app-get.component';
import { AppEditComponent } from './application/app-edit/app-edit.component';
import { ProfAddComponent } from './profession/prof-add/prof-add.component';
import { ProfGetComponent } from './profession/prof-get/prof-get.component';
import { ProfEditComponent } from './profession/prof-edit/prof-edit.component';
import { SchAddComponent } from './schlorship/sch-add/sch-add.component';
import { SchGetComponent } from './schlorship/sch-get/sch-get.component';
import { SchEditComponent } from './schlorship/sch-edit/sch-edit.component';
import { StdAddComponent } from './student/std-add/std-add.component';
import { StdGetComponent } from './student/std-get/std-get.component';
import { StdEditComponent } from './student/std-edit/std-edit.component';
import { BillAddComponent } from './bill/bill-add/bill-add.component';
import { BillGetComponent } from './bill/bill-get/bill-get.component';
import { BillEditComponent } from './bill/bill-edit/bill-edit.component';
import { GaudAddComponent } from './gaudian/gaud-add/gaud-add.component';
import { GaudGetComponent } from './gaudian/gaud-get/gaud-get.component';
import { GaudEditComponent } from './gaudian/gaud-edit/gaud-edit.component';
import { SubjAddComponent } from './subject/subj-add/subj-add.component';
import { SubjGetComponent } from './subject/subj-get/subj-get.component';
import { SubjEditComponent } from './subject/subj-edit/subj-edit.component';
import { StdclgGetComponent } from './std.clg/stdclg-get/stdclg-get.component';
import { StdclgEditComponent } from './std.clg/stdclg-edit/stdclg-edit.component';
import { AddrsGetComponent } from './address/addrs-get/addrs-get.component';
import { AddrsEditComponent } from './address/addrs-edit/addrs-edit.component';
import { AccessComponent } from './access/access.component';



const routes = [

    // {
    //     path: 'colleges',
    //     loadChildren: './colleges/colleges.module#CollegesModule'
    // },
    // {
    //     path: 'students',
    //     loadChildren: './students/students.module#StudentsModule'
    // },
    // {
    //     path: 'scholorships',
    //     loadChildren: './scholorships/scholorships.module#ScholorshipsModule'
    // },
    {
        path: 'application',
        loadChildren: './application/appc.module#AppcModule'
    },
    {
        path: 'clg',
        loadChildren: './clg/clg.module#ClgModule'
    },
    {
        path: 'schlorship',
        loadChildren: './schlorship/sch.module#SchModule'
    },
    {
        path: 'profession',
        loadChildren: './profession/prof.module#ProfModule'
    },
    {
        path: 'student',
        loadChildren: './student/std.module#StdModule'
    },
    {
        path: 'acadamic',
        loadChildren: './acadamic/acad.module#AcadModule'
    },
    {
        path: 'bill',
        loadChildren: './bill/bill.module#BillModule'
    },
    {
        path: 'gaudian',
        loadChildren: './gaudian/gaud.module#GaudModule'
    },
    {
        path: 'subject',
        loadChildren: './subject/subj.module#SubjModule'
    },
    // {
    //     path: 'std.clg',
    //     loadChildren: './std.clg/stdclg.module#StdclgModule'
    // },
    {
        path: 'address',
        loadChildren: './address/addrs.module#AddrsModule'
    },
    {
        path: 'access',
        loadChildren: './access/access.module#AccessModule'
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        HttpModule
    ],
    declarations: [],
    exports: [RouterModule]

})
export class AppsModule {
}
