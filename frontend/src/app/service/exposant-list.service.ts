import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Exposant} from 'src/app/model/exposant';

@Injectable({
  providedIn: 'root'
})
export class ExposantListService {

  constructor(private http: HttpClient) { }
  getExposants(): Observable<Exposant[]> {
    return this.http.get<Exposant[]>('http://localhost:3100/societe/exposant/all')
  
    }
}
