import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ability, AbilityCreatorComponent } from '../ability-creator/ability-creator.component';
import { CardCreatorService } from '../card-creator.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.scss'],
  providers: [CardCreatorService, NgbModal]
})
export class CardCreatorComponent implements OnInit {
  name: string;
  description: string;
  image: File;
  type: number;
  health: number;
  attack: number;

  abilities: Ability[] = [];

  imagePath: string;
  imgURL: any;

  numbersNegative: boolean;
  allFilled: boolean = true;



  constructor(
    public creatorService: CardCreatorService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.abilities.push({ name: "ability" })
  }

  onProfitSelectionChange(type): void {
    this.type = type;
  }

  open(content) {
    if (!this.cannotAddMoreAbilities()) {
      const modalRef = this.modalService.open(AbilityCreatorComponent);
      modalRef.componentInstance.ability = { ability: null, id: -1 }
      modalRef.componentInstance.abilityEmitter.subscribe((ability) => {
        if (Object.keys(ability).length) {
          this.abilityAdd(ability);
        }
        modalRef.close();
      })
    }
  }

  abilityAdd(ability: Ability) {
    this.modalService.dismissAll();
    this.abilities.push(ability);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  removeAbility(i: number) {
    this.abilities.splice(i, 1);
  }

  editAbility(i: number) {
    const modalRef = this.modalService.open(AbilityCreatorComponent);
    modalRef.componentInstance.ability = { ability: this.abilities[i], id: i }
    modalRef.componentInstance.abilityEmitter.subscribe((ability) => {
      if (Object.keys(ability).length) {
        this.abilities[i] = ability;
      }
      modalRef.close();
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      console.log(reader.result)
      this.imgURL = reader.result;

      console.log(this.imgURL)
    }
  }

  cannotAddMoreAbilities() {
    return this.abilities.length >= 3;
  }

  createCard() {
    this.numbersNegative = this.numbersAreNegative();
    this.allFilled = this.canCreateCard();
    if (!this.numbersNegative && this.allFilled) {
      const modalRef = this.modalService.open(ConfirmModalComponent);
    }
  }

  numbersAreNegative() {
    return (this.health < 0 || this.attack < 0);
  }

  canCreateCard() {
    if (this.name &&
      this.image &&
      this.description &&
      this.attack &&
      this.health &&
      this.type) {
      return true;

    }
    return false;
  }
}

