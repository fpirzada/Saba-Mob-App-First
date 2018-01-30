import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {WizardLayout1} from "../../components/wizard/layout-1/wizard-layout-1";
import {WizardService} from "../../services/wizard-service";
import {LoginLayout1} from "../../components/login/layout-1/login-layout-1";

@NgModule({
    declarations: [
        HomePage,
        WizardLayout1,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [WizardService]
})

export class HomePageModule { }
