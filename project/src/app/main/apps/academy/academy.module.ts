import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { AcademyCoursesComponent } from './courses/courses.component';
import { AcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from './courses.service';
import { AcademyCourseService } from './course.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
    {
        path: 'courses',
        component: AcademyCoursesComponent,
        resolve: {
            academy: AcademyCoursesService
        }
    },
    {
        path: 'courses/:courseId/:courseSlug',
        component: AcademyCourseComponent,
        resolve: {
            academy: AcademyCourseService
        }
    },
    {
        path: '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AcademyCoursesComponent,
        AcademyCourseComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers: [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class AcademyModule {
}
