import { Component, Input } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RegisterService} from "../../../services/register-service";
import {LoginAuthProvider} from "../../../providers/login-auth/login-auth";
import {ItemDetailsPageTabs} from "../../../pages/item-details-tabs/item-details-tabs";

@IonicPage()
@Component({
    selector: 'register-layout-1',
    templateUrl: 'register.html'
})
export class RegisterLayout1 {
            data: any;
    @Input() events: any;


  studentOrNot: any = {
    title: "Are you student ?",
    layout1: {
      "title": "Status",
      "selectedItem": 12,
      "header": "Basic dialog",
      "items": [
        {"id": 1, "title": "1-6"},
        {"id": 2, "title": "7-9"},
        {"id": 3, "title": "10-12"},
        {"id": 4, "title": "elder"}
      ]
    }
  };
  studentOf1to6: any = {
    title: "Which Class ?",
    layout1: {
      "title": "Student",
      "selectedItem": 12,
      "header": "Basic dialog",
      "items": [
        {"id": 1, "title": "class 1"},
        {"id": 2, "title": "class 2"},
        {"id": 3, "title": "class 3"},
        {"id": 4, "title": "class 4"},
        {"id": 5, "title": "class 5"},
        {"id": 6, "title": "class 6"}
      ]
    }
  };
  studentOf7to9: any = {
    title: "Which Class ?",
    layout1: {
      "title": "Student",
      "selectedItem": 12,
      "header": "Basic dialog",
      "items": [
        {"id": 7, "title": "class 7"},
        {"id": 8, "title": "class 8"},
        {"id": 9, "title": "class 9"}
      ]
    }
  };
  studentOf10to12: any = {
    title: "Which Class ?",
    layout1: {
      "title": "Student",
      "selectedItem": 12,
      "header": "Basic dialog",
      "items": [
        {"id": 10, "title": "class 10"},
        {"id": 11, "title": "class 11"},
        {"id": 12, "title": "class 12"}
      ]
    }
  };

  responseData : any;
  userData = {
    "username": "",
    "password": "",
    "name": "",
    "email": "",
    "studentOrNot":"",
    "studentOfClass":"",
    "state":"",
    "city":""};

    // username: string;
    // password: string;
    // city: string;
    // email: string;





    constructor(private regService: RegisterService, private authService: LoginAuthProvider, private navCtrl: NavController) {
        this.data = this.regService.getDataForLayout1()


    }

    onEvent = (event: string): void => {
       if(event == 'onRegister'){
           console.log('Registration is working');
         this.signupp();
       }
        // if (this.events[event]) {
        //     this.events[event]({
        //         'username': this.username,
        //         'password': this.password,
        //         'city': this.city,
        //         'email': this.email,
        //         'criteria' : this.dataFiles.selectedItem
        //     });
        // }
    }

  signupp(){
    this.authService.postData(this.userData,'signup')
      .then((result) => {
        this.responseData = result;
        if(this.responseData.userData){
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.push('ItemDetailsPageTabs');
        }
        else{ console.log("User already exists"); }
      }, (err) => {
        // Error log
        console.log('there is something wrong in the registration ')
      });
    //console.log(this.studentOrNot)
  }

}
