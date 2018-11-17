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
  private HASHED_PASS: string = 'auth2';

  private player: Player;
  private url: string = 'http://secretproject.of.by/players/';
  // private url: string = 'http://localhost:3000/players/';

  constructor(
    private http: HttpClient
  ) { }

  public setPlayer(player: Player): void {
    this.player = player;
    localStorage.setItem(this.AUTH_KEY, this.player.getId());
    localStorage.setItem(this.HASHED_PASS, this.player.getHashedPass());
  }

  public clearPlayer(): void {
    this.player = null;
  }

  public getPlayer(callback: Function): void {
    if (this.player) return callback(this.player);

    let auth = this.getAuthentication();
    if (auth) {
      this.getAuthorizedPlayer().subscribe(response => {
        let player = this.getPlayerFromResponse(response);
        this.setPlayer(player);
        return callback(player);
      });
    } else {
      return callback(null);
    }
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

  private getAuthorizedPlayer(): Observable<any> {
    return this.http.post(this.url + 'authorized', {
      id: localStorage.getItem(this.AUTH_KEY),
      hashedPassword: localStorage.getItem(this.HASHED_PASS)
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  public logoutPlayer(): void {
    this.clearPlayer();
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.HASHED_PASS);
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
    player.setHashedPass(response.player.hashedPassword);

    return player;
  }

  public getAuthentication(): boolean {
    if (localStorage.getItem(this.AUTH_KEY) && localStorage.getItem(this.HASHED_PASS)) {
      return true;
    }

    return false;
  }
}
