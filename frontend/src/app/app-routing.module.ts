import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
    
  },
  {
    path: "festivals", component: FestivalsComponent
  },
  {
    path: "about", component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
