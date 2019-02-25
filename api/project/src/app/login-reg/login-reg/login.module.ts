
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginRegComponent } from './login-reg.component';

// const routes = [

//     {
//         path: 'get',
//         component: LoginRegComponent
//     }
// ]
@NgModule({
    imports: [
        // RouterModule.forChild(routes),
        FuseSharedModule,
        HttpModule
    ],
    declarations: [
        LoginRegComponent
    ],
    exports: [RouterModule, LoginRegComponent]

})

export class LoginModule {
}
