import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../_service/product-details.service';

import { Router } from '@angular/router';
import { DetailsService } from './details.service';
import { CheckoutCartService } from '../_service/checkout-cart.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-particular-product',
  templateUrl: './particular-product.component.html',
  styleUrls: ['./particular-product.component.scss']
})
export class ParticularProductComponent implements OnInit {
  data;
  userData;
  imgSrc;
  countVal = 1;
  cartBool: boolean = true;
  safeSrc: SafeResourceUrl;

  constructor(private service: ProductDetailsService,
    private detailsService: DetailsService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private checkoutService: CheckoutCartService,
    private snack: MatSnackBar) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

  ngOnInit() {
    this.data = this.service.getMessage();
    this.detailsService.productDetails(localStorage.getItem('product')).subscribe(data => {
      this.data = data;
      this.imgSrc = this.data.image[0];
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
    });
  }

  cart() {
    this.router.navigateByUrl('/feature/user/cart');
  }

  addingToCart() {
    this.cartBool = !this.cartBool;
    let index = -1;
    this.detailsService.getUserDetails(localStorage.getItem('currentUserId')).subscribe(data => {
      this.userData = data;
      const cartData = {
        "productId": localStorage.getItem('product'),
        "qty" : this.countVal
      };
      this.userData.cart.forEach(element => {
        if(element.productId === cartData.productId) {
          index = element;
        }
      });
      if (index === -1) {
        this.userData.cart.push(cartData);
      }
      // if (this.userData.cart.indexOf(localStorage.getItem('product')) === -1) {
      //   // this.userData.cart.push(localStorage.getItem('product'));
      //   // this.userData.qty.push(this.countVal);
      //   this.userData.cart.push(cartData);
      // }
      this.detailsService.addingProduct(this.userData, this.userData.id).subscribe(data => {
        console.log(data);
        localStorage.setItem('cartItem',this.userData.cart.length);
        this.snack.open('Product Added to cart', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      });
    });
  }

  buyNow() {
    const cartProducts = {
      "productId": localStorage.getItem('product'),
      "qty" : this.countVal
    };
    const data = {
      cart: [cartProducts],
      total: this.data.price,
      cartItemDetails: [this.data],
      cartBool: false
    };
    this.checkoutService.sendMessage(data);
    this.router.navigateByUrl('/feature/user/checkoutPage/shippingAddress');
  }

  changeImage(i) {
    this.imgSrc = i;
  }

}
