import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharComponent } from './components/char/char.component';
import { CharsService } from './services/chars.service';
import { PagePlayerComponent } from './pages/page-player/page-player.component';
import { PageArenaComponent } from './pages/page-arena/page-arena.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharComponent,
    PagePlayerComponent,
    PageArenaComponent,
    PageLoginComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CharsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
