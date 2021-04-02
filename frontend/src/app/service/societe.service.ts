import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Societe } from 'src/app/model/societe';

/**
 * Societe service
 */
@Injectable({
  providedIn: 'root'
})

export class SocieteService {

  /**
   * Constructeur
   * @param http 
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Ajout de société : reuqête à l'API
   * @param societe 
   * @returns 
   */
  public addSociete(societe): Observable<Societe> {
    return this.http.post<Societe>("https://backend-festival-app.herokuapp.com/societe/create", societe)
  }

}


