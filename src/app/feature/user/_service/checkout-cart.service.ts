import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  constructor() { }
  private data = new BehaviorSubject<any>(0);

  sendMessage(message) {
    this.data.next(message);
  }

  getMessage() {
    return this.data;
  }
}
