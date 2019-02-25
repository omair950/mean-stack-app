import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

import * as fromGuards from './store/guards';
import { MailNgrxStoreModule } from './store/store.module';
import { MailNgrxComponent } from './mail.component';
import { MailNgrxListComponent } from './mail-list/mail-list.component';
import { MailNgrxListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { MailNgrxDetailsComponent } from './mail-details/mail-details.component';
import { MailNgrxMainSidebarComponent } from './sidebars/main/main-sidebar.component';
import { MailNgrxComposeDialogComponent } from './dialogs/compose/compose.component';
import { MailNgrxService } from './mail.service';

const routes: Routes = [
    {
        path: 'label/:labelHandle',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'filter/:filterHandle',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: ':folderHandle',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: ':folderHandle/:mailId',
        component: MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations: [
        MailNgrxComponent,
        MailNgrxListComponent,
        MailNgrxListItemComponent,
        MailNgrxDetailsComponent,
        MailNgrxMainSidebarComponent,
        MailNgrxComposeDialogComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,

        TranslateModule,

        FuseSharedModule,
        FuseSidebarModule,

        MailNgrxStoreModule
    ],
    providers: [
        MailNgrxService,
        fromGuards.ResolveGuard
    ],
    entryComponents: [MailNgrxComposeDialogComponent]
})
export class MailNgrxModule {
}
