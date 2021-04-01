import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reservation } from 'src/app/model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public getReservations(idFestival) : Observable<Reservation[]>{
    
    var url = 'https://backend-festival-app.herokuapp.com/reservation/all'
    return this.http.get<Reservation[]>(url+"/"+idFestival);

  }
}
