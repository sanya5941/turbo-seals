import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player/player';
import { Char } from '../../models/char/char';
import { Router } from '@angular/router';
import { Inventory } from '../../models/char/inventory/inventory';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private email: string = '';
  private pass: string = '';

  constructor(
    private playersService: PlayersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.email = this.email.trim();
    this.pass = this.pass.trim();

    if (!this.email.trim()) return;
    if (!this.pass.trim()) return;

    this.playersService.loginPlayer(this.email, this.pass).subscribe(response => {
      let player = this.playersService.getPlayerFromResponse(response);
      this.playersService.setPlayer(player);
      this.router.navigateByUrl('/player');
    });
  }
}
