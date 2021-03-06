import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbilityCreatorService } from '../ability-creator.service';
import { CardCreatorService } from '../card-creator.service';
import { Card } from '../vote/vote.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input()
  card: Card = {
    id: 8,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    _id: -1,
    abilities: [{
      name: "Test",
      when: 0,
      action: 0,
      actionValue: 5,
      target: 1,
      targetType: 1,
      constraintType: [
        1,
        3
      ],
      constraintDefenceCheck: true,
      constraintDefence: 5,
      constraintAttackCheck: false,
      constraintAttack: 5,
    }],
  };

  @Output()
  closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(null);

  service = AbilityCreatorService;
  cardService = CardCreatorService;

  constructor() { }

  ngOnInit() {
    console.log("card", this.card);
  }

  close() {
    this.closeEmitter.emit(true);
  }
}
