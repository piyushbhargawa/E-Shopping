import { Component, OnInit } from '@angular/core';
import { CommonChartService } from '../common-chart.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  brand: string;
  price: string;
  qty;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {

  a: any = [];
  b: any = [];
  data: PeriodicElement;
  displayedColumns: string[] = ['position', 'brand', 'name', 'price', 'qty'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource();

  constructor(private service: CommonChartService) { }

  ngOnInit(): void {
    let userData: any = [];
    let orders: any = [];
    let prodDetail: any = [];
    let products: any = [];
    this.service.getUserData().subscribe(data => {
      userData = data;
      userData.forEach(element => {
        if (element.admin === false) {
          orders = element.order;
          if (orders.length !== 0) {
            orders.forEach(element => {
              prodDetail = element.productsDetail;
              prodDetail.forEach(element1 => {
                for (let index = 0; index < element1.qty; index++) {
                  products.push(element1.productId);
                }
              });
            });
          }
        }
      });
      this.foo(products);
      var list = [];
      var datas = [];
      let temp;
      for (var j = 0; j < this.b.length; j++)
        list.push({ 'Product': this.a[j], 'qty': this.b[j] });
      list.sort(function (a, b) {
        return ((a.qty > b.qty) ? -1 : ((a.qty == b.qty) ? 0 : 1));
      });
      for (var k = 0; k < list.length; k++) {
        this.a[k] = list[k].Product;
        this.b[k] = list[k].qty;
      }
      for (let index = 0; index < 5; index++) {
        const element = this.a[index];
        this.service.getProduct(element).subscribe(res => {
          temp = res;
          // console.log(temp);
          datas.push({position: index+1, brand: temp.brand, name: temp.id, price: temp.price, qty: this.b[index]});
          // this.dataSource.data = temp;
          // console.log(this.dataSource);
        });
      }
      // this.dataSource = datas;
      setTimeout(() => {
        //this.dataSource = datas;
        this.dataSource.data = datas;
        //console.log(this.dataSource);
        console.log(datas);
      }, 1000);
    });
  }

  foo(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
    this.a = a;
    this.b = b;
  }
}
