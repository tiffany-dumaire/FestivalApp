import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Festival } from 'src/app/model/festival';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

/**
 * Service pour le festival
 */
export class FestivalService {
  private _listners = new Subject<any>()

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  feed() {
    this._listners.next();
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  /**
   * Ajout festival requête à l'API.
   * @param festival 
   * @returns Observable<any>
   */
  public addFestival(festival): Observable<any> {
    return this.http.post<any>("https://backend-festival-app.herokuapp.com/festival/create", festival)
  }

  /**
   * Festival le plus récent requête API
   * @returns Observable<Festival>
   */
  getFestivalRecent(): Observable<Festival> {
    return this.http.get<Festival>("https://backend-festival-app.herokuapp.com/festival/last")

  }

  /**
   * Retourne festival par identifiant du festival : requête à l'API
   * @param idFestival 
   * @returns 
   */
  public getFestivalById(idFestival): Observable<Festival> {
    var url = 'https://backend-festival-app.herokuapp.com/festival/all'
    return this.http.get<Festival[]>(url + "/" + idFestival).pipe(
      map((festivals: Festival[]) => {
        if (festivals.length > 0) { return festivals[0]; }
        else { return null; }
      }
      )
    );
  }
}
