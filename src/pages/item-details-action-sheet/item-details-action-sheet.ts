import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {ActionSheetService} from "../../services/action-sheet-service";

@IonicPage()
@Component({
  templateUrl: 'item-details-action-sheet.html'
})
export class ItemDetailsPageActionSheet {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams,private _page: ActionSheetService) {
      // If we navigated to this page, we will have an item available as a nav param
      this.page = this._page.getDataForLayout1();
  }
}
