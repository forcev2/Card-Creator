import { Component, OnInit } from '@angular/core';
import { CardCreatorService } from '../card-creator.service';


@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.scss'],
  providers: [CardCreatorService]
})
export class CardCreatorComponent implements OnInit {

  name: string;
  description: string;
  image: File;
  type: number;
  health: number;
  attack: number;

  imagePath: string;
  imgURL: any;


  constructor(public creatorService: CardCreatorService) { }

  ngOnInit() {
  }

  onProfitSelectionChange(type): void {
    this.type = type;
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
      this.imgURL = reader.result;

      console.log(this.imgURL)
    }
  }
}

