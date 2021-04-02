import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Societe } from '../model/societe';

/**
 * Service pour les suivis d'exposants
 */
@Injectable({
  providedIn: 'root'
})
export class ExposantListService {

  /**
   * Constructeur
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Effectue une requete à l'API pour afficher les exposants
   * @param idFestival 
   * @returns Observable<Societe[]>
   */
  getExposantsFestival(idFestival): Observable<Societe[]> {
    var url = 'https://backend-festival-app.herokuapp.com/societe/festival'
    return this.http.get<Societe[]>(url+"/"+idFestival+"/exposants")
  
    }
}
