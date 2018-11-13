import { Injectable } from '@angular/core';
import { Char } from '../models/char/char';
import { Turbine } from '../models/char/inventory/turbine';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  private playerChar: Char;

  constructor() { 
    this.playerChar = new Char('Alex', 'assets/img/avatar.jpg');

    let turbine = new Turbine('Стартовая турбина', 3); 
    turbine.activate();
    this.playerChar.getInventory().addThing(turbine);
  }

  public getPlayerChar(): Char {
    return this.playerChar;
  }
}
