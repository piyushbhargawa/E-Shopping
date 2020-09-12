import { Component, OnInit } from '@angular/core';
import 'jspdf';
import 'jspdf-autotable';
declare let jsPDF;

import { CommonService } from '../common.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  orderData;
  productData:any = [];
  orderId;
  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getUserDetails().subscribe(data => {
      this.orderData = data;
      this.orderId = this.orderData.order.length;
      this.orderData = this.orderData.order[this.orderData.order.length - 1];
      console.log(this.orderData);
      this.orderData.productsDetail.forEach(element => {
        this.service.getProductDetails(element.productId).subscribe(data => {
          console.log(data);
          this.productData.push(data);
        });
      });
    });
  }

  exportAsPDF()
  {
    var doc = new jsPDF();
    doc.setFontSize(10);
    var head = [['#', 'Brand', 'Product Name', 'Quantity', 'Order ID','Price']];
    var body = [];
    for (let i = 0; i < this.productData.length; i++) {
      var temp = [0, 0, 0, 0, 0];
      const element = this.productData[i];
      temp[0] = i+1;
      temp[1] = element.brand;
      temp[2] = element.id;
      temp[3] = this.orderData.productsDetail[i].qty;
      temp[4] = this.orderId;
      temp[5] = element.price;
      body.push(temp);
    }
    body.push(['', '', '', '', 'Total:', this.orderData.totalAmount])
    console.log(body);
    var img = new Image()
    img.src = 'assets/Screenshot.png';
    doc.addImage(img, 'png', 5, 5, 50, 10);
    doc.text(100, 20, "Invoice");
    doc.text(10+5, 10+25, "Customer's Name:");
    doc.text(50+5, 10+25, this.orderData.address.name)
    doc.text(10+5, 15+25, "Customer's Mobile No.:");
    doc.text(50+5, 15+25, this.orderData.address.mobile);
    doc.text(10+5, 20+25, "Delivery's Address:");
    doc.text(50+5, 20+25, this.orderData.address.Address);
    doc.text(50+5, 25+25, this.orderData.address.town+','+this.orderData.address.state);
    doc.text(10+5, 30+25, "Pincode:");
    doc.text(50+5, 30+25, this.orderData.address.pincode)
    doc.text(10+5, 35+25, "Payment Mode:");
    doc.text(50+5, 35+25, this.orderData.paymentDetails);
    doc.autoTable({
      head: head,
      body: body,
      margin: { top: 45+35 }
    })
    doc.save('invoice.pdf')
  }
}
