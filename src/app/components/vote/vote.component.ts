import { Component, Input, OnInit, setTestabilityGetter } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { AbilityCreatorService } from '../ability-creator.service';
import { Ability } from '../ability-creator/ability-creator.component';
import { CardCreatorService } from '../card-creator.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  openFilterMenu: boolean = true;

  constraintType: number[] = [];

  cardsVisible: Card[] = [];

  selectedCards: Card[] = [];

  cards: Card[] = [
    {
      id: 0,
      name: 'GGG',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 111,
      attack: 2,
      abilities: [],
    },
    {
      id: 1,
      name: 'GGG',
      description: 'desc',
      imgURL: 'fil',
      type: 2,
      health: 11,
      attack: 22,
      abilities: [],
    },
    {
      id: 2,
      name: 'name',
      description: 'desc',
      imgURL: 'fil',
      type: 2,
      health: 111,
      attack: 2,
      abilities: [],
    },
    {
      id: 3,
      name: 'name',
      description: 'desc',
      imgURL: 'fil',
      type: 3,
      health: 111,
      attack: 22,
      abilities: [],
    },
    {
      id: 4,
      name: 'GGG',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 11,
      attack: 22,
      abilities: [],
    },
    {
      id: 5,
      name: 'name',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 11,
      attack: 22,
      abilities: [],
    },
    {
      id: 6,
      name: 'name',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 11,
      attack: 22,
      abilities: [],
    },
    {
      id: 7,
      name: 'GGG',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 11,
      attack: 22,
      abilities: [],
    },
    {
      id: 8,
      name: 'name',
      description: 'desc',
      imgURL: 'fil',
      type: 1,
      health: 11,
      attack: 22,
      abilities: [],
    },
  ]

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
    public creatorService: CardCreatorService
  ) { }

  ngOnInit() {
    this.cardsVisible = [...this.cards];
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
      cardTemp.id === card.id
    )
    if (selectedCardID == -1) {
      this.selectedCards.push(card)
    }
    else {
      this.selectedCards.splice(selectedCardID, 1);
    }
    console.log(this.selectedCards)
  }

  isSelected(card: Card) {
    return this.selectedCards.includes(card);
  }

}

export class Card {
  id: number;
  name: string;
  description: string;
  imgURL: any;
  type: number;
  health: number;
  attack: number;
  abilities: Ability[];
}
