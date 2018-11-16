import { Component, OnInit } from '@angular/core';
import { Char } from '../../models/char/char';
import { CharsService } from '../../services/chars.service';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-arena',
  templateUrl: './page-arena.component.html',
  styleUrls: ['./page-arena.component.scss']
})
export class PageArenaComponent implements OnInit {

  private playerChar: Char;
  private bot: Char;

  private fighting;

  constructor(
    private charsService: CharsService,
    private playersService: PlayersService,
    private router: Router
  ) { 
    this.playersService.getPlayer(player => {
      if (!player) return this.router.navigateByUrl('/');
      this.playerChar = player.getChar();
      this.bot = this.charsService.getBot(this.playerChar);
    });

    this.fighting = {
      logs: [],
      done: false,
      winner: null
    }
  }

  ngOnInit() {
  }

  public fight(): void {
    for (let i = 0; this.bot.getHealth() > 0, this.playerChar.getHealth() > 0, i < 20; i++) {
      let damage = 0;

      damage = this.bot.kick(this.playerChar);
      this.addLog(`${this.playerChar.getName()} does damage ${damage}.`);

      damage = this.playerChar.kick(this.bot);
      this.addLog(`${this.bot.getName()} does damage ${damage}.`);
    }

    this.fighting.done = true;
    if (this.playerChar.getHealth() >= this.bot.getHealth()) {
      this.fighting.winner = this.fighting.player;
    } else {
      this.fighting.winner = this.bot;
    }
  }

  private addLog(log): void {
    this.fighting.logs.push(log);
  }
}