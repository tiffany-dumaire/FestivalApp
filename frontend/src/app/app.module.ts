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
  bootstrap: [AppComponent]
})
export class AppModule { }
