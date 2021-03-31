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
  //var url = 'http://localhost:3100/jeu/last/allbyfestival';
  return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyfestival');
  

  }

  getGameDetails(idJeu, idReservation) : Observable<Game[]>{
    
    var url = 'https://backend-festival-app.herokuapp.com/jeu/all'
    return this.http.get<Game[]>(url+"/"+idJeu+"/"+idReservation);

  }

}
