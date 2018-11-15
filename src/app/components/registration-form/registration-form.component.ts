import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player/player';
import { Char } from '../../models/char/char';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  private name: string;
  private pass: string;
  private confirmPass: string;
  private email: string;

  constructor(
    private playersService: PlayersService
  ) { 
    this.name = '';
    this.pass = '';
    this.confirmPass = '';
    this.email = '';
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.name = this.name.trim();
    this.email = this.email.trim();

    if (!this.name) return;
    if (!this.pass) return;
    if (!this.confirmPass) return;
    if (!this.email) return;

    if (this.pass !== this.confirmPass) return;

    let player = new Player(this.email, this.pass, new Char(this.name));
    this.playersService.registerPlayer(player).subscribe(response => {
      if (response.success) console.log(response.message);
      else console.log(response.message);
    })
  }
}
