import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';
import { Festival } from 'src/app/model/festival'

@Injectable({
  providedIn: 'root'
})
export class GameListFService {

constructor( private http: HttpClient ) { }
getGames(): Observable<Game[]> {
  var url = 'http://localhost:3100/jeu/last/allbyfestival';
  return this.http.get<Game[]>('http://localhost:3100/jeu/last/allbyfestival');
  

  }

  getGameDetails(idJeu) : Observable<any>{
    var url = 'http://localhost:3100/jeu/all'
    return this.http.get<any>(url+"/"+idJeu);
  }

}
