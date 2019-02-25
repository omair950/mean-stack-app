import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { HttpModule } from '@angular/http';
import { fuseConfig } from './fuse-config';
import { LoginModule } from './login-reg/login-reg/login.module';
import { FakeDbService } from './fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { LayoutModule } from './layout/layout.module';
import { LoginRegComponent } from './login-reg/login-reg/login-reg.component';
import { ClgGetComponent } from './main/apps/clg/clg-get/clg-get.component';
import { ClgModule } from './main/apps/clg/clg.module';
const appRoutes: Routes = [
    // {
    //     path: 'apps',
    //     loadChildren: './main/apps/apps.module#AppsModule'
    // },
    // {
    //     path: 'check',
    //     redirectTo: '/apps/application/get'
    // },
    {
        path: 'login',
        component: LoginRegComponent,
    },
    {
        path: 'college',
        component: ClgGetComponent,
    },
    {
        path: '**',
        component: LoginRegComponent,
    }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
        LoginModule,
        ClgModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
