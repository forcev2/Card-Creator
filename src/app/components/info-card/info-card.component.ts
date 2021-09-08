import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../vote/vote.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input()
  card: Card;

  constructor() { }

  ngOnInit() {
  }

}
