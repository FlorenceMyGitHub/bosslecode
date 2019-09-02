import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'categorie', loadChildren: './categorie/categorie.module#CategoriePageModule' },
  { path: 'panneaux', loadChildren: './panneaux/panneaux.module#PanneauxPageModule' },
  { path: 'quizz', loadChildren: './quizz/quizz.module#QuizzPageModule' },
  { path: 'souscategorie', loadChildren: './souscategorie/souscategorie.module#SouscategoriePageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'detailscategorie', loadChildren: './detailscategorie/detailscategorie.module#DetailscategoriePageModule' },
  { path: 'votez', loadChildren: './votez/votez.module#VotezPageModule' },
  { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesPageModule' },
  { path: 'questionnaire', loadChildren: './quizz/questionnaire/questionnaire.module#QuestionnairePageModule' },
  { path: 'resultat', loadChildren: './quizz/resultat/resultat.module#ResultatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
