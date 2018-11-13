import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageArenaComponent } from './pages/page-arena/page-arena.component';
import { PagePlayerComponent } from './pages/page-player/page-player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/player' },
  { path: 'player', component: PagePlayerComponent },
  { path: 'arena', component: PageArenaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
