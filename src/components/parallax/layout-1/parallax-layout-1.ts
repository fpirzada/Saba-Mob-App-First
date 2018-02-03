import { Component, Input, ViewChild } from '@angular/core';
import {IonicPage, Content, NavController, NavParams} from 'ionic-angular';
import {ParallaxService} from "../../../services/parallax-service";
import {QuizServiceProvider} from "../../../providers/quiz-service/quiz-service";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'parallax-layout-1',
    templateUrl: 'parallax.html'
})
export class ParallaxLayout1 {
    data: any;
    chapters: any[]=[];
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    active: boolean;
    headerImage:any = "";
    Topic: string;
    quizDatas: any;
    checkTopic1: boolean = false;
     bookNameLocalStore: string;


    constructor(private _parallex: ParallaxService,
                private _navCtrl: NavController,
                private _paramCtrl:NavParams,
                private quizData:QuizServiceProvider,
                private storage: Storage) {

      this.Topic = this._paramCtrl.get('Topics');
      if(this.Topic == 'topic1'){

        this.storage.get('bookName1').then(data => {
          this.bookNameLocalStore = data
        })
// check if its enter on this game with which book
        if(this.bookNameLocalStore !== null){
          this.storage.get('bookName1')
            .then(datas => {
              console.log('stable')
              this.quizDatas = this.quizData.load(this.Topic).subscribe(data => {
                this.data = data.subject;
                this.data = this.data[0].books;
                console.log(this.data);
                for (let bookname of this.data) {
                 if(bookname.bookName == datas) {
                   this.data = bookname.chapters
                 }
                }
              })
          })
        }else {
// enter to the book for the first time
          this.quizDatas = this.quizData.load(this.Topic).subscribe(data => {
            this.data = data.subject;
            this.data = this.data[0].books;
            console.log(this.data);
            let randomIndex = Math.floor((Math.random() * this.data.length));
            // console.log(this.data[randomIndex]);
            this.data = this.data[randomIndex];
            console.log(this.data.bookName);
            this.storage.set('bookName1', this.data.bookName);
            this.data = this.data.chapters;
            console.log(this.data);
           // this.storage.set('book',this.data)

          });
        }
      }


      if(this.Topic == 'topic2'){
      this.quizData.load(this.Topic).subscribe(data => {
        this.data = data.subject;
        console.log(this.data);
      });
      }
    }

    onEvent(event: string, item: any, e: any) {

        if(event == 'onItemClick'){
          console.log(JSON.stringify(item) + 'item');
            this._navCtrl.push('ItemDetailsPageActionSheet', {dataBook :item});
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
