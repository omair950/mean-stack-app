import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { KnowledgeBaseService } from './knowledge-base.service';
import { KnowledgeBaseComponent } from './knowledge-base.component';
import { KnowledgeBaseArticleComponent } from './dialogs/article/article.component';

const routes = [
    {
        path: 'knowledge-base',
        component: KnowledgeBaseComponent,
        resolve: {
            knowledgeBase: KnowledgeBaseService
        }
    }
];

@NgModule({
    declarations: [
        KnowledgeBaseComponent,
        KnowledgeBaseArticleComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,

        FuseSharedModule
    ],
    providers: [
        KnowledgeBaseService
    ],
    entryComponents: [
        KnowledgeBaseArticleComponent
    ]
})
export class KnowledgeBaseModule {
}
