import { Component, Input, OnInit } from '@angular/core';
import { Ability } from '../ability-creator/ability-creator.component';
import { CardCreatorService } from '../card-creator.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  name: string = "name"

  @Input()
  description: string;

  @Input()
  imgURL: any;

  @Input()
  type: number;

  @Input()
  health: number = 22;

  @Input()
  attack: number = 33;

  @Input()
  abilities: Ability[];


  constructor(public creatorService: CardCreatorService) { }

  ngOnInit() {
  }
}
