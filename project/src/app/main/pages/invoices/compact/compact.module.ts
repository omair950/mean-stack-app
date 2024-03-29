import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from '../invoice.service';
import { InvoiceCompactComponent } from './compact.component';

const routes = [
    {
        path: 'invoices/compact',
        component: InvoiceCompactComponent,
        resolve: {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceCompactComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    providers: [
        InvoiceService
    ]
})
export class InvoiceCompactModule {
}
