import { Injectable } from '@angular/core';
import { Panneau } from './panneau';

@Injectable({
  providedIn: 'root'
})
export class PanneauxService {

  panneaux: Panneau[] = [
    {
      id: 0,
      title: 'Piste ou bande obligatoire pour cycles sans side-car à 2 ou 3 roues',
      image: './assets/panneaux/4_obligation/B22a.png',
      url: '/souscategorie',
      details: 'Piste ou bande obligatoire pour cycles sans side-car à 2 ou 3 roues',
      categorie: 0
    },
    {
      id: 1,
      title: 'Chemin obligatoire pour piétons',
      image: './assets/panneaux/4_obligation/B22b.png',
      url: '/souscategorie',
      details: 'Chemin obligatoire pour piétons',
      categorie: 0
    },
    {
      id: 2,
      title: 'Chemin obligatoire pour cavaliers',
      image: './assets/panneaux/4_obligation/B22c.png',
      url: '/souscategorie',
      details: 'Chemin obligatoire pour cavaliers',
      categorie: 0
    },
    {
      id: 3,
      title: 'Vitesse minimale obligatoire',
      image: './assets/panneaux/4_obligation/B25.png',
      url: '/souscategorie',
      details: 'Vitesse minimale obligatoire',
      categorie: 0
    },
    {
      id: 4,
      title: 'Circulation interdite à tous véhicule dans les deux sens',
      image: './assets/panneaux/3_interdiction/B0.png',
      url: '/souscategorie',
      details: 'Circulation interdite à tous véhicule dans les deux sens.',
      categorie: 1
    },
    {
      id: 5,
      title: 'Sens interdit',
      image: './assets/panneaux/3_interdiction/B1.png',
      url: '/souscategorie',
      details: 'Sens interdit',
      categorie: 1
    },
    {
      id: 6,
      title: 'Interdiction de dépasser tout véhicule à moteur sauf deux roues',
      image: './assets/panneaux/3_interdiction/B3.png',
      url: '/souscategorie',
      details: 'Interdiction de dépasser tout véhicule à moteur sauf deux roues',
      categorie: 1
    },
    {
      id: 7,
      title: 'Arrêt obligatoire au poste de douane',
      image: './assets/panneaux/3_interdiction/B4.png',
      url: '/souscategorie',
      details: 'Arrêt obligatoire au poste de douane',
      categorie: 1
    },
    {
      id: 8,
      title: 'Virage à droite',
      image: './assets/panneaux/1_danger/A1a.png',
      url: '/souscategorie',
      details: 'Virage à droite',
      categorie: 2
    },
    {
      id: 9,
      title: 'Succession de virages dont le premier est à droite',
      image: './assets/panneaux/1_danger/A1c.png',
      url: '/souscategorie',
      details: 'Succession de virages dont le premier est à droite',
      categorie: 2
    },
    {
      id: 10,
      title: 'Cassis ou dos-d\'âne',
      image: './assets/panneaux/1_danger/A2a.png',
      url: '/souscategorie',
      details: 'Cassis ou dos-d\'âne',
      categorie: 2
    },
    {
      id: 11,
      title: 'ralentisseur',
      image: './assets/panneaux/1_danger/A2b.png',
      url: '/souscategorie',
      details: 'ralentisseur',
      categorie: 2
    },
    {
      id: 12,
      title: 'Lieu aménagé pour le stationnement de parking',
      image: './assets/panneaux/5_indication/C1a.png',
      url: '/souscategorie',
      details: 'Lieu aménagé pour le stationnement de parking',
      categorie: 3
    },
    {
      id: 13,
      title: 'Circulation à sens unique',
      image: './assets/panneaux/5_indication/C12.png',
      url: '/souscategorie',
      details: 'Circulation à sens unique',
      categorie: 3
    },
    {
      id: 14,
      title: 'Impasse ou rue sans issue',
      image: './assets/panneaux/5_indication/C13a.png',
      url: '/souscategorie',
      details: 'Impasse ou rue sans issue',
      categorie: 3
    },
    {
      id: 15,
      title: 'Emplacement d\'arrêt d\'urgence',
      image: './assets/panneaux/5_indication/C8.png',
      url: '/souscategorie',
      details: 'Emplacement d\'arrêt d\'urgence',
      categorie: 3
    }
  ];


  constructor() { }

  getAll() {
    return this.panneaux;
  }

  get(id: number) {
    if (id < 0 || id >= this.panneaux.length) {
      return null;
    }
    return this.panneaux[id];
  }

  /*getByCategorie(categorie: number) {
    if (categorie < 0 || categorie > 3) {
      return null;
    }
    return this.panneaux[categorie];
  }*/

  getByCategorie(cat: number) {
    return this.panneaux.filter((panneaux) => {
      return panneaux.categorie = cat;
    });
  }
}
