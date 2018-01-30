import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {ParallaxService} from "../../services/parallax-service";

@IonicPage()
@Component({
  templateUrl: 'item-details-parallax.html'
})
export class ItemDetailsPageParallax {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams, private paralex:ParallaxService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = this.paralex.getDataForLayout1();
    // this.service = navParams.get('service');
    // if (this.service) {
    //   this.params = this.service.prepareParams(this.page, navCtrl);
    //   this.params.data = this.service.load(this.page);
    // } else {
    //   navCtrl.setRoot("HomePage");
    // }
  }
}
