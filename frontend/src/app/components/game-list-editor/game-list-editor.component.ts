import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { GameListCService } from 'src/app/service/game-list-c.service';


/**
 * Game list editor composant : jeux par éditeurs
 */
@Component({
  selector: 'app-game-list-editor',
  templateUrl: './game-list-editor.component.html',
  styleUrls: ['./game-list-editor.component.css']
})
export class GameListEditorComponent implements OnInit {
  public games;

  /**
   * Constructeur de la classe.
   * @param gameListFService 
   */
  constructor(private gameListFService: GameListCService) { }

  ngOnInit(): void {
    this.getGamesEditor();
  }

  /**
   * Retourne la liste des jeux par éditeur
   * Délégue au service
   */
  getGamesEditor(): void {
    this.games = this.gameListFService.getGamesEditor().pipe(
      tap((games) => { console.log(JSON.stringify(games)); })
    )

  }
}
