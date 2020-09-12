import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }
  private subject ;

  sendMessage(message) {
      this.subject = message;
  }

  // clearMessage() {
  //     this.subject.next();
  // }

  getMessage() {
      return this.subject;
  }
}
