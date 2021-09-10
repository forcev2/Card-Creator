import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from './components/vote/vote.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpURL: string = 'http://localhost:3000';

  loggedIn: Subject<boolean> = new Subject();



  getCards(): Observable<Card[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.get<Card[]>(this.httpURL + '/cards');
  }

  addCard(card: Card) {
    return this.http.post(this.httpURL + '/addCard', card);
  }

  deleteCard(card: Card) {
    return this.http.post(this.httpURL + '/deleteCard', card);
  }

  approvedIds(): Observable<{ cardid: any }[]> {
    return this.http.get<{ cardid: any }[]>(this.httpURL + '/approvedIds');
  }

  approveCard(card: Card) {
    return this.http.post(this.httpURL + '/approveCard', card);
  }

  approveCardReverse(card: Card) {
    return this.http.post(this.httpURL + '/disapproveCard', card);
  }

  voteCard(card: Card, userID: any) {
    return this.http.post(this.httpURL + '/voteCard', { cardid: card._id, userid: userID });
  }

  login(password: string, username: string) {
    return this.http.post(this.httpURL + '/login', { password: password, username: username });
  }

  register(password: string, username: string) {
    console.log(password)
    return this.http.post(this.httpURL + '/register', { password: password, username: username });
  }


  loginChangeValue(correct: boolean) {
    this.loggedIn.next(correct)
  }



  constructor(private http: HttpClient) { }
}
