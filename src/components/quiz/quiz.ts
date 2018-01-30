
import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {TimerComponent} from "../../components/timer/timer";
import {QuizService} from "../../services/quiz.service";

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.html'
})
export class QuizComponent implements OnInit{

    @ViewChild('slides') slides : any;

    public hasAnswered : boolean = false;
    public score : number = 0;

    public slideOptions : any;
    public questions : any;


    //@ViewChild(TimerComponent) timer: TimerComponent;

    appName = 'Ionic App';


    constructor(public navCtrl: NavController, public dataService: QuizService) {

    }

    ngOnInit() {
        console.log('ionViewDidLoad asdfasf')
        this.slides.lockSwipes(true);
        this.dataService.load().then((data) => {
            data.map((question) => {
                let originalOrder = question.answers;
                question.answers = this.randomizeAnswers(originalOrder);
                return question;
            });

            this.questions = data;

        });

    }

    ionViewWillLoad(){
        console.log('ionViewWillLoad call')

    }

    ionViewDidLoad() {


    }

    public nextSlide() {
        console.log('nextSlide call')
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    public selectAnswer(answer, question) {
        console.log('selectAnswer call')
        this.hasAnswered = true;
        answer.selected = true;
        question.flashCardFlipped = true;

        if (answer.correct)
            this.score++;

        setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 1000);
    }

    public randomizeAnswers(rawAnswers: any[]): any[] {
        for (let i = rawAnswers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }

        return rawAnswers;
    }

    public restartQuiz() {
        this.score = 0;
        this.slides.lockSwipes(false);
        this.slides.slideTo(0, 1000);
        this.slides.lockSwipes(true);
    }


}

