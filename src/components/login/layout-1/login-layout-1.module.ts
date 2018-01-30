import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLayout1 } from './login-layout-1';
import {LoginService} from "../../../services/login-service";
import {LoginAuthProvider} from "../../../providers/login-auth/login-auth";

@NgModule({
    declarations: [
        LoginLayout1,
    ],
    imports: [
        IonicPageModule.forChild(LoginLayout1),
    ],
    exports: [
        LoginLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers :[LoginService, LoginAuthProvider]
})

export class LoginLayout1Module { }
