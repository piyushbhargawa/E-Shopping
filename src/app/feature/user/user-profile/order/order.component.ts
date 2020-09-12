import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProfileService } from '../profile.service';
import 'jspdf';
import 'jspdf-autotable';
declare let jsPDF;

export interface UserData {
  id: string;
  products: string;
  total: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  trigger: boolean = true;
  userData;
  displayedColumns: string[] = ['id', 'products', 'total', 'invoice'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: ProfileService) {
    var orders: any = [];
    this.service.profile(localStorage.getItem('currentUserId')).subscribe(data => {
      this.userData = data;
      this.userData = this.userData.order;
      if (this.userData.length !== 0) {
        this.trigger = true;
        for (let index = 0; index < this.userData.length; index++) {
          const element = this.userData[index];
          let temp = "";
          for (let i = 0; i < this.userData[index].productsDetail.length; i++) {
            const element1 = this.userData[index].productsDetail[i];
            if (i === 0)
              temp = element1.productId;
            else
              temp = temp + ", " + element1.productId;
          }
          orders.push({ id: index + 1, products: temp, total: this.userData[index].totalAmount });
        }
      }
      else {
        this.trigger = false;
      }
      this.dataSource = new MatTableDataSource(orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  invoice(row) {
    console.log(row);
    let ProductData: any = [];
    let productId: any = [];
    this.userData[row.id - 1].productsDetail.forEach(element1 => {
      productId.push(element1.productId);
    });
    console.log(productId);
    this.service.product().subscribe(data => {
      let temp;
      temp = data;
      temp.forEach(element => {
        productId.forEach(element1 => {
          if (element1 === element.id) {
            ProductData.push(element);
          }
        });
      });
      this.exportAsPDF(ProductData, this.userData[row.id - 1], row.id);
    });
  }

  exportAsPDF(productData, orderData, orderId) {
    var doc = new jsPDF();
    doc.setFontSize(10);
    var head = [['#', 'Brand', 'Product Name', 'Quantity', 'Order ID', 'Price']];
    var body = [];
    for (let i = 0; i < productData.length; i++) {
      var temp = [0, 0, 0, 0, 0];
      const element = productData[i];
      temp[0] = i + 1;
      temp[1] = element.brand;
      temp[2] = element.id;
      temp[3] = orderData.productsDetail[i].qty;
      temp[4] = orderId;
      temp[5] = element.price;
      body.push(temp);
    }
    var img = new Image()
    img.src = 'assets/Screenshot.png';
    doc.addImage(img, 'png', 5, 5, 50, 10);
    doc.setFontSize(13);
    doc.setFontType("bold");
    doc.text(100, 20, "Invoice");
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.text(10 + 5, 10 + 25, "Customer's Name:");
    doc.setFontType("normal");
    doc.text(50 + 5, 10 + 25, orderData.address.name);
    doc.setFontType("bold");
    doc.text(10 + 5, 15 + 25, "Customer's Mobile No.:");
    doc.setFontType("normal");
    doc.text(50 + 5, 15 + 25, orderData.address.mobile);
    doc.setFontType("bold");
    doc.text(10 + 5, 20 + 25, "Delivery's Address:");
    doc.setFontType("normal");
    doc.text(50 + 5, 20 + 25, orderData.address.Address);
    doc.setFontType("normal");
    doc.text(50 + 5, 25 + 25, orderData.address.town + ',' + orderData.address.state);
    doc.setFontType("bold");
    doc.text(10 + 5, 30 + 25, "Pincode:");
    doc.setFontType("normal");
    doc.text(50 + 5, 30 + 25, orderData.address.pincode);
    doc.setFontType("bold");
    doc.text(10 + 5, 35 + 25, "Payment Mode:");
    doc.setFontType("normal");
    doc.text(50 + 5, 35 + 25, orderData.paymentDetails);
    doc.setFontType("bold");
    doc.text(10 + 5, 40 + 25, "GSTN:");
    doc.setFontType("normal");
    doc.text(50 + 5, 40 + 25, "GST100000000000");
    doc.setLineWidth(1);
    doc.rect(2, 2, 206.2, 293);
    doc.autoTable({
      head: head,
      body: body,
      foot: [['', '', '', '', 'Sub-total:', orderData.totalAmount],
      ['', '', '', '', 'Delivery Charges:', 0],
      ['', '', '', '', 'Total:', orderData.totalAmount]
      ],
      margin: { top: 45 + 35 }
    })
    doc.save('invoice.pdf')
  }
}
