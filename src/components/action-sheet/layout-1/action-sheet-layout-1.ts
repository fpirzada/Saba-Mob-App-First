import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Content, AlertController, NavController, App} from 'ionic-angular';
import {ActionSheetService} from "../../../services/action-sheet-service";

@IonicPage()
@Component({
    selector: 'action-sheet-layout-1',
    templateUrl: 'action-sheet.html'
})
export class ActionSheetLayout1 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

   //datas: any;

    active: boolean;
    headerImage:any = "";

    constructor(public alertCtrl: AlertController, private _data: ActionSheetService, private navCtrl: NavController,private app:App) {

        // this.data = this.datas;
     //this.data = this._data.getDataForLayout1();

    }

    ngOnInit(){
      console.log(this.data[0]);
      this.data = this.data[0];
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
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

    isClassActive() {
        return this.active;
    }

    subscribeToIonScroll() {
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe((d) => {
                if (d.scrollTop < 200) {
                    this.active = false;
                    return;
                }
                this.active = true;
            });
        }
    }

    presentActionSheet(data :any) {
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.app.getRootNav().setRoot('QuizPage',{quizData : data})
                    }
                }
            ]
        });
        confirm.present();
    }
}
