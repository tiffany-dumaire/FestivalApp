import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FestivalComponent } from './festival/festival.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
    
  },
  {
    path: "", component: FestivalComponent
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
