import { Component, Input, ViewChild } from '@angular/core';
import {IonicPage, Content, AlertController, NavController} from 'ionic-angular';
import {ActionSheetService} from "../../../services/action-sheet-service";

@IonicPage()
@Component({
    selector: 'action-sheet-layout-1',
    templateUrl: 'action-sheet.html'
})
export class ActionSheetLayout1 {
    // @Input() datas: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    data: any;

    active: boolean;
    headerImage:any = "";

    constructor(public alertCtrl: AlertController, private _data: ActionSheetService, private navCtrl: NavController) {

        // this.data = this.datas;
      this.data = this._data.getDataForLayout1();
        console.log(this.data);
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

    presentActionSheet() {
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
                        this.navCtrl.setRoot('QuizPage')
                    }
                }
            ]
        });
        confirm.present();
    }
}
