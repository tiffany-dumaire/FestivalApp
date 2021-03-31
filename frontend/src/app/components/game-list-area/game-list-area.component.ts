import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import{GameListCService} from'src/app/service/game-list-c.service';

@Component({
  selector: 'app-game-list-area',
  templateUrl: './game-list-area.component.html',
  styleUrls: ['./game-list-area.component.css']
})
export class GameListAreaComponent implements OnInit {
  public games;
  

  constructor(private gameListFService: GameListCService) { }

  ngOnInit(): void {
  this.getGamesEditor();
  }

   getGamesEditor(): void {
    this.games =  this.gameListFService.getGamesEditor().pipe(
      tap( (games) => {console.log(JSON.stringify(games));})
    )
    
  }

}
