import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private player: Player
  private url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = 'http://localhost:3000/players/';
  }

  public createPlayers(player: Player): Observable<any> {
    return this.http.post('http://localhost:3000/players/create', player, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  public setPlayer(player: Player): void {
    this.player = player;
  }

  public getPlayer(): Player {
    return this.player;
  }

  public registerPlayer(player: Player): Observable<any> {
    return this.http.post(this.url + 'register', player, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  public loginPlayer(email: string, password: string): Observable<any> {
    return this.http.post(this.url + 'login', {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}
