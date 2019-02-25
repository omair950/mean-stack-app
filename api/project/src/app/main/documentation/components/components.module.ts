import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseCountdownModule, FuseHighlightModule, FuseMaterialColorPickerModule, FuseWidgetModule } from '@fuse/components';
import { DocsComponentsCardsComponent } from './cards/cards.component';
import { DocsComponentsCountdownComponent } from './countdown/countdown.component';
import { DocsComponentsHighlightComponent } from './highlight/highlight.component';
import { DocsComponentsMaterialColorPickerComponent } from './material-color-picker/material-color-picker.component';
import { DocsComponentsNavigationComponent } from './navigation/navigation.component';
import { DocsComponentsProgressBarComponent } from './progress-bar/progress-bar.component';
import { DocsComponentsSearchBarComponent } from './search-bar/search-bar.component';
import { DocsComponentsSidebarComponent } from './sidebar/sidebar.component';
import { DocsComponentsShortcutsComponent } from './shortcuts/shortcuts.component';
import { DocsComponentsWidgetComponent } from './widget/widget.component';

const routes = [
    {
        path: 'cards',
        component: DocsComponentsCardsComponent
    },
    {
        path: 'countdown',
        component: DocsComponentsCountdownComponent
    },
    {
        path: 'highlight',
        component: DocsComponentsHighlightComponent
    },
    {
        path: 'material-color-picker',
        component: DocsComponentsMaterialColorPickerComponent
    },
    {
        path: 'navigation',
        component: DocsComponentsNavigationComponent
    },
    {
        path: 'progress-bar',
        component: DocsComponentsProgressBarComponent
    },
    {
        path: 'search-bar',
        component: DocsComponentsSearchBarComponent
    },
    {
        path: 'sidebar',
        component: DocsComponentsSidebarComponent
    },
    {
        path: 'shortcuts',
        component: DocsComponentsShortcutsComponent
    },
    {
        path: 'widget',
        component: DocsComponentsWidgetComponent
    }
];

@NgModule({
    declarations: [
        DocsComponentsCardsComponent,
        DocsComponentsCountdownComponent,
        DocsComponentsHighlightComponent,
        DocsComponentsMaterialColorPickerComponent,
        DocsComponentsNavigationComponent,
        DocsComponentsProgressBarComponent,
        DocsComponentsSearchBarComponent,
        DocsComponentsSidebarComponent,
        DocsComponentsShortcutsComponent,
        DocsComponentsWidgetComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        NgxChartsModule,

        FuseSharedModule,

        FuseCountdownModule,
        FuseHighlightModule,
        FuseMaterialColorPickerModule,
        FuseWidgetModule
    ]
})
export class ComponentsModule {
}
