import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
    categories: Categorie[] = [
    {
      id: 0,
      title: 'Obligation',
      image: './assets/panneaux/0.png',
      url: '/souscategorie',
      forme: 'Rond',
      couleur: 'Bleu foncé et blanc',
      position: 'À l\'endroit',
        // tslint:disable-next-line:max-line-length
      comment: 'Les panneaux d’obligation font partie des éléments de la voirie appartenant à la signalisation verticale. Dans le Code de la route, ils sont destinés à obliger les usagers à respecter certaines prescriptions et certaines règles à partir du niveau du panneau ou devant celui-ci. Ces panneaux peuvent donc indiquer non seulement une direction que l\'usager devra suivre, mais aussi une vitesse minimum à respecter, ou encore une voir obligatoire pour certains types d\'usagers.'
    },
    {
      id: 1,
      title: 'Interdiction',
      image: './assets/panneaux/1.png',
      url: '/souscategorie',
      forme: 'Rond',
      couleur: 'Rouge et blanc',
      position: 'À l\'endroit',
        // tslint:disable-next-line:max-line-length
      comment: 'Reconnaître les panneaux d’interdiction est assez simple. En effet, ces panneaux sont ronds, bordés d\'un liseré rouge, et indiquent une interdiction immédiate. Ils peuvent également être complétés d’un panonceau, qui précisera si l’interdiction ne s’applique qu’à une certaine catégorie d’usagers, ou si cette interdiction ne prendra effet qu’à une certaine distance.'
    },
    {
      id: 2,
      title: 'Danger',
      image: './assets/panneaux/2.png',
      url: '/souscategorie',
      forme: 'Triangulaire',
      couleur: 'Rouge et blanc',
      position: '50m en agglomération, 150m en dehors',
        // tslint:disable-next-line:max-line-length
      comment: 'Lors de chacun de leurs déplacements, les usagers croisent des panneaux de danger sans toujours bien saisir l’information qui y est indiquée. Pourtant, cette signalisation verticale a trois missions principales : avertir, informer et signaler'
    },
    {
      id: 3,
      title: 'Information',
      image: './assets/panneaux/3.png',
      url: '/souscategorie',
      forme: 'Carré',
      couleur: 'Bleu foncé et blanc',
      position: 'À l\'endroit ou avant en fonction des besoins',
        // tslint:disable-next-line:max-line-length
      comment: 'Les panneaux d’indication font partie des éléments de la voirie appartenant à la signalisation verticale. Leur objectif principal est de porter à la connaissance de l\'ensembles des usagers circulant le long des voies des informations utiles dans le cadre de leur trajet, notamment en terme de sécurité et de confort.'
    }
    ];


  constructor() { }

  getAll() {
    return this.categories;
  }

  get(id: number) {
    if (id < 0 || id >= this.categories.length) {
      return null;
    }
    return this.categories[id];
  }
}
