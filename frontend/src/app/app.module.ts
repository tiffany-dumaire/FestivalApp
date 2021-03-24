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
import { CreateEditorComponent } from './components/create-editor/create-editor.component';
import { CreateExpComponent } from './components/create-exp/create-exp.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FestivalListComponent } from './components/festival-list/festival-list.component';
import { ExposantListComponent } from './components/exposant-list/exposant-list.component';
import { GameListExpComponent } from './components/game-list-exp/game-list-exp.component';


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
    CreateEditorComponent,
    CreateExpComponent,
    AddGameComponent,
    ReservationsComponent,
    AdminHomeComponent,
    FestivalListComponent,
    ExposantListComponent,
    GameListExpComponent,
   
    
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  AdminHomeComponent]
})
export class AppModule { }
