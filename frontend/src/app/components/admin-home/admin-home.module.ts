import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CreateFestComponent } from '../../components/create-fest/create-fest.component';
import { CreateAccountHComponent } from '../../components/create-account-h/create-account-h.component';
import { CreateAccountAdComponent } from '../../components/create-account-ad/create-account-ad.component';
import { CreateAccountOrgComponent } from '../../components/create-account-org/create-account-org.component';
import { CreateEditorComponent } from '../../components/create-editor/create-editor.component';
import { CreateExpComponent } from '../../components/create-exp/create-exp.component';
import { AddGameComponent } from '../../components/add-game/add-game.component';
import { ReservationsComponent } from '../../components/reservations/reservations.component';
import { AdminHomeComponent } from '../../components/admin-home/admin-home.component';
import { FestivalListComponent } from '../../components/festival-list/festival-list.component';


@NgModule({
  declarations: [
    AppComponent,
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
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
  AdminHomeComponent]
})
export class AppModule { }
