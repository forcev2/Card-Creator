import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkCookies();

    this.dataService.loggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      localStorage.setItem('loggedIn', 'isLoged');
    })
  }

  checkCookies() {
    this.isLoggedIn = localStorage.getItem('loggedIn') !== null;
  }

  logout() {
    this.dataService.loginChangeValue(false);
    localStorage.removeItem('loggedIn');
    this.router.navigate(['']);
  }

}
