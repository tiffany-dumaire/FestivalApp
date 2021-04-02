import { Component, OnInit, Input } from '@angular/core';
import { GameListFService } from 'src/app/service/game-list-f.service';
import { tap } from 'rxjs/operators';
import { Game } from 'src/app/model/game';
import { ActivatedRoute } from '@angular/router';

/**
 * Game details composant
 */
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})

export class GameDetailsComponent implements OnInit {
 
 /**
  * @type Game
  * Attribut qui permet de faire l'affichage sur le html.
  */
  @Input() game: Game = null;
  constructor(private gameListFService: GameListFService, private route: ActivatedRoute) { }

  /**
   * ngOnInit qui initialise les identifiants à mettre en pramaètre de la route.
   */
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idJeu') && this.route.snapshot.paramMap.has('idRes')) {

      const idJeu = this.route.snapshot.paramMap.get('idJeu');
      const idReservation = this.route.snapshot.paramMap.get('idRes');
      console.log(`details : ${idJeu} - ${idReservation}`);
      this.getGameDetails(idJeu, idReservation);
    }

  }
  
  /**
   * Retourne les détails du jeu en dégéguant au service.
   * @param idJeu 
   * @param idReservation 
   */
  getGameDetails(idJeu, idReservation) {

    this.gameListFService.getGameDetails(idJeu, idReservation)
      .subscribe(
        (gameDTO) => {
          if (gameDTO) {
            this.game = gameDTO;
          }
        }
      );
  }


}
