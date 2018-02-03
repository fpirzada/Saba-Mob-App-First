import { Component, Input } from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {LoginService} from "../../../services/login-service";
import {LoginAuthProvider} from "../../../providers/login-auth/login-auth";

@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})



export class LoginLayout1 {

  responseData : any;
  userData = {"username": "","password": ""};

     data: any;
    events: any;

    dataFiles: any = {
        title: "Select",
        layout1: {
            "title" : "City",
            "selectedItem":12,
            "header" : "Basic dialog",
            "items" : [
                {"id" : 12, "title": "New York"},
                {"id" : 14, "title": "Paris"},
                {"id" : 13, "title": "Amsterdam"},
                {"id" : 15, "title": "Gotham City"}
            ]
        }
    }

    public username: string;
    public password: string;

    constructor(private loginService: LoginService, private navCtrl: NavController, private authService:LoginAuthProvider,private app:App) {
        this.data = this.loginService.getDataForLayout1();
    }

    onEvent(name: string){
        if(name == 'onRegister'){
            this.navCtrl.push('ItemDetailsPageRegister')
        }
        if(name == 'onLogin'){
          this.signin();
        }
    }


  signin(){
    this.authService.postData(this.userData,'login')
      .then((result) => {
        this.responseData = result;
        if(this.responseData.userData){
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.app.getRootNav().push('ItemDetailsPageTabs');
        }
        else{ console.log("User already exists"); }
      }, (err) => {
        // Error log
      });
  }

}
