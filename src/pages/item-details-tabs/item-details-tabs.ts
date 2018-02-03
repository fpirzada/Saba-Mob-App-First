import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {TabsService} from "../../services/tabs-service";
import {ItemDetailsPageImageGallery} from "../item-details-image-gallery/item-details-image-gallery";


@IonicPage()
@Component({
  templateUrl: 'item-details-tabs.html'
})
export class ItemDetailsPageTabs {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams, private _tabs: TabsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = this._tabs.getDataForLayout1();
    this.service = navParams.get('service');

        this.params.data = [
          { page: "ItemDetailsPageImageGallery", icon: "ios-book", title: "Book" },
          { page: "TabPage2", icon: "ios-heart", title: "Favorite" }
        ];
      }

}
