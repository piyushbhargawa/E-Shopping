import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { PaymentOptionService } from '../payment-option.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { AddressDetailsService } from '../address-details.service';
import { CheckoutCartService } from '../../_service/checkout-cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;

  constructor(private service: PaymentOptionService,
    private router: Router,
    private dataService: CommonService,
    private orderService: CommonService,
    private addressDetails: AddressDetailsService,
    private orderDetails: CheckoutCartService) { }

  ngOnInit(): void {
    this.initConfig();
  }

  public initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'pay',
        layout: 'vertical',
        color: 'silver',
        shape: 'pill'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.cod('paypal');
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  cod(value) {
    let productDetails;
    let addressDetails;
    let userData;
    this.service.sendMessage(value);
    this.orderDetails.getMessage().subscribe(data => {
      productDetails = data;
    });
    this.addressDetails.getMessage().subscribe(data => {
      addressDetails = data;
    });
    const data1 = {
      "address": addressDetails,
      "productsDetail": productDetails.cart,
      "paymentDetails": value,
      "totalAmount": productDetails.total
    }
    this.dataService.getUserDetails().subscribe(data => {
      userData = data;
      userData.order.push(data1);
      if(productDetails.cartBool === true) {
        userData.cart = [];
        localStorage.setItem('cartItem', '0');
      }
      console.log(userData);
      this.dataService.updateOrderDetails(userData).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/feature/user/checkoutPage/confirm');
      });
    });
  }
}
