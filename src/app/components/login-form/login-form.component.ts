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
      if (!response.success) return console.log(response.message);

      let char = new Char(response.char.name);
      char.setLevel(response.char.level);
      char.setMoney(response.char.money);
      char.setExperience(response.char.experience);
      char.setHealth(response.char.health);
      char.setInventory(new Inventory(JSON.parse(response.char.inventory)));
      char.setSkills(JSON.parse(response.char.skills));
      char.setAvatarPath(response.char.avatarPath);

      let player = new Player(response.player.email, response.player.password, char);
      this.playersService.setPlayer(player);

      this.router.navigateByUrl('/player');
    });
  }

}
