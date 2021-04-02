import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';


import { ActivatedRoute } from '@angular/router';

import { FestivalService } from 'src/app/service/festival.service';

/**
 * Festival details composant
 */
@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})
export class FestivalDetailsComponent implements OnInit {

  /**
   * Nous permet de récupérer la variable pour l'affichage.
   */
  @Input() public festival = null;

  constructor(private festivalService: FestivalService, private route: ActivatedRoute) { }

/**
 * Ngoninit qui initialise le paramètre idFestival à ajouter dans la route.
 */
  ngOnInit(): void {

    if (this.route.snapshot.paramMap.has('idFestival')) {
      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      this.getFestivalById(idFestival);
    }

  }

  /**
   * 
   * @param idFestival Retourne un festival selon son identifiant, délégation au service.
   */
  getFestivalById(idFestival): void {
    console.log(idFestival);
    this.festivalService.getFestivalById(idFestival)
      .subscribe(
        (festivalDTO) => {
          if (festivalDTO) {
            this.festival = festivalDTO;
            console.log(`festival=${JSON.stringify(this.festival)}`);
          }
        }
      );
  }

}
