import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz/quiz';
import {QuizService} from "../services/quiz.service";
@NgModule({
	declarations: [QuizComponent
    ],
	imports: [],
	exports: [QuizComponent],
	providers:[QuizService]
})
export class ComponentsModule {}
