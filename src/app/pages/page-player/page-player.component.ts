import { Component, OnInit } from '@angular/core';
import { Char } from '../../models/char/char';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-player',
  templateUrl: './page-player.component.html',
  styleUrls: ['./page-player.component.scss']
})
export class PagePlayerComponent implements OnInit {

  private char: Char;

  constructor(
    private playersService: PlayersService,
    private router: Router
  ) { 
    this.playersService.getPlayer(player => {
      if (!player) return this.router.navigateByUrl('/');
      this.char = player.getChar();
    });
  }

  ngOnInit() {
  }

  private logout(): void {
    this.playersService.logoutPlayer();
    this.router.navigateByUrl('/');
  }
}
