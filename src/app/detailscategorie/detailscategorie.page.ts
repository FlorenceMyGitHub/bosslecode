import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';

@Component({
  selector: 'app-detailscategorie',
  templateUrl: './detailscategorie.page.html',
  styleUrls: ['./detailscategorie.page.scss'],
})
export class DetailscategoriePage implements OnInit {


  categorie: Categorie = null

  constructor(private route: ActivatedRoute, private categorieService: CategorieService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.categorie = this.categorieService.get(params.id);
      }
    });
  }

  ngOnInit() {
  }


}
