import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonChartService {

  constructor(private http: HttpClient) { }

  getUserData() {
    const URL = environment.BASE_URL+"login";
    return this.http.get(URL);
  }

  getProduct(id) {
    const URL = environment.BASE_URL+"Product/" + id;
    return this.http.get(URL);
  }

  getAllProducts() {
    const URL = environment.BASE_URL+"Product";
    return this.http.get(URL);
  }
}
