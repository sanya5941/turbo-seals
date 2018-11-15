import { Component, OnInit } from '@angular/core';
import { Char } from '../../models/char/char';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-page-player',
  templateUrl: './page-player.component.html',
  styleUrls: ['./page-player.component.scss']
})
export class PagePlayerComponent implements OnInit {

  private char: Char;

  constructor(
    private playersService: PlayersService
  ) { 
    this.char = this.playersService.getPlayer().getChar();
  }

  ngOnInit() {
    
  }
}
