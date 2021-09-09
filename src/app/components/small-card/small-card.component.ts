import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ability } from '../ability-creator/ability-creator.component';
import { CardCreatorService } from '../card-creator.service';
import { InfoCardComponent } from '../info-card/info-card.component';
import { Card } from '../vote/vote.component';

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


  card: Card;


  constructor(public creatorService: CardCreatorService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.card = {
      id: -1,
      name: this.name,
      description: this.description,
      imgURL: this.imgURL,
      type: this.type,
      health: this.health,
      attack: this.attack,
      abilities: this.abilities,
      _id: -1,
    }
  }

  openInfoCard(event: any) {
    event.stopPropagation();
    const modalRef = this.modalService.open(InfoCardComponent);
    modalRef.componentInstance.card = this.card
    modalRef.componentInstance.closeEmitter.subscribe((close) => {
      modalRef.close();
    })
  }
}
