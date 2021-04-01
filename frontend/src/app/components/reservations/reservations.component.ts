import { Component, Input, OnInit } from '@angular/core';
import { ReservationService } from '../../service/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})

export class ReservationsComponent implements OnInit {

  @Input() reservations: Reservation[] = null;

  constructor(private reservationService: ReservationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival')) {

      const idFestival = this.route.snapshot.paramMap.get('idFestival');

      this.getReservations(idFestival);
    }
  }

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
