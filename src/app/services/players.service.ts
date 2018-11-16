import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player/player';
import { HttpClient } from '@angular/common/http';
import { Char } from '../models/char/char';
import { Inventory } from '../models/char/inventory/inventory';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private AUTH_KEY: string = 'auth';

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
    localStorage.setItem(this.AUTH_KEY, this.player.getId());
  }

  public getPlayer(callback = (player) => {}): void {
    if (this.player) return callback(this.player);

    let auth = this.getAuthentication();
    if (auth) {
      this.loginPlayerById(auth).subscribe(response => {
        let player = this.getPlayerFromResponse(response);
        this.setPlayer(player);
        return callback(player);
      });
    } else {
      return callback(null);
    }
  }

  public clearPlayer(): void {
    this.player = null;
  }

  public registerPlayer(email: string, password: string, char: Char): Observable<any> {
    return this.http.post(this.url + 'register', {
      email,
      password,
      char
    }, {
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

  public loginPlayerById(id: string): Observable<any> {
    return this.http.post(this.url + 'get', {
      _id: id
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  public logoutPlayer(): void {
    this.clearPlayer();
    localStorage.removeItem(this.AUTH_KEY);
  }

  public getPlayerFromResponse(response) {
    let char = new Char(response.player.char.name);
    char.setLevel(response.player.char.level);
    char.setMoney(response.player.char.money);
    char.setExperience(response.player.char.experience);
    char.setHealth(response.player.char.health);
    char.setInventory(new Inventory(JSON.parse(response.player.char.inventory)));
    char.setSkills(JSON.parse(response.player.char.skills));
    char.setAvatarPath(response.player.char.avatarPath);

    let player = new Player(response.player._id, response.player.email, char);

    return player;
  }

  public getAuthentication(): string {
    if (localStorage.getItem(this.AUTH_KEY)) {
      return localStorage.getItem(this.AUTH_KEY);
    }

    return null;
  }
}
