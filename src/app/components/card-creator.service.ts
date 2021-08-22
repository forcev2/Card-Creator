import { Injectable } from '@angular/core';
import { CardType } from '../const/card-type';

@Injectable({
  providedIn: 'root'
})
export class CardCreatorService {
  cardTypes: CardType[] = [
    { type: 1, icon: "assets/icons/android_black_24dp.svg", name: "Android" },
    { type: 2, icon: "assets/icons/build_black_24dp.svg", name: "Mech" },
    { type: 3, icon: "assets/icons/euro_symbol_black_24dp.svg", name: "Unia" }
  ]


  getCardType(type: number): CardType {

    console.log("For type: ", type)

    for (let card of this.cardTypes) {
      if (card.type == type) {
        console.log("For type: ", card)
        return card;
      }
    }


    return null;
  }

  constructor() { }
}
