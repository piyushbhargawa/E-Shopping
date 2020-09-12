import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  loadProduct(i,category) {
    const URL= environment.BASE_URL+"Product?_page=1&_limit="+i+"&q="+category;
    const URL1= environment.BASE_URL+"Product?_page=1&_limit="+i;
    if(category !== 'false')
      return this.http.get(URL);
    else
      return this.http.get(URL1);
  }

  viewProduct() {
    const URL= environment.BASE_URL+"Product";
    return this.http.get(URL);
  }

  addProduct(data) {
    const URL = environment.BASE_URL+"Product";
    return this.http.post(URL, data);
  }

  updateProduct(id, data) {
    const URL = environment.BASE_URL+"Product/"+id;
    return this.http.put(URL, data);
  }

  deleteProduct(id) {
    const URL = environment.BASE_URL+"Product/"+id;
    return this.http.delete(URL);
  }
}
