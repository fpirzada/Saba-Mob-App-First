import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizPage } from './quiz';
import {QuizComponent} from "../../components/quiz/quiz";
import {QuizService} from "../../services/quiz.service";

@NgModule({
  declarations: [
    QuizPage,
      QuizComponent

  ],
  imports: [
    IonicPageModule.forChild(QuizPage)
  ],
    providers: [QuizService]
})
export class QuizPageModule {}
