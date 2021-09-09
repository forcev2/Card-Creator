import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './components/vote/vote.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpURL: string = 'http://localhost:3000';


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


  constructor(private http: HttpClient) { }
}
