import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { DocsWorkingWithFuseServerComponent } from './server/server.component';
import { DocsWorkingWithFuseProductionComponent } from './production/production.component';
import { DocsWorkingWithFuseDirectoryStructureComponent } from './directory-structure/directory-structure.component';
import { DocsWorkingWithFuseUpdatingFuseComponent } from './updating-fuse/updating-fuse.component';
import { DocsWorkingWithFuseMultiLanguageComponent } from './multi-language/multi-language.component';
import { DocsWorkingWithFuseMaterialThemingComponent } from './material-theming/material-theming.component';
import { DocsWorkingWithFuseThemeLayoutsComponent } from './theme-layouts/theme-layouts.component';
import { DocsWorkingWithFusePageLayoutsComponent } from './page-layouts/page-layouts.component';

const routes = [
    {
        path: 'server',
        component: DocsWorkingWithFuseServerComponent
    },
    {
        path: 'production',
        component: DocsWorkingWithFuseProductionComponent
    },
    {
        path: 'directory-structure',
        component: DocsWorkingWithFuseDirectoryStructureComponent
    },
    {
        path: 'updating-fuse',
        component: DocsWorkingWithFuseUpdatingFuseComponent
    },
    {
        path: 'multi-language',
        component: DocsWorkingWithFuseMultiLanguageComponent
    },
    {
        path: 'material-theming',
        component: DocsWorkingWithFuseMaterialThemingComponent
    },
    {
        path: 'theme-layouts',
        component: DocsWorkingWithFuseThemeLayoutsComponent
    },
    {
        path: 'page-layouts',
        component: DocsWorkingWithFusePageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithFuseServerComponent,
        DocsWorkingWithFuseProductionComponent,
        DocsWorkingWithFuseDirectoryStructureComponent,
        DocsWorkingWithFuseUpdatingFuseComponent,
        DocsWorkingWithFuseMaterialThemingComponent,
        DocsWorkingWithFuseMultiLanguageComponent,
        DocsWorkingWithFuseThemeLayoutsComponent,
        DocsWorkingWithFusePageLayoutsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class WorkingWithFuseModule {
}
