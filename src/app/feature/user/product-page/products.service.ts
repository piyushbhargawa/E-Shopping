import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  Electronics() {
    const URL = environment.BASE_URL+"products";
    return this.http.get(URL);
  }
  Products(category) {
    const URL = environment.BASE_URL+"product?q="+category;
    return this.http.get(URL);
  }
  getUserData() {
    const URL = environment.BASE_URL+"login/"+localStorage.getItem('currentUserId');
    return this.http.get(URL);
  }

  addingProduct(userData) {
    const URL = environment.BASE_URL+"login/"+localStorage.getItem('currentUserId');
    return this.http.put(URL, userData);
  }
}
