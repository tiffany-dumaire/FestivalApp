import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';


@Injectable({
  providedIn: 'root'
})
export class GameListFService {

constructor( private http: HttpClient ) { }
getGames(): Observable<Game[]> {
  return this.http.get<Game[]>('http://localhost:3100/jeu/allbyfestival')

  }

}
