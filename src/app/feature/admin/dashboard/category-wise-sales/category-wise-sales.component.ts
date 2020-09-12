import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { CommonChartService } from '../common-chart.service';

@Component({
  selector: 'app-category-wise-sales',
  templateUrl: './category-wise-sales.component.html',
  styleUrls: ['./category-wise-sales.component.css']
})
export class CategoryWiseSalesComponent implements OnInit {

  public polarAreaChartLabels: Label[] = ["Electronics", "Apparels", "Furnitures", "Watches"];
  public polarAreaChartData: SingleDataSet = [0, 0, 0, 0];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private service: CommonChartService) { }
  ngOnInit(): void {
    let category = ["Electronics", "Apparels", "Furnitures", "Watches"];
    let categoryCount: Array<number> = [0, 0, 0, 0];
    let userData: any = [];
    let orders: any = [];
    let temp;
    this.service.getUserData().subscribe(data => {
      userData = data;
      userData.forEach(element => {
        if (element.admin === false) {
          orders = element.order;
          if (element.length !== 0) {
            orders.forEach(element => {
              element.productsDetail.forEach(element1 => {
                this.service.getProduct(element1.productId).subscribe(data => {
                  temp = data;
                  for (let index = 0; index < category.length; index++) {
                    const element2 = category[index];
                    if (temp.category === element2) {
                      categoryCount[index] = categoryCount[index] + element1.qty;
                    }
                  }
                });
              });
            });
          }
        }
      });
    });
    setTimeout(() => {
      this.polarAreaChartData = categoryCount;
    }, 1000);
  }

}
