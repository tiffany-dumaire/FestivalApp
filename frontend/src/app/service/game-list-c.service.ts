import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';
import { Festival } from 'src/app/model/festival'

/**
 * Game list service
 */
@Injectable({
  providedIn: 'root'
})
export class GameListCService {

  /**
   * Construxteur de la classe
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Jeu par éditeur
   * @returns 
   */
  getGamesEditor(): Observable<Game[]> {
    return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyeditor');
  }

  /**
   * Jeux par zone
   * @returns 
   */
  getGamesArea(): Observable<Game[]> {
    return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyzone');
  }

}