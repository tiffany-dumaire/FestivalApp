import { Component, Input, OnInit } from '@angular/core';
import { ReservationService } from '../../service/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';

/**
 * Réservations component : liste des réservations
 */
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})

export class ReservationsComponent implements OnInit {

  /**
   * @type : Reservation [] : liste des réservations pour l'affichage sur le html.
   */
  @Input() reservations: Reservation[] = null;

  /**
   * Constructeur de la classe
   * @param reservationService 
   * @param route 
   */
  constructor(private reservationService: ReservationService, private route: ActivatedRoute) { }

  /**
   * NgonInit : initialise le composant
   */
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival')) {

      const idFestival = this.route.snapshot.paramMap.get('idFestival');

      this.getReservations(idFestival);
    }
  }

  /**
   * Réservation selon l'id du festival, délégation au service.
   * @param idFestival 
   */
  public getReservations(idFestival): void {
    this.reservationService.getReservations(idFestival).subscribe(
      (ReservationsDTO) => {
        if (ReservationsDTO) {
          this.reservations = ReservationsDTO;
        }
      }
    );
  }

}
