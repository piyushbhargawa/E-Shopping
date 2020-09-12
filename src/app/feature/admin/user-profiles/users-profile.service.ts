import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersProfileService {

  constructor(private http: HttpClient) { }

  allUsers() {
    const URL = environment.BASE_URL+"login";
    return this.http.get(URL);
  }
}
