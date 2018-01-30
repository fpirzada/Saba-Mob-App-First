import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-wizard.html'
})
export class ItemDetailsPageWizard {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    console.log(' :page type');
      console.log(this.service + '  :service type');
    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);
        console.log(this.params +' :param type');
      this.service.load(this.page).subscribe(snapshot => {
        this.params.data = snapshot;
          console.log(this.params.data+ ' :param data type');
      });
    } else {
      navCtrl.setRoot("HomePage");
    }		
  }
}
