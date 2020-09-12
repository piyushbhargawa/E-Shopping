import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutCartService } from '../_service/checkout-cart.service';
import { AddressDetailsService } from './address-details.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  total = 0;
  discount = 0;
  delivery = 0;
  value = 0;
  cart;
  buttonToggle: boolean = true;
  address;
  addressbool:boolean = false;

  constructor(private router: Router, private getDataService: CheckoutCartService, private addressService: AddressDetailsService) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    this.value = 50;
    this.getDataService.getMessage().subscribe(data => {
      console.log(data);
      this.total = data.total;
      this.cart = data.cartItemDetails;
    });
  }

  continue() {
    this.value = 100;
    this.addressService.getMessage().subscribe(data => {
      console.log(data);
      this.address = data;
      this.addressbool = true;
    });
    this.buttonToggle = false;
    this.router.navigateByUrl('/feature/user/checkoutPage/payment');
  }

}
