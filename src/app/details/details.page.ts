import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanneauxService } from '../services/panneaux.service';
import { Panneau} from '../services/panneau';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  panneau: Panneau = null

  constructor(private route: ActivatedRoute, private panneauxService: PanneauxService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.panneau = this.panneauxService.get(params.id);
      }
    });
  }

  ngOnInit() {
  }

}
