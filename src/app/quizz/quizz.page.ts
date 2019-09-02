import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  lastQuiz = 0;

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router) {
    // Récupérer le résultat du dernier quiz
    storage.get('lastQuiz').then((val) => {
      this.lastQuiz = val;
    });
  }

  ngOnInit() {
  }

  /*go() {

 this.storage.set('lastQuiz', 7);

    this.storage.get('lastQuiz').then( (val) => {
      this.lastQuiz = val;
    });
  } */


  onClickGo() {
    const navigationExtras: NavigationExtras = {
      queryParams: { id:  0}
    };
    this.router.navigate(['questionnaire'], navigationExtras);
  }
}
