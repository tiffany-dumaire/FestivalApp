import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  private _listners = new Subject<any>()
  
  listen() : Observable<any> {
    return this._listners.asObservable();
  }

  feed() {
    this._listners.next();
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient ) { }
  //addFestival(festival: Festival): Observable<Festival> {
    //return this.http.post<Festival>('http://localhost:3100/festival/create', festival, this.httpOptions);
  
    //}
    public addSociete(societe): Observable<any> {
      return this.http.post<any>("https://backend-festival-app.herokuapp.com/societe/create", societe)
    }
  
  }


