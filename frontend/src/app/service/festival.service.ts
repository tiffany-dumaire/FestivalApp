import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Festival} from 'src/app/model/festival';


@Injectable({
  providedIn: 'root'
})
export class FestivalService {
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
    public addFestival(festival): Observable<any> {
      return this.http.post<any>("http://localhost:3100/festival/create", festival)
    }
  
    getFestivalRecent(): Observable<Festival> {
      return this.http.get<Festival>('http://localhost:3100/festival/last')
    
      }
    

  }
