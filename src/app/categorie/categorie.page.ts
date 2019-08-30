import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories: Categorie[] = null

  constructor(private categorieService: CategorieService, private router: Router) {
    this.getCategories()
  }

  ngOnInit() {
  }

  getCategories() {
    this.categories = this.categorieService.getAll();
  }

  onClickCategorie(categorieId) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id:  categorieId }
    }
    this.router.navigate(['detailscategorie'], navigationExtras)
  }




}
