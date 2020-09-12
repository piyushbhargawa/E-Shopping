import { Component, OnInit } from '@angular/core';
import { CommonChartService } from '../common-chart.service';

@Component({
  selector: 'app-total-user',
  templateUrl: './total-user.component.html',
  styleUrls: ['./total-user.component.css']
})
export class TotalUserComponent implements OnInit {

  totalUser;
  constructor(private service: CommonChartService) { }

  ngOnInit(): void {
    let users: number = 0;
    let userData: any = [];
    this.service.getUserData().subscribe(data => {
      userData = data;
      userData.forEach(element => {
        if (element.admin === false) {
          users++;
        }
      });
      console.log(users);
      this.totalUser = users;
    });
  }

}
