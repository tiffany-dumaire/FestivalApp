import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SuiviExposant } from 'src/app/model/suiviexposant';


/**
 * Service pour le(s) suivi(s) d'exposant
 */
@Injectable({
  providedIn: 'root'
})
export class SuiviExposantService {

  /**
   * Constructeur de la classe
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Liste des suivis d'exposants 
   * @param idFestival 
   * @param idSociete 
   * @returns 
   */
  public getSuivisExposant(idFestival, idSociete): Observable<SuiviExposant[]> {
    var url = 'https://backend-festival-app.herokuapp.com/suiviexposant/'
    return this.http.get<SuiviExposant[]>(url + idFestival + "/" + idSociete + "/details");

  }
}
