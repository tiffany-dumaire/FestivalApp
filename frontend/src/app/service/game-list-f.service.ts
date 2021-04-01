import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from 'src/app/model/game';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class GameListFService {

constructor( private http: HttpClient ) { }
getGames(): Observable<Game[]> {
  //var url = 'http://localhost:3100/jeu/last/allbyfestival';
  return this.http.get<Game[]>('https://backend-festival-app.herokuapp.com/jeu/last/allbyfestival');
  

  }

  public getGameDetails(idJeu, idReservation) : Observable<Game>{
    
    var url = 'https://backend-festival-app.herokuapp.com/jeu/all'
    return this.http.get<Game[]>(url+"/"+idJeu+"/"+idReservation).pipe(
      map((games: Game[]) => {
        if (games.length > 0) { return games[0]; }
        else { return null; }
      }
      )
    );

  }

}
