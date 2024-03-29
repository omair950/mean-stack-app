import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { DocsGettingStartedIntroductionComponent } from './introduction/introduction.component';
import { DocsGettingStartedInstallationComponent } from './installation/installation.component';

const routes = [
    {
        path: 'introduction',
        component: DocsGettingStartedIntroductionComponent
    },
    {
        path: 'installation',
        component: DocsGettingStartedInstallationComponent
    }
];

@NgModule({
    declarations: [
        DocsGettingStartedIntroductionComponent,
        DocsGettingStartedInstallationComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class GettingStartedModule {
}
