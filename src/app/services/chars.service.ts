import { Injectable } from '@angular/core';
import { Char } from '../models/char/char';
import { Turbine } from '../models/char/inventory/turbine';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharsService {
  constructor(
  ) { }

  public getBot(char: Char): Char {
    let bot = new Char('Bot');

    let diff = 3;

    bot.setLevel(char.getLevel() + Math.round(Math.random() * (diff * 2) - diff));

    if (bot.getLevel() < 1) bot.setLevel(1);

    let points = 2 * bot.getLevel();

    let skills = [1, 1, 1, 1, 1];

    do {
      let skill = Math.round(Math.random() * 4);
      skills[skill] += 1;

      points -= 1;
    } while (points > 0);

    bot.getSkills().power = skills[0];
    bot.getSkills().strength = skills[1];
    bot.getSkills().agility = skills[2];
    bot.getSkills().fireRate = skills[3];
    bot.getSkills().accuracy = skills[4];
    
    return bot;
  }
}
