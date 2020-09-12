import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentOptionService {
  private subject = new BehaviorSubject<any>(0);

  constructor() { }

  sendMessage(message) {
    this.subject.next(message);
  }

  getMessage() {
    return this.subject;
  }
}
