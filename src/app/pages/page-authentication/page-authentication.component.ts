import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-authentication',
  templateUrl: './page-authentication.component.html',
  styleUrls: ['./page-authentication.component.scss']
})
export class PageAuthenticationComponent implements OnInit {

  constructor(
    private playersService: PlayersService,
    private router: Router
  ) { 
    let auth = this.playersService.getAuthentication();
    if (auth) {
      this.router.navigateByUrl('/player');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

}
