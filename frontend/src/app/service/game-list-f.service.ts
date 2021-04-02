import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';
import { map } from 'rxjs/internal/operators/map';


/**
 * Service pour la liste des jeux
 */
@Injectable({
  providedIn: 'root'
})
export class GameListFService {

  /**
   * Constructeur
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Liste des jeux tous festivals confondus
   * @returns 
   */
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyfestival');
  }

  /**
   * Détails du jeu, requête à l'API
   * @param idJeu 
   * @param idReservation 
   * @returns 
   */
  public getGameDetails(idJeu, idReservation): Observable<Game> {

    var url = 'https://backend-festival-app.herokuapp.com/jeu/all'
    return this.http.get<Game[]>(url + "/" + idJeu + "/" + idReservation).pipe(
      map((games: Game[]) => {
        if (games.length > 0) { return games[0]; }
        else { return null; }
      }
      )
    );

  }

}
