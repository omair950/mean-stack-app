import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule, MatRippleModule, MatSlideToggleModule, MatTableModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

import { FileManagerService } from './file-manager.service';
import { FileManagerComponent } from './file-manager.component';
import { FileManagerDetailsSidebarComponent } from './sidebars/details/details.component';
import { FileManagerFileListComponent } from './file-list/file-list.component';
import { FileManagerMainSidebarComponent } from './sidebars/main/main.component';

const routes: Routes = [
    {
        path: '**',
        component: FileManagerComponent,
        children: [],
        resolve: {
            files: FileManagerService
        }
    }
];

@NgModule({
    declarations: [
        FileManagerComponent,
        FileManagerFileListComponent,
        FileManagerMainSidebarComponent,
        FileManagerDetailsSidebarComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTableModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers: [
        FileManagerService
    ]
})
export class FileManagerModule {
}
