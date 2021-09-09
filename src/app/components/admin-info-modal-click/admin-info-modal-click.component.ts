import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbilityCreatorService } from '../ability-creator.service';
import { CardCreatorService } from '../card-creator.service';
import { Card } from '../vote/vote.component';

@Component({
  selector: 'app-admin-info-modal-click',
  templateUrl: './admin-info-modal-click.component.html',
  styleUrls: ['./admin-info-modal-click.component.scss']
})
export class AdminInfoModalClickComponent implements OnInit {

  @Input()
  card: Card = {
    id: 8,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
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

  @Input()
  isSelected: boolean = false;

  @Output()
  closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(null);

  service = AbilityCreatorService;
  cardService = CardCreatorService;

  constructor() { }

  ngOnInit() {
    console.log("card", this.card);
  }

  cancel() {
    this.closeEmitter.emit(undefined);
  }

  select() {
    this.closeEmitter.emit(true);
  }

  delete() {
    this.closeEmitter.emit(false);
  }
}
