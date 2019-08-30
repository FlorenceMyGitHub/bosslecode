import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menuItems = [
    {title: 'Catégorie', url: '/categorie', icon: 'cat'},
    {title: 'Panneaux', url: '/panneaux', icon: 'pan'},
    {title: 'Quizz', url: '/quizz', icon: 'quizz'},
    {title: 'Votez', url: '/votez', icon: 'vote'},
  ]


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
