import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../ability-creator/ability-creator.component';
import { CardCreatorService } from '../card-creator.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  description: string;

  @Input()
  imgURL: any;

  @Input()
  type: number;

  @Input()
  health: number;

  @Input()
  attack: number;

  @Input()
  abilities: Ability[];


  constructor(public creatorService: CardCreatorService) { }

  ngOnInit() {
  }

}
