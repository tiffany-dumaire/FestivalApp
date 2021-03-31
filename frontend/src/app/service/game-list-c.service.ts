import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';
import { Festival } from 'src/app/model/festival'

@Injectable({
  providedIn: 'root'
})
export class GameListCService {

constructor( private http: HttpClient ) { }
getGamesEditor(): Observable<Game[]> {
  //var url = 'http://localhost:3100/jeu/last/allbyfestival';
  return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyeditor');
  

  }

}