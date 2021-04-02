import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { GameListCService } from 'src/app/service/game-list-c.service';

/**
 * Game liste area component : Jeux par zone
 */
@Component({
  selector: 'app-game-list-area',
  templateUrl: './game-list-area.component.html',
  styleUrls: ['./game-list-area.component.css']
})
export class GameListAreaComponent implements OnInit {
  
  public games;

  /**
   * Constructeur de la classe
   * @param gameListFService 
   */
  constructor(private gameListFService: GameListCService) { }

  /**
   * Ngon init initilise le composant.
   */
  ngOnInit(): void {
    this.getGamesArea();
  }

  /**
   * Retourne les jeux par zone en déléguant au service.
   */
  getGamesArea(): void {
    this.games = this.gameListFService.getGamesArea().pipe(
      tap((games) => { console.log(JSON.stringify(games)); })
    )
  }

}
