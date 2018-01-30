import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';
import {ImageGalleryService} from "../../services/image-gallery-service";
import {QuizServiceProvider} from "../../providers/quiz-service/quiz-service";

@IonicPage()
@Component({
    templateUrl: 'item-details-image-gallery.html'
})
export class ItemDetailsPageImageGallery {

    page: any;
    service: IService;
    params: any = {};
    private questions : any;
    private counter: number;

    constructor(public navCtrl: NavController, navParams: NavParams, private _data: ImageGalleryService, private dataService:QuizServiceProvider) {
        this.page = this._data.getDataForLayout3();


    }


}
