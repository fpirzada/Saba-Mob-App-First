import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'check-box-layout-1',
    templateUrl: 'check-box.html'
})
export class CheckBoxLayout1 {
  @Input('data') data: any;
  @Input('events') events: any;

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }


  onEvent = (event: string, item: any): void => {
    if (this.events[event]) {
        this.events[event](item);
    }
  }
}
