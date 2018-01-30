import { Component, Input, ViewChild } from '@angular/core';
import {IonicPage, Content, NavController, NavParams} from 'ionic-angular';
import {ParallaxService} from "../../../services/parallax-service";
import {QuizServiceProvider} from "../../../providers/quiz-service/quiz-service";

@IonicPage()
@Component({
    selector: 'parallax-layout-1',
    templateUrl: 'parallax.html'
})
export class ParallaxLayout1 {
    data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    active: boolean;
    headerImage:any = "";
    Topic: string;
    @Input() topic:any;
    quizDatas: any;

    constructor(private _parallex: ParallaxService, private _navCtrl: NavController, private _paramCtrl:NavParams, private quizData:QuizServiceProvider) {
      this.Topic = this._paramCtrl.get('Topics');
      if(this.Topic == 'topic1'){
       this.quizDatas = this.quizData.load(this.Topic);
        console.log(this.quizDatas)
      }
      if(this.Topic == 'topic2'){
        this.quizDatas =  this.quizData.load(this.Topic);
        console.log(this.quizDatas)
      }
    }

    onEvent(event: string, item: any, e: any) {

        if(event == 'onItemClick'){
            this._navCtrl.push('ItemDetailsPageActionSheet');
            console.log(item)
        }
        // if (e) {
        //
        //     e.stopPropagation();
        // }
        // if (this.events[event]) {
        //     this.events[event](item);
        // }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    }

    ngAfterViewInit() {
        this.subscribeToIonScroll();
    }

    ngAfterViewChecked() {
        this.subscribeToIonScroll();
    }

    isClassActive() {
        return this.active;
    }

    subscribeToIonScroll() {
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe((d) => {
                if (d.scrollTop < 200 ) {
                    this.active = false;
                    return;
                }
                this.active = true;
            });
        }
    }
}
