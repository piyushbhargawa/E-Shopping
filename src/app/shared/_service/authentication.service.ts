import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as CryptoJS from "crypto-js";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  decPassword = "qwertyuiop";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      localStorage.getItem('currentUser')
      // false
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  isAdmin() {
    return localStorage.getItem('admin');
  }

  cartItems() {
    return localStorage.getItem('cartItem');
  }

  login(username: string, password: string) {
    if (username && password) {
      localStorage.setItem('currentUser', "loggedin");
      localStorage.setItem('currentUserId', username);
      const URL = environment.BASE_URL + "login?id=" + username;
      return this.http.get(URL).subscribe(data => {
        var pass = CryptoJS.AES.decrypt(
          data[0].password.trim(),
          this.decPassword.trim()
        ).toString(CryptoJS.enc.Utf8);
        if (pass === password) {
          this.currentUserSubject.next(data);
          console.log(data);
        }
        localStorage.setItem('cartItem', data[0].cart.length);
        localStorage.setItem('admin', data[0].admin);
        return data;
      });
    }
  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('currentUserId');
    // localStorage.removeItem('admin');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
