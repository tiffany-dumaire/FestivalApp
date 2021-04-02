import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from 'src/app/model/game';
import { GameListFService } from 'src/app/service/game-list-f.service';
import { Router } from '@angular/router';


/**
 * Game list festival exposant : jeux du festival
 */
@Component({
  selector: 'app-game-list-festival',
  templateUrl: './game-list-festival.component.html',
  styleUrls: ['./game-list-festival.component.css']
})


export class GameListFestivalComponent implements OnInit {
  public games;
  public gamedetail;
  public game: Game;

  /**
   * Constructeur de la classe
   * @param gameListFService 
   * @param router 
   */
  constructor(private gameListFService: GameListFService, private router: Router) { }

  /**
   * Initialise composant
   */
  ngOnInit(): void {
    this.getGames();
  }

  /**
   * Retourne la liste des jeux du festival le plus récent
   */
  getGames(): void {
    this.games = this.gameListFService.getGames().pipe(
      tap((games) => { console.log(JSON.stringify(games)); })
    )
  }
}
