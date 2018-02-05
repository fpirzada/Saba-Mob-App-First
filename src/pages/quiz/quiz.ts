
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ITimer} from "../../interface/itimer";

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage implements OnInit{

  quizData: any;

  @Input() data;any;
  @ViewChild('slides') slides : any;
  @ViewChild('index') index: any;

  public hasAnswered : boolean = false;
  public score : number = 0;

  public slideOptions : any;
  public questions : any;



  appName = 'Ionic App';

  //timer

  timeInSeconds: number = 10;
  public timer: ITimer;
  counter: number;
//end timer

  onStart:boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private app:App) {

  }


  ngOnInit() {

    this.quizData = this.navParams.get('quizData');


    this.storage.get('starter').then(data => {
      this.onStart = data;
  if(this.onStart === true){
    console.log('already started');
  }
   else{

    console.log('ngOnInit call');
    this.slides.lockSwipes(true);
    this.questions = this.quizData;
    //   console.log(this.questions + 'questions')
    this.counter = this.questions.length;
    this.initTimer();

  }
    });

  }



  //timer




  hasFinished() {
    return this.timer.hasFinished;

  }

  initTimer() {
      this.storage.set('starter',true);

    this.timer = <ITimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    if(!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

    this.startTimer();
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);

      console.log(this.timer.displayTime);
      if(this.timer.displayTime == '00'){
        this.nextSlide();
      }
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var seconds = sec_num;

    var secondsString = '';
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return  secondsString;
  }

  continueTime(){
    this.timer = <ITimer>{
      seconds: this.timeInSeconds,
      runTimer: true,
      hasStarted: true,
      hasFinished: true,
      secondsRemaining: this.timeInSeconds
    };

    if(!this.timeInSeconds) { this.timeInSeconds = 0; }

    //this.startTimer();
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

//endtimer

  ionViewWillLoad(){

    console.log('ionViewWillLoad call');


  }

  ionViewDidLoad() {


  }

  public nextSlide() {
   // console.log(this.index.nativeElement.innerText);
    console.log(this.slides);
    //this.resumeTimer();
    console.log('nextSlide call');
    this.continueTime();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    console.log('nextSlide');
    this.counter--;
    if(this.counter == 0){
      this.pauseTimer();
    }

  }

  public selectAnswer(answer, question) {
    console.log('selectAnswer call');
    this.pauseTimer();
    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;

    if (answer.correct){

      this.score++;

    }

    setTimeout(() => {
      this.hasAnswered = false;
      // console.log(this.index.nativeElement.innerText);
      console.log(this.slides);
      //this.resumeTimer();
      console.log('nextSlide call');
      this.continueTime();
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.resumeTimer();
      this.slides.lockSwipes(true);
      console.log('nextSlide');
      this.counter--;
      if(this.counter == 0){
        this.pauseTimer();
      }

      // this.resumeTimer();
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
      console.log(rawAnswers[j].length)
      // if(i == 0){
      //   this.timer.runTimer = false;
      // }
    }
    console.log(rawAnswers);
    return rawAnswers;
  }

  public restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(true);
  }

  BackToChallanges(){
   // this. hasFinished();
    this.storage.remove('starter');
    this.app.getRootNav().setRoot('ItemDetailsPageTabs')
  }

}
