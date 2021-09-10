import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { DataService } from '../../data.service';
import { AbilityCreatorService } from '../ability-creator.service';
import { Ability } from '../ability-creator/ability-creator.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;

  showErrorMessage: boolean = false;

  notAllFilled: boolean = false;
  emailNotSame: boolean = false;
  passwordsNotSame: boolean = false;
  emailTaken: boolean = false;

  clickedRegister: boolean = false;

  constructor(
    public abilityCreator: AbilityCreatorService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  acceptRegistration() {
    this.clickedRegister = true;
    this.notAllFilled = !this.username && !this.email && !this.emailConfirm && !this.password && !this.passwordConfirm;
    this.emailTaken = this.email === 'm@m.com';
    this.emailNotSame = this.email !== this.emailConfirm;
    this.passwordsNotSame = this.password !== this.passwordConfirm;

    if (!this.emailTaken && !this.emailNotSame &&
      !this.passwordsNotSame && !this.notAllFilled) {
      this.dataService.register(this.password, this.username).subscribe(correct => {
        if (correct) {
          this.router.navigate(['login']);
        }
      })
    }
    return null;
  }

}