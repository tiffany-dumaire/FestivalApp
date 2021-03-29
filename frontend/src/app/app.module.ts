import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './components/root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { FestivalComponent } from './components/festival/festival.component';
import { GameListFestivalComponent } from './components/game-list-festival/game-list-festival.component';
import { GameListAreaComponent } from './components/game-list-area/game-list-area.component';
import { GameListEditorComponent } from './components/game-list-editor/game-list-editor.component';
import { CreateFestComponent } from './components/create-fest/create-fest.component';
import { CreateAccountHComponent } from './components/create-account-h/create-account-h.component';
import { CreateAccountAdComponent } from './components/create-account-ad/create-account-ad.component';
import { CreateAccountOrgComponent } from './components/create-account-org/create-account-org.component';


import { AddGameComponent } from './components/add-game/add-game.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FestivalListComponent } from './components/festival-list/festival-list.component';
import { ExposantListComponent } from './components/exposant-list/exposant-list.component';
import { GameListExpComponent } from './components/game-list-exp/game-list-exp.component';
import { OrgHomeComponent } from './components/org-home/org-home.component';
import { AdminHomeFestComponent } from './components/admin-home-fest/admin-home-fest.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SuiviExposantComponent } from './components/suivi-exposant/suivi-exposant.component';
import { FormsModule } from '@angular/forms';
import { ReservedGameListComponent } from './components/reserved-game-list/reserved-game-list.component';
import { CreateSocietyComponent } from './components/create-society/create-society.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    FestivalComponent,
    GameListFestivalComponent,
    GameListAreaComponent,
    GameListEditorComponent,
    CreateFestComponent,
    CreateAccountHComponent,
    CreateAccountAdComponent,
    CreateAccountOrgComponent,
   
    AddGameComponent,
    ReservationsComponent,
    AdminHomeComponent,
    FestivalListComponent,
    ExposantListComponent,
    GameListExpComponent,
    OrgHomeComponent,
    AdminHomeFestComponent,
    SuiviExposantComponent,
    ReservedGameListComponent,
    CreateSocietyComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
