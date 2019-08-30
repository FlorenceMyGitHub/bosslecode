import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.page.html',
  styleUrls: ['./souscategorie.page.scss'],
})
export class SouscategoriePage implements OnInit {

  subcategories = [
    {title: 'Obligation', url: '/cat-1', icon: 'cat-1'},
    {title: 'Interdiction', url: '/cat-2', icon: 'cat-2'},
    {title: 'Danger', url: '/cat-3', icon: 'cat-3'},
    {title: 'Information', url: '/cat-4', icon: 'cat-4'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
