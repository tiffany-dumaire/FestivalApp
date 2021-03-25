import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FestivalComponent } from './components/festival/festival.component';
import { AboutComponent } from './components/about/about.component';
import { GameListFestivalComponent } from './components/game-list-festival/game-list-festival.component';
import { GameListAreaComponent } from './components/game-list-area/game-list-area.component';
import { GameListEditorComponent } from './components/game-list-editor/game-list-editor.component';
import { CreateFestComponent } from './components/create-fest/create-fest.component';
import { CreateAccountHComponent } from './components/create-account-h/create-account-h.component';
import { CreateAccountAdComponent } from './components/create-account-ad/create-account-ad.component';
import { CreateAccountOrgComponent } from './components/create-account-org/create-account-org.component';

import { CreateExpComponent } from './components/create-exp/create-exp.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FestivalListComponent } from './components/festival-list/festival-list.component';
import { ExposantListComponent } from './components/exposant-list/exposant-list.component';
import { GameListExpComponent } from './components/game-list-exp/game-list-exp.component';
import { OrgHomeComponent } from './components/org-home/org-home.component';
import { AdminHomeFestComponent } from './components/admin-home-fest/admin-home-fest.component';




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
  },
  {
    path: "createfest", component: CreateFestComponent
  },
  {
    path: "createacch", component: CreateAccountHComponent
  },
  {
    path: "createaccad", component: CreateAccountAdComponent
  },
  {
    path: "createaccorg", component: CreateAccountOrgComponent
  },

  {
    path: "createexp", component: CreateExpComponent
  },
  {
    path: "addgame", component: AddGameComponent
  },
  {
    path: "reservations", component: ReservationsComponent
  },
  {
    path: "adminhome", component: AdminHomeComponent
  },
  {
    path: "festivals", component: FestivalListComponent
  },
  {
    path: "explist", component: ExposantListComponent
  },
  {
    path: "gamelistexp", component: GameListExpComponent
  },
  {
    path: "orghome", component: OrgHomeComponent
  },
  {
    path: "adminhomefest", component: AdminHomeFestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
