import { Component, Input, OnInit } from '@angular/core';
import { ExposantListService } from '../../service/exposant-list.service';
import { ActivatedRoute } from '@angular/router';
import { Societe } from 'src/app/model/societe';

/**
 * Exposant list composant
 */
@Component({
  selector: 'app-exposant-list',
  templateUrl: './exposant-list.component.html',
  styleUrls: ['./exposant-list.component.scss']
})

export class ExposantListComponent implements OnInit {

/**
 * @type Societe[] : input qui nous sert pour l'affichage sur le fichier html.
 */
  @Input() exposants: Societe[] = null;

  /**
   * Constructeur qui initialise les attributs de la classe.
   * @param explist 
   * @param route 
   */
  constructor(private explist: ExposantListService, private route: ActivatedRoute) { }

  /**
   * Ngoninit : initialise la valeur idFestival de la route
   */
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival')) {
      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      this.getExposantsFestival(idFestival);
    }
  }

/**
 * Récupère les xposants selon un festival, par son identifiant.
 * @param idFestival 
 */
  getExposantsFestival(idFestival): void {
    this.explist.getExposantsFestival(idFestival).subscribe(
      (exposantsDTO) => {
        if (exposantsDTO) {
          this.exposants = exposantsDTO;
        }
      }
    );

  }
}
