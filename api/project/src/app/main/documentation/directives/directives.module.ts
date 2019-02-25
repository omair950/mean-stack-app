import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { DocsDirectivesFuseIfOnDomComponent } from './fuseIfOnDom/fuse-if-on-dom.component';
import { DocsDirectivesFuseInnerScrollComponent } from './fuseInnerScroll/fuse-inner-scroll.component';
import { DocsDirectivesFuseMatSidenavComponent } from './fuseMatSidenav/fuse-mat-sidenav.component';
import { DocsDirectivesFusePerfectScrollbarComponent } from './fusePerfectScrollbar/fuse-perfect-scrollbar.component';

const routes = [
    {
        path: 'fuse-if-on-dom',
        component: DocsDirectivesFuseIfOnDomComponent
    },
    {
        path: 'fuse-inner-scroll',
        component: DocsDirectivesFuseInnerScrollComponent
    },
    {
        path: 'fuse-mat-sidenav',
        component: DocsDirectivesFuseMatSidenavComponent
    },
    {
        path: 'fuse-perfect-scrollbar',
        component: DocsDirectivesFusePerfectScrollbarComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesFuseIfOnDomComponent,
        DocsDirectivesFuseInnerScrollComponent,
        DocsDirectivesFuseMatSidenavComponent,
        DocsDirectivesFusePerfectScrollbarComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class DirectivesModule {
}
