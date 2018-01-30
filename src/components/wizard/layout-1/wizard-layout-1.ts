import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, Slides} from 'ionic-angular';
import {WizardService} from "../../../services/wizard-service";

@IonicPage()
@Component({
    selector: 'wizard-layout-1',
    templateUrl: 'wizard.html'
})
export class WizardLayout1 {
    data: any;
    events: any;
    @ViewChild('wizardSlider') slider: Slides;
    
    sliderOptions = { pager: true };
    path:boolean = false;
    prev:boolean = true;
    next:boolean = true;
    finish:boolean = true;

    constructor(private WizardLayout: WizardService, private navCtrl: NavController) {

       this.data = this.WizardLayout.getDataForLayout1();

        this.prev = false;
        this.next = true;
        this.finish = false;
    }

    changeSlide(index: number): void {
        if (index > 0) {
            this.slider.slideNext(300);
        } else {
            this.slider.slidePrev(300);
        }
    }

    slideHasChanged(index: number): void {
        try {
            this.prev = !this.slider.isBeginning();
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        } catch (e) { }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        this.data = changes['data'].currentValue;
        console.log(this.data + 'data');
      }

    onEvent() {
        this.navCtrl.push('ItemDetailsPageLogin');
    }
}
