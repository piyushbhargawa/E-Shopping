import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CommonChartService } from '../common-chart.service';

@Component({
  selector: 'app-total-products-category-wise',
  templateUrl: './total-products-category-wise.component.html',
  styleUrls: ['./total-products-category-wise.component.css']
})
export class TotalProductsCategoryWiseComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public barChartLabels: Label[] = ['0', '0', '0', '0'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Series A' }
  ];

  constructor(private service: CommonChartService) { }

  ngOnInit(): void {
    let products: any = [];
    let category = ["Electronics", "Apparels", "Furnitures", "Watches"];
    this.barChartLabels = category;
    let productCount: Array<number> = [0, 0, 0, 0];
    this.service.getAllProducts().subscribe(data => {
      products = data;
      products.forEach(element => {
        for (let i = 0; i < category.length; i++) {
          if (category[i] === element.category) {
            productCount[i]++;
          }
        }
      });
      const dataa = {
        data: productCount,
        label: 'Products'
      };
      this.barChartData = [dataa];
    });
  }

}
