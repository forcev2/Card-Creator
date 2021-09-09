import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilityCreatorService {
  static abilityTypes: { type: number, name: string }[] = [
    { type: 0, name: "When played" },
    { type: 1, name: "After attack" },
    { type: 2, name: "When damage is dealt" },
    { type: 3, name: "After getting attacked" },
    { type: 4, name: "After taking damage" },
    { type: 5, name: "After dying" },
    { type: 6, name: "After destroying a card" },
  ]

  static actionTypes: { type: number, name: string }[] = [
    { type: 0, name: "Deal damage" },
    { type: 1, name: "Heal" },
    { type: 2, name: "Add extra attack points" },
    { type: 3, name: "Add extra defence points" }
  ]

  static targetTypes: { type: number, name: string }[] = [
    { type: 0, name: "Self" },
    { type: 1, name: "Opponent cards" },
    { type: 2, name: "Your cards" },
    { type: 3, name: "Yours and opponent cards" },
  ]

  static specificTargetTypes: { type: number, name: string }[] = [
    { type: 0, name: "Choosen" },
    { type: 1, name: "Random" },
    { type: 2, name: "Adjacent" },
    { type: 3, name: "All" },
  ]


  constructor() { }
}
