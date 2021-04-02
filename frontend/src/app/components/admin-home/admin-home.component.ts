import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { FestivalListService } from 'src/app/service/festival-list.service';

/**
 * Admin Home Composant 
 */
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  /**
   * Attributs de la classe
   */
  public festivalsy;
  public festival;

/**
 * Constructeur de la classe : initialise le service et la route à utiliser.
 * @param festlist 
 * @param route 
 */
  constructor(private festlist: FestivalListService, private route: ActivatedRoute) { }

 /**
  * NgonInit : pour avoir la liste des festivals
  */
  ngOnInit(): void {
    this.getFestivalsYear();
  }

  /**
   * Retourne la liste des festivals en appeler le service par déléfation.
   */
  getFestivalsYear(): void {
    this.festivalsy = this.festlist.getFestivalsYear().pipe(
      tap((festivalsy) => { console.log(JSON.stringify(festivalsy)); })
    )

  }

}
