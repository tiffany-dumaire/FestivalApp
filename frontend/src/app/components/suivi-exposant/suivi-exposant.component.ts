import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SuiviExposantService } from '../../service/suivi-exposant.service';
import { ActivatedRoute } from '@angular/router';
import { SuiviExposant } from 'src/app/model/suiviexposant';

/**
 * Suivi exposant composant : liste des suivis d'exposant(s)
 */
@Component({
  selector: 'app-suivi-exposant',
  templateUrl: './suivi-exposant.component.html',
  styleUrls: ['./suivi-exposant.component.css']
})
export class SuiviExposantComponent implements OnInit {
  /**
   * @type SuiviExposant[] : liste des suivis exposant
   */
  @Input() suiviexposants: SuiviExposant[] = null;
  
  /**
   * Construteur de la classe
   * @param suiviexposantService 
   * @param route 
   */
  constructor(private suiviexposantService: SuiviExposantService, private route: ActivatedRoute) { }

  /**
   * ngOnInit
   * Initialise les valeurs des identifiiants des paramètres à mettre dans la route.
   */
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival') && this.route.snapshot.paramMap.has('idSociete')) {

      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      const idSociete = this.route.snapshot.paramMap.get('idSociete');
      this.getSuivisExposant(idFestival, idSociete);
    }

  }

  /**
   * Liste des suivis exposants selon l'idFestival et l'idSociete : délégation au service
   * @param idFestival 
   * @param idSociete 
   */
  public getSuivisExposant(idFestival, idSociete): void {
    this.suiviexposantService.getSuivisExposant(idFestival, idSociete).subscribe(
      (SuiviexposantsDTO) => {
        if (SuiviexposantsDTO) {
          this.suiviexposants = SuiviexposantsDTO;
        }
      }
    );
  }
}
