import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  productDetails(id) {
    const URL = environment.BASE_URL+"Product/"+id;
    return this.http.get(URL);
  }

  getUserDetails(userId) {
    const URL = environment.BASE_URL+"login/"+userId;
    return this.http.get(URL);
  }

  addingProduct(Data, userId) {
    const URL= environment.BASE_URL+"login/"+userId;
    return this.http.put(URL, Data);
  }
}
