import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Router, NavigationExtras } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import {QuizQuestion} from '../../services/quizquestion';
import { PanneauxService } from '../../services/panneaux.service';
import { Panneau } from '../../services/panneau';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})

export class QuestionnairePage implements OnInit {
  questions: QuizQuestion[] = null;
  panneaux: Panneau = null;
  res: number;
  score = 0;
  selected = 0;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private questionService: QuestionService, private panneauxService: PanneauxService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.getQuestions(params.id);
        this.getImg();
      }
    });
  }

  ngOnInit() {
  }

  getImg() {
    this.panneaux = this.panneauxService.get(this.questions[0].panneauId);
 }
  getQuestions(id: number) {
    this.questions = this.questionService.getById(id);
  }
  onClickNext() {
    let theparam;
    if (parseFloat(String(this.selected)) === this.questions[0].bonneReponse) {
      this.score++;
      console.log('Ton score :' + this.score);
    } else {
      console.log('mauvaise réponse');
    }
    this.selected = null;
    this.route.queryParams.subscribe(params => { theparam = params.id; });
    if ((parseFloat(theparam)) > 8) {
      const navigationExtras: NavigationExtras = {
        queryParams: {res: this.score}
      };
      this.router.navigate(['resultat'], navigationExtras);
    } else {
      const navigationExtras: NavigationExtras = {
        queryParams: {id: (parseFloat(theparam) + 1)}
      };
      this.router.navigate(['questionnaire'], navigationExtras);
    }

  }

}
