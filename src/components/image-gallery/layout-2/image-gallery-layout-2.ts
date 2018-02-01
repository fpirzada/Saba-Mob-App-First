import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImageGalleryService} from "../../../services/image-gallery-service";
import {QuizServiceProvider} from "../../../providers/quiz-service/quiz-service";

@IonicPage()
@Component({
  selector: 'image-gallery-layout-2',
  templateUrl: 'image-gallery-layout-2.html'
})

export class ImageGalleryLayout2 {
    @Input() data: any;
  @Input() events: any;

    animateItems = [];
    animateClass: any;

    questions: any;
    counter: number;


    @Input() topic:string ;

  //@ViewChild('topic') topics: any;

  constructor(public navCtrl: NavController, navParams: NavParams, private _data: ImageGalleryService, private dataService: QuizServiceProvider) {
    //this.data = this._data.getDataForLayout3();
      this.animateClass = { 'fade-in-left-item': true };


    //this.dataService.load();
    //console.log(this.questions);


  }

  openSubGallery(data: string){
    //sending the topic to the parallex file where it took the data from json.
    console.log(data + ' parallex sent data');
    this.navCtrl.push('ItemDetailsPageParallax', {Topics : data});
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;

      let that = this;
      that.data = changes['data'].currentValue;
      if (that.data && that.data.items) {
          that.animateItems = [];
          for (let i = 0; i < that.data.items.length; i++) {
              setTimeout(function () {
                  that.animateItems.push(that.data.items[i]);
              }, 300 * i);
          }
      }
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

}
