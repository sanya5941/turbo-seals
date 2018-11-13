import { Component, OnInit, Input } from '@angular/core';
import { CharsService } from '../../services/chars.service';
import { Char } from '../../models/char/char';
import { Skills } from '../../models/char/skills';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {

  @Input() char: Char;
  @Input() public: boolean;

  constructor(
    private ser: CharsService
  ) { }

  ngOnInit() {
  }
}
