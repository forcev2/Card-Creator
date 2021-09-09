import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../data.service';
import { AbilityCreatorService } from '../ability-creator.service';
import { Ability } from '../ability-creator/ability-creator.component';
import { AdminInfoModalClickComponent } from '../admin-info-modal-click/admin-info-modal-click.component';
import { CardCreatorService } from '../card-creator.service';
import { Card } from '../vote/vote.component';

@Component({
  selector: 'app-admin-card-approval',
  templateUrl: './admin-card-approval.component.html',
  styleUrls: ['./admin-card-approval.component.scss']
})
export class AdminCardApprovalComponent implements OnInit {

  openFilterMenu: boolean = true;

  constraintType: number[] = [];

  cardsVisible: Card[] = [];

  selectedCards: Card[] = [];

  deletedCards: Card[] = [];

  cards: Card[] = []

  cardType: number = null;
  defence: number = null;
  attack: number = null;
  abilityType: number = null;
  actionType: number = null;
  abilityTarget: number = null;

  search: string = '';


  abilityCreatorService = AbilityCreatorService;
  cardCreatorService = CardCreatorService;

  constructor(
    public abilityCreator: AbilityCreatorService,
    public creatorService: CardCreatorService,
    private modalService: NgbModal,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getCards().subscribe((cards) => {
      this.cards = cards;
      this.cardsVisible = [...this.cards];

      this.dataService.approvedIds().subscribe((approvedObject) => {
        const approveIds = approvedObject.map(approveId => approveId.cardid)
        this.selectedCards = this.cards.filter(card => approveIds.includes(card._id))
      })
    })
  }

  isChecked(type: number) {
    return this.constraintType.includes(type);
  }

  filterMenuSwitch() {
    this.cardsVisible = [...this.cards];
    this.openFilterMenu = !this.openFilterMenu;
    this.clearFilters();
    this.filterChange();
  }


  clearFilters() {
    this.cardType = null;
    this.defence = null;
    this.attack = null;
    this.abilityType = null;
    this.actionType = null;
    this.abilityTarget = null;
  }


  filterChange() {
    this.cardsVisible = [...this.cards.filter((card) => {
      const abilityCheck = (this.abilityType !== null || this.abilityTarget !== null || this.actionType !== null) ? this.containsAbility(card) : true;
      const searchCheck = (this.search != null && this.search.length > 0) ? this.containsPhrase(card) : true;
      return (this.attack === null || card.attack === this.attack) &&
        (this.defence === null || card.health === this.defence) &&
        (this.cardType === null || this.cardType == card.type) &&
        abilityCheck && searchCheck
    })]
  }

  containsAbility(card: Card) {
    const abilities = card.abilities.filter((ability) => {
      return (this.abilityType == null || ability.when == this.abilityType) &&
        (this.abilityTarget == null || ability.target == this.abilityTarget) &&
        (this.actionType == null || this.actionType == ability.action)
    })
    return abilities.length > 0;
  }

  containsPhrase(card: Card) {
    let cardString = card.name;
    cardString += card.description;
    card.abilities.map((ability) => {
      cardString += ability.name;
    })
    cardString = cardString.toLowerCase();
    const search = this.search.toLowerCase();
    let searchPhrases = search.split(' ');
    searchPhrases = searchPhrases.filter((str) => str != '');

    for (let str of searchPhrases) {
      if (!cardString.includes(str)) {
        return false;
      }
    }
    return true;
  }

  selectCard(card: Card) {
    const selectedCardID = this.selectedCards.findIndex((cardTemp) =>
      cardTemp._id === card._id
    )
    if (selectedCardID == -1) {
      this.dataService.approveCard(card).subscribe((_) => {
        this.selectedCards.push(card);
      })
    }
    else {
      this.dataService.approveCardReverse(card).subscribe((_) => {
        this.selectedCards.splice(selectedCardID, 1);
      })
    }
  }

  deleteCard(card: Card) {
    this.deletedCards.push(card);
    const cardIndex = this.selectedCards.findIndex((cardTemp) => {
      return cardTemp._id === card._id;
    })
    cardIndex !== -1 ? this.selectedCards.splice(cardIndex, 1) : false
  }

  onCardClick(card: Card) {
    if (!this.deletedCards.includes(card)) {
      const modalRef = this.modalService.open(AdminInfoModalClickComponent);
      modalRef.componentInstance.isSelected = this.isSelected(card)
      modalRef.componentInstance.card = card
      modalRef.componentInstance.closeEmitter.subscribe((close) => {
        modalRef.close();
        if (close === false) {
          this.deleteCard(card);
        }
        else if (close) {
          this.selectCard(card);
        }
      })
    }
  }

  isSelected(card: Card) {
    return this.selectedCards.includes(card);
  }

  isDeleted(card: Card) {
    return this.deletedCards.includes(card);
  }

}
