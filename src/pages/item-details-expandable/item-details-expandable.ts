import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {ListViewExpandableService} from "../../services/list-view-expandable-service";

@IonicPage()
@Component({
    templateUrl: 'item-details-expandable.html',
})
export class ItemDetailsPageExpandable {

    page: any;
    service: IService;
    params: any = {};

    constructor(public navCtrl: NavController, navParams: NavParams, private _expand:ListViewExpandableService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.params = this._expand.getDataForLayout2();
        }



}
