import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Exposant} from 'src/app/model/exposant';
import { Societe } from '../model/societe';

@Injectable({
  providedIn: 'root'
})
export class ExposantListService {

  constructor(private http: HttpClient) { }
  getExposantsFestival(idFestival): Observable<Societe[]> {
    var url = 'https://backend-festival-app.herokuapp.com/societe/festival'
    return this.http.get<Societe[]>(url+"/"+idFestival+"/exposants")
  
    }
}
