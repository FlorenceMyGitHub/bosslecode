import { Injectable } from '@angular/core';
import {Panneau} from './panneau';
import {QuizQuestion} from './quizquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: QuizQuestion[] = [
    {
      id: 0,
      panneauId: 8,
      question: 'Qu\'indique ce panneau ?',
      choix1: 'Virage à gauche',
      choix2: 'Virage à droite',
      choix3: 'Danger à gauche',
      choix4: 'Danger à droite',
      bonneReponse: 2
    },
    {
      id: 1,
      panneauId: 3,
      question: 'Qu\'indique ce panneau ?',
      choix1: 'Obligation de rouler à 30',
      choix2: 'Interdiction de rouler à 30',
      choix3: 'Vitesse minimale obligatoire à 30',
      choix4: 'Recommandation de rouler à 30',
      bonneReponse: 3
    },
    {
      id: 2,
      panneauId: 1,
      question: 'À quelle catégorie appartient ce panneau ?',
      choix1: 'Danger',
      choix2: 'Interdiction',
      choix3: 'Information',
      choix4: 'Obligation',
      bonneReponse: 4
    },
    {
      id: 3,
      panneauId: 12,
      question: 'Qu\'indique ce panneau ?',
      choix1: 'Un lieu de pause',
      choix2: 'Une zone de parking',
      choix3: 'Un parc',
      choix4: 'Une zone "Permission de rouler"',
      bonneReponse: 2
    },
    {
      id: 4,
      panneauId: 10,
      question: 'Qu\'indique ce panneau ?',
      choix1: 'Une rivière',
      choix2: 'Une zone maritime',
      choix3: 'Un casssis ou dos d\'âne',
      choix4: '/Un terrain irrégulier',
      bonneReponse: 3
    },
    {
      id: 5,
      panneauId: 2,
        question: 'Qu\'indique ce panneau ?',
      choix1: 'Interdiction de conduire une voiture',
      choix2: 'Chemin obligatoire pour cavalier',
      choix3: 'Risque de croiser des cavaliers',
      choix4: 'Zone de promenade équestre',
      bonneReponse: 2
    },
    {
      id: 6,
      panneauId: 6,
      question: 'Où se situe les panneaux d\'interdiction ?',
      choix1: 'À 200m',
      choix2: 'À 1km puis à 200m',
      choix3: 'À l\'endroit',
      choix4: 'À 150m',
      bonneReponse: 3
    },
    {
      id: 7,
      panneauId: 15,
      question: 'Que signifie ce panneau ?',
      choix1: 'Une falaise',
      choix2: 'Un passage piéton',
      choix3: 'Une obligation de dépasser',
      choix4: 'Un emplacement d\'arrêt d\'urgence',
      bonneReponse: 4
    },
    {
      id: 8,
      panneauId: 9,
      question: 'Où se situe les panneaux danger ?',
      choix1: 'À 50m',
      choix2: 'À 150m',
      choix3: 'À 50m en agglomération et 150m en dehors',
      choix4: 'À 50m en agglomération et 100m en dehors',
      bonneReponse: 3
    },
    {
      id: 9,
      panneauId: 4,
      question: 'Que signifie ce panneau ?',
      choix1: 'Ce panneau n\'existe pas',
      choix2: 'Un sens interdit',
      choix3: 'Un arrêt obligatoire',
      choix4: 'Une circulation interdite à tous les véhicule dans les deux sens',
      bonneReponse: 4
    }
    ];

  constructor() { }

  getAll() {
    return this.questions;
  }

  getById(id) {
    // tslint:disable-next-line:radix
    return this.questions.filter(question => question.id === parseInt(id));
  }
}
