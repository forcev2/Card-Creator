import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbilityCreatorService } from '../ability-creator.service';
import { CardCreatorService } from '../card-creator.service';

@Component({
  selector: 'app-ability-creator',
  templateUrl: './ability-creator.component.html',
  styleUrls: ['./ability-creator.component.scss']
})
export class AbilityCreatorComponent implements OnInit {

  name: string;
  when: number;
  action: number;
  actionValue: number;
  target: number;
  targetType: number;
  constraintType: number[] = [];
  constraintDefenceCheck: boolean = false;
  constraintDefence: number;
  constraintAttackCheck: boolean = false;
  constraintAttack: number;


  showErrorMessage: boolean = false;

  @Input()
  ability: { ability: Ability, id: number };

  @Output()
  abilityEmitter = new EventEmitter<Ability>();

  @Output()
  closeEmitter = new EventEmitter<Ability>();

  abilityCreatorService = AbilityCreatorService;
  creatorService = CardCreatorService;

  constructor(
    public abilityCreator: AbilityCreatorService,
  ) { }

  ngOnInit() {
    if (this.ability.id != -1) {
      this.name = this.ability.ability.name;
      this.when = this.ability.ability.when;
      this.action = this.ability.ability.action;
      this.actionValue = this.ability.ability.actionValue;
      this.target = this.ability.ability.target;
      this.targetType = this.ability.ability.targetType;
      this.constraintType = this.ability.ability.constraintType;
      this.constraintDefenceCheck = this.ability.ability.constraintDefenceCheck;
      this.constraintDefence = this.ability.ability.constraintDefence;
      this.constraintAttackCheck = this.ability.ability.constraintAttackCheck;
      this.constraintAttack = this.ability.ability.constraintAttack;
    }
  }

  onTypeSelectionChange(type: number): void {
    const typeIndex: number = this.constraintType.findIndex((typeTemp) => {
      return type == typeTemp;
    });
    if (typeIndex != -1) {
      this.constraintType.splice(typeIndex, 1);
    }
    else {
      this.constraintType.push(type)
    }
  }

  isChecked(type: number) {
    return this.constraintType.includes(type);
  }

  addAction() {
    const ability: Ability = this.acceptAbility();
    if (ability) {
      this.abilityEmitter.emit(ability);
    }
    else {
      this.showErrorMessage = true;
    }
  }

  close() {
    this.abilityEmitter.emit(<Ability>{});
  }

  acceptAbility(): Ability {
    if (this.name && this.when && this.action
      && this.actionValue && this.target && this.targetType
      && this.constraintType.length != 0 && (!this.constraintAttackCheck || this.constraintAttack > 0)
      && (!this.constraintDefenceCheck || this.constraintDefence > 0)) {
      return {
        name: this.name,
        when: parseInt('' + this.when),
        action: parseInt('' + this.action),
        actionValue: this.actionValue,
        target: parseInt('' + this.target),
        targetType: parseInt('' + this.targetType),
        constraintType: this.constraintType,
        constraintDefenceCheck: this.constraintDefenceCheck,
        constraintDefence: this.constraintDefence,
        constraintAttackCheck: this.constraintAttackCheck,
        constraintAttack: this.constraintAttack,
      }
    }
    return null;
  }

}

export class Ability {
  name: string;
  when: number;
  action: number;
  actionValue: number;
  target: number;
  targetType: number;
  constraintType: number[] = [];
  constraintDefenceCheck: boolean;
  constraintDefence: number;
  constraintAttackCheck: boolean;
  constraintAttack: number;
}
