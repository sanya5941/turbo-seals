import { Component, OnInit } from '@angular/core';
import { Char } from '../../models/char/char';
import { CharsService } from '../../services/chars.service';

@Component({
  selector: 'app-page-arena',
  templateUrl: './page-arena.component.html',
  styleUrls: ['./page-arena.component.scss']
})
export class PageArenaComponent implements OnInit {

  private player: Char;
  private bot: Char;

  private logs: string[];
  private done: boolean;
  private winner: Char;

  constructor(
    private charsService: CharsService
  ) { 
    this.player = charsService.getPlayerChar();
    this.bot = charsService.getBot(this.player);
    this.logs = [];
    this.done = false;
    this.winner = null;
  }

  ngOnInit() {
  }

  public fight(): void {
    for (let i = 0; this.bot.getHealth() > 0, this.player.getHealth() > 0, i < 20; i++) {
      let damage = 0;

      damage = this.bot.kick(this.player);
      this.addLog(`${this.player.getName()} does damage ${damage}.`);

      damage = this.player.kick(this.bot);
      this.addLog(`${this.bot.getName()} does damage ${damage}.`);
    }

    this.done = true;
    if (this.player.getHealth() >= this.bot.getHealth()) {
      this.winner = this.player;
    } else {
      this.winner = this.bot;
    }
  }

  private addLog(log): void {
    this.logs.push(log);
  }

}
