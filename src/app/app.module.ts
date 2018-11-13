import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharComponent } from './components/char/char.component';
import { CharsService } from './services/chars.service';
import { PagePlayerComponent } from './pages/page-player/page-player.component';

@NgModule({
  declarations: [
    AppComponent,
    CharComponent,
    PagePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CharsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
