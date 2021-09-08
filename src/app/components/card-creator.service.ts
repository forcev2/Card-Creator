import { Injectable } from '@angular/core';
import { CardType } from '../const/card-type';

@Injectable({
  providedIn: 'root'
})
export class CardCreatorService {
  static cardTypes: CardType[] = [
    { type: 1, icon: "assets/icons/android_black_24dp.svg", name: "Android" },
    { type: 2, icon: "assets/icons/build_black_24dp.svg", name: "Mech" },
    { type: 3, icon: "assets/icons/euro_symbol_black_24dp.svg", name: "Unia" }
  ]

  getCardType(type: number): CardType {

    for (let card of CardCreatorService.cardTypes) {
      if (card.type == type) {
        return card;
      }
    }


    return null;
  }


  constructor() { }
}

