import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import{GameListCService} from'src/app/service/game-list-c.service';

@Component({
  selector: 'app-game-list-editor',
  templateUrl: './game-list-editor.component.html',
  styleUrls: ['./game-list-editor.component.css']
})
export class GameListEditorComponent implements OnInit {
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
