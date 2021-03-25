import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Game } from 'src/app/model/game';
import{GameListFService} from'src/app/service/game-list-f.service';


@Component({
  selector: 'app-game-list-festival',
  templateUrl: './game-list-festival.component.html',
  styleUrls: ['./game-list-festival.component.css']
})
export class GameListFestivalComponent implements OnInit {
  public games;

  constructor(private gameListFService: GameListFService) { }

  ngOnInit(): void {
  this.getGames();
  }

   getGames(): void {
    this.games =  this.gameListFService.getGames().pipe(
      tap( (games) => {console.log(JSON.stringify(games));})
    )
    
  }

}
