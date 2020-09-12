import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getImageData() {
    const URL = environment.BASE_URL + "dashboard";
    return this.http.get(URL);
  }
}
