import { Injectable } from '@angular/core';
import { Observable, Subject, AsyncSubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private subject : string;

  sendMessage(message: string) {
      this.subject = message;
  }

  getMessage(){
      return this.subject;
  }

}
