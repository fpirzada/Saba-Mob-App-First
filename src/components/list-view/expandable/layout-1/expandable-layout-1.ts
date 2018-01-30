import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import {ParallaxService} from "../../../../services/parallax-service";
import {ListViewExpandableService} from "../../../../services/list-view-expandable-service";

@IonicPage()
@Component({
    selector: 'expandable-layout-1',
    templateUrl: 'expandable.html'
})
export class ExpandableLayout1 {
    data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    constructor(private _parallex:ParallaxService,private ex:ListViewExpandableService) {
        // this.data = this._parallex.getDataForLayout1(); console.log(this.data)
    this.data = this.ex.getDataForLayout1();
    }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    toggleGroup(group: any) {
        group.show = !group.show;
    }

    isGroupShown(group: any) {
        return group.show;
    }
}
