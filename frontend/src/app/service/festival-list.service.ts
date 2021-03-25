import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Festival} from 'src/app/model/festival';

@Injectable({
  providedIn: 'root'
})
export class FestivalListService {

  constructor( private http: HttpClient ) { }
  getFestivalsYear(): Observable<Festival[]> {
    return this.http.get<Festival[]>('http://localhost:3100/festival/allbyyear')
  
    }
  
  }