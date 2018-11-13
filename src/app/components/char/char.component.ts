import { Component, OnInit, Input } from '@angular/core';
import { CharsService } from '../../services/chars.service';
import { Char } from '../../models/char/char';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {

  @Input() char: Char;
  constructor() { }

  ngOnInit() {
    console.log(this.char);
  }

}
