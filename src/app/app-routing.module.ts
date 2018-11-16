import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageArenaComponent } from './pages/page-arena/page-arena.component';
import { PagePlayerComponent } from './pages/page-player/page-player.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { PageAuthenticationComponent } from './pages/page-authentication/page-authentication.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PageAuthenticationComponent },
  { path: 'player', component: PagePlayerComponent },
  { path: 'arena', component: PageArenaComponent },
  { 
    path: 'login',
    component: PageLoginComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent,
        pathMatch: 'full',
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
