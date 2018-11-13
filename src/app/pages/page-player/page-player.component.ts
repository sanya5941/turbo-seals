import { Component, OnInit } from '@angular/core';
import { Char } from '../../models/char/char';
import { CharsService } from '../../services/chars.service';

@Component({
  selector: 'app-page-player',
  templateUrl: './page-player.component.html',
  styleUrls: ['./page-player.component.scss']
})
export class PagePlayerComponent implements OnInit {

  private char: Char;

  constructor(
    private charsService: CharsService
  ) { 
    this.char = charsService.getPlayerChar();
  }

  ngOnInit() {
  }

}
