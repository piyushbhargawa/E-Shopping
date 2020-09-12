import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = environment.BASE_URL+"login/"+localStorage.getItem('currentUserId');
  constructor(private http: HttpClient) { }

  address() {
    return this.http.get(this.URL);
  }

  addAddress(data) {
    return this.http.patch(this.URL, data);
  }

  updateAddress(data) {
    return this.http.patch(this.URL, data);
  }

  deleteAddress(data) {
    return this.http.patch(this.URL, data);
  }

  getUserDetails() {
    return this.http.get(this.URL);
  }

  getProductDetails(productId) {
    const URL = environment.BASE_URL+"Product/"+productId;
    return this.http.get(URL);
  }

  updateOrderDetails(data) {
    return this.http.put(this.URL, data);
  }
}
