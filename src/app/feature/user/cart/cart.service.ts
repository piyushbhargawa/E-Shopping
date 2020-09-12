import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfileModule } from '../user-profile/user-profile.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  loadCartProducts(userId){
    const URL =environment.BASE_URL+"login/"+userId;
    return this.http.get(URL);
  }

  productsDetail(productId) {
    const URL= environment.BASE_URL+"Product/"+productId;
    return this.http.get(URL);
  }

  removeCartProduct(userId, data) {
    const URL = environment.BASE_URL+"login/"+userId;
    return this.http.put(URL, data);
  }

  updateQty(data) {
    const URL = environment.BASE_URL+"login/"+localStorage.getItem('currentUserId');
    return this.http.patch(URL, data);
  }
}
