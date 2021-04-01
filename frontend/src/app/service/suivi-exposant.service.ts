import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SuiviExposant } from 'src/app/model/suiviexposant';


@Injectable({
  providedIn: 'root'
})
export class SuiviExposantService {

  constructor(private http: HttpClient) { }
  public getSuivisExposant(idFestival, idSociete) : Observable<SuiviExposant[]>{
    
    var url = 'https://backend-festival-app.herokuapp.com/suiviexposant/'
    return this.http.get<SuiviExposant[]>(url+idFestival+"/"+idSociete+"/details");

  }
}
