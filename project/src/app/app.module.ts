import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import {
    MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatSortModule,
    MatTableModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { HttpModule } from '@angular/http';
import { fuseConfig } from './fuse-config';

import { FakeDbService } from './fake-db/fake-db.service';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { LayoutModule } from './layout/layout.module';

import { RegisterComponent } from './main/pages/authentication/register/register.component';
import { Login2Component } from './main/pages/authentication/login-2/login-2.component';
// import { NavbarVerticalStyle1Module } from './layout/components/navbar/vertical/style-1/style-1.module';

const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    // {
    //     path: 'application',
    //     redirectTo: '/apps/application/get'
    // },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: Login2Component
    },
    {
        path: '**',
        component: Login2Component
    },

];

@NgModule({
    declarations: [
        AppComponent,
        Login2Component,
        RegisterComponent,

    ],
    imports: [


        RouterModule,

        MatTableModule,
        MatButtonModule,
        // NavbarVerticalStyle1Module,
        FuseSharedModule,
        MatCheckboxModule,
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatFormFieldModule,



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
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
