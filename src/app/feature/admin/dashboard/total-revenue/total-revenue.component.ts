import { Component, OnInit } from '@angular/core';
import { CommonChartService } from '../common-chart.service';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.css']
})
export class TotalRevenueComponent implements OnInit {

  totalRevenue;

  constructor(private service: CommonChartService) { }

  ngOnInit(): void {
    this.totalRevenue = 0;
    let userData: any = [];
    let orders: any = [];
    this.service.getUserData().subscribe(data => {
      userData = data;
      userData.forEach(element => {
        if (element.admin === false) {
          orders = element.order;
          if (orders.length !== 0) {
            orders.forEach(element1 => {
              this.totalRevenue = this.totalRevenue + parseInt(element1.totalAmount);
            });
          }
        }
      });
    });
  }

}
