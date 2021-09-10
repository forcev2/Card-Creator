import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { AbilityCreatorService } from '../ability-creator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  notAllFilled: boolean = false;

  clickedRegister: boolean = false;

  badpassword: boolean = false;

  constructor(
    public abilityCreator: AbilityCreatorService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  acceptRegistration() {
    this.clickedRegister = true;
    this.notAllFilled = !this.username && !this.password;
    this.clickedRegister = true;
    if (!this.notAllFilled) {
      this.dataService.login(this.password, this.username).subscribe((correct) => {
        this.dataService.loginChangeValue(<boolean>correct);
        this.badpassword = !correct;
        if (correct) {
          this.router.navigate(['vote']);
        }
      })
    }
    return null;
  }

}
