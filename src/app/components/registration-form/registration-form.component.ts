import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player/player';
import { Char } from '../../models/char/char';
import { Router } from '@angular/router';

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
    private playersService: PlayersService,
    private router: Router
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

    this.playersService.registerPlayer(this.email, this.pass, new Char(this.name)).subscribe(response => {
      if (response.success) {
        console.log(response.message);
        return this.router.navigateByUrl('/login');
      }
      else console.log(response.message);
    })
  }
}
