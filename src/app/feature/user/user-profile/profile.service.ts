import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  profile(id) {
    const URL = environment.BASE_URL+"login/"+id;
    return this.http.get(URL);
  }

  updateProfile(id, data) {
    const URL = environment.BASE_URL+"login/"+id;
    return this.http.put(URL, data);
  }

  product() {
    const URL = environment.BASE_URL+"Product";
    return this.http.get(URL);
  }

}
