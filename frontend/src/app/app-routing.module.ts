import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FestivalComponent } from './components/festival/festival.component';
import { AboutComponent } from './components/about/about.component';
import { GameListFestivalComponent } from './components/game-list-festival/game-list-festival.component';
import { GameListAreaComponent } from './components/game-list-area/game-list-area.component';
import { GameListEditorComponent } from './components/game-list-editor/game-list-editor.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
    
  },
  {
    path: "", component: FestivalComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "gamelistfest", component: GameListFestivalComponent
  },
  {
    path: "gamelistarea", component: GameListAreaComponent
  },
  {
    path: "gamelisteditor", component: GameListEditorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
