import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { IService } from '../../services/IService';
import {NavController} from "ionic-angular";
import {NavParams} from "ionic-angular";
import {LoginService} from "../../services/login-service";

@IonicPage()
@Component({
  templateUrl: 'item-details-login.html'
})
export class ItemDetailsPageLogin {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController,
              navParams: NavParams,
              private loginService: LoginService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = this.loginService.getDataForLayout1();

  }
}
