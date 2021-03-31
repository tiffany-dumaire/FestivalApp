import { Component, OnInit, Input } from '@angular/core';
import { GameListFService } from 'src/app/service/game-list-f.service';
import { tap } from 'rxjs/operators';
import { Game } from 'src/app/model/game';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() game: Game = null;
  constructor(private gameListFService: GameListFService, private route: ActivatedRoute) { }

  public games = null;
  public toto = null;

  ngOnInit(): void {
    console.log("details : init");
    if (this.route.snapshot.paramMap.has('idJeu') && this.route.snapshot.paramMap.has('idRes')) {

      const idJeu = this.route.snapshot.paramMap.get('idJeu');
      const idReservation = this.route.snapshot.paramMap.get('idRes');
      console.log(`details : ${idJeu} - ${idReservation}`);
      this.getGameDetails(idJeu, idReservation);
    }

  }
  getGameDetails(idJeu, idReservation) {
    
    this.games =  this.gameListFService.getGameDetails(idJeu, idReservation)   
    .pipe(
      tap( (games) => {console.log(JSON.stringify(games));})
    )
    /*this.toto = this.gameListFService.getGameDetails(idJeu, idReservation).pipe(
        tap((gamedetail) => {
        console.log("coucou");
        console.log(JSON.stringify(gamedetail));

      })
    )*/
  }


}
