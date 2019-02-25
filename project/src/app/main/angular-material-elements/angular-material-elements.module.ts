import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { MaterialModule } from './material.module';
import { EXAMPLE_LIST } from './example-components';
import { AngularMaterialElementsComponent } from './angular-material-elements.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: AngularMaterialElementsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        [...EXAMPLE_LIST],
        AngularMaterialElementsComponent,
        ExampleViewerComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MaterialModule,

        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class AngularMaterialElementsModule {
}

