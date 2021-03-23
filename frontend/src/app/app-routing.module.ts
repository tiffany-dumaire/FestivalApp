import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FestivalsComponent } from './festivals/festivals.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
    
  },
  {
    path: "festivals", component: FestivalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
