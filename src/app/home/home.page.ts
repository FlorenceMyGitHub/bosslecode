import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuItems = [
    {title: 'Catégorie', url: '/categorie', icon: 'cat'},
    {title: 'Panneaux', url: '/panneaux', icon: 'pan'},
    {title: 'Quizz', url: '/quizz', icon: 'quizz'},
  ]

  constructor() {}



}
