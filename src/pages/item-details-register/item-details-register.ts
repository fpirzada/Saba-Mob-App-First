import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {RegisterService} from "../../services/register-service";

@IonicPage()
@Component({
  templateUrl: 'item-details-register.html'
})
export class ItemDetailsPageRegister {

  constructor(public navCtrl: NavController, navParams: NavParams, private regService: RegisterService) {

  }
}
