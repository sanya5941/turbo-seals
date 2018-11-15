import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageArenaComponent } from './pages/page-arena/page-arena.component';
import { PagePlayerComponent } from './pages/page-player/page-player.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'player', component: PagePlayerComponent },
  { path: 'arena', component: PageArenaComponent },
  { 
    path: '', 
    component: PageLoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'registration',
        component: RegistrationFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
