import { Component, OnInit } from '@angular/core';
import { CommonChartService } from '../common-chart.service';

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css']
})
export class TotalOrdersComponent implements OnInit {

  totalOrders: number = 0;
  users: any = [];

  constructor(private service: CommonChartService) {}

  ngOnInit() {
    this.service.getUserData().subscribe(data => {
      this.users = data;
      this.users.forEach(element => {
        if(element.admin === false) {
          if(element.order.length !== 0) {
            this.totalOrders = this.totalOrders + element.order.length;
          }
        }
      });
    });
  }

}
