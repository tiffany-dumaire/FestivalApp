import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Festival } from 'src/app/model/festival';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
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
  //addFestival(festival: Festival): Observable<Festival> {
  //return this.http.post<Festival>('http://localhost:3100/festival/create', festival, this.httpOptions);

  //}
  public addFestival(festival): Observable<any> {
    return this.http.post<any>("https://backend-festival-app.herokuapp.com/festival/create", festival)
  }

  getFestivalRecent(): Observable<Festival> {
    return this.http.get<Festival>("https://backend-festival-app.herokuapp.com/festival/last")

  }

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
