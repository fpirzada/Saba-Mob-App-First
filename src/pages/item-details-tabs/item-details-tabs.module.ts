import {NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler} from '@angular/core';
import { IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { ItemDetailsPageTabs } from './item-details-tabs';

import { TabsLayout1Module } from '../../components/tabs/layout-1/tabs-layout-1.module';
import { TabsLayout2Module } from '../../components/tabs/layout-2/tabs-layout-2.module';
import { TabsLayout3Module } from '../../components/tabs/layout-3/tabs-layout-3.module';
import {TabsService} from "../../services/tabs-service";

@NgModule({
    declarations: [
        ItemDetailsPageTabs,
    ],
    imports: [
        IonicPageModule.forChild(ItemDetailsPageTabs),
        TabsLayout1Module, TabsLayout2Module, TabsLayout3Module,
    ], exports: [
        ItemDetailsPageTabs
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [TabsService,{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})

export class ItemDetailsPageTabsModule { }

