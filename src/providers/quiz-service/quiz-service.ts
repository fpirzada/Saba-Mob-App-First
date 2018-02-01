import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class QuizServiceProvider {

  private apiUrl = 'assets/data/dataBookAndQuestions.json';
  private data : any;
  constructor(public http: Http) {
    console.log('Hello QuizServiceProvider Provider');
  }


  load(topic){
    //book 1

    if(topic === 'topic1'){
      return this.http.get('assets/data/Book1.json').map(res => res.json())
    }

    //book 2

    if(topic === 'topic2'){
      return this.http.get('assets/data/Book2.json').map(res => res.json())
    }

  }

}
