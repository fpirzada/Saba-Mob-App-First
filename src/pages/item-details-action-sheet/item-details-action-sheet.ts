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
  params: any[];
 // hello = 'working'

  constructor(public navCtrl: NavController,private navParams: NavParams,private _page: ActionSheetService) {
      // If we navigated to this page, we will have an item available as a nav param
    //this.navParams.get(Data);
      this.page = this.navParams.get('dataBook');
     // this.page = Object.keys(this.params);
      //this.page = JSON.parse(this.params);
      console.log(JSON.stringify(this.page) + ' page test')
    //let test = this.navParams.get('dataBook');
    // console.log(test.headerImage + 'test')
  }
}
