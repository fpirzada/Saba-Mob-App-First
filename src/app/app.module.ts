import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppSettings } from '../services/app-settings'
import { LoginAuthProvider } from '../providers/login-auth/login-auth';
import { QuizServiceProvider } from '../providers/quiz-service/quiz-service';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginAuthProvider,
    QuizServiceProvider]
})
export class AppModule {
}
