import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  onSignUp(data) {
    const URL = environment.BASE_URL+"login";
    return this.http.post(URL, data);
  }
}
