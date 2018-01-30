import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLayout1 } from './register-layout-1';
import {RegisterService} from "../../../services/register-service";
import {LoginAuthProvider} from "../../../providers/login-auth/login-auth";

@NgModule({
    declarations: [
        RegisterLayout1,
    ],
    imports: [
        IonicPageModule.forChild(RegisterLayout1),
    ],
    exports: [
        RegisterLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [RegisterService, LoginAuthProvider]
})

export class RegisterLayout1Module { }
