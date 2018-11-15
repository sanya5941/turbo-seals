import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Char } from '../../models/char/char';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {

  @Input() char: Char;
  @Input() isPublic: boolean;

  private allow: boolean;

  constructor() { 
    this.allow = false;

    console.log(this);
  }

  ngOnInit() {
  }
}
