import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Festival} from 'src/app/model/festival';


@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  festival: Festival;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient ) { }
  addFestival(festival: Festival): Observable<Festival> {
    return this.http.post<Festival>('http://localhost:3100/festival/create', festival)
  
    }
  
  
  }
