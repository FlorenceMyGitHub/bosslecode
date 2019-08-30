import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { PanneauxService } from '../services/panneaux.service';
import { Panneau } from '../services/panneau';
import {CategorieService} from '../services/categorie.service';

@Component({
  selector: 'app-panneaux',
  templateUrl: './panneaux.page.html',
  styleUrls: ['./panneaux.page.scss'],
})
export class PanneauxPage implements OnInit {

  panneaux: Panneau[] = null

  constructor(private route: ActivatedRoute, private panneauxService: PanneauxService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.categorie) {
        // console.log(params.categorie);
         this.getPanneauxByCat(params.categorie);
      } else {
        this.getPanneaux();
      }
    });
  }

  ngOnInit() {
  }

  getPanneaux() {
    this.panneaux = this.panneauxService.getAll();
  }

  getPanneauxByCat(panneauCategorie) {
    this.panneaux  =  this.panneauxService.getByCategorie(panneauCategorie);
  }

  onClickPanneau(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id:  panneauId }
    }
    this.router.navigate(['details'], navigationExtras);
  }




}
