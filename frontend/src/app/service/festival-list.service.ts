import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Festival } from 'src/app/model/festival';

/**
 * Service pour la liste des festivals.
 */
@Injectable({
  providedIn: 'root'
})
export class FestivalListService {

  /**
   * Constructeur
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Effectue la requête à l'API pour la liste des festivals par année
   * @returns Observable<Festival[]>
   */
  getFestivalsYear(): Observable<Festival[]> {
    return this.http.get<Festival[]>('https://backend-festival-app.herokuapp.com/festival/allbyyear')
  }

}