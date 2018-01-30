import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableLayout1 } from './expandable-layout-1';
import {ListViewExpandableService} from "../../../../services/list-view-expandable-service";
import {ParallaxService} from "../../../../services/parallax-service";

@NgModule({
    declarations: [
        ExpandableLayout1,
    ],
    imports: [
        IonicPageModule.forChild(ExpandableLayout1),
    ],
    exports: [
        ExpandableLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[ParallaxService,ListViewExpandableService]
})

export class ExpandableLayout1Module { }
