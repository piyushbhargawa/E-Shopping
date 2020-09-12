import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { CheckoutCartService } from '../_service/checkout-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts;
  discount = 0;
  delivery = 0;
  userData;
  cartProductsDetails: any = [];
  total: number = 0;
  value: number;
  trigger;
  cartData;
  countVal = 0;
  numbers;
  qty = [];
  constructor(private service: CartService, private router: Router, private sendService: CheckoutCartService) {
    this.value = parseInt(localStorage.getItem('cartItem'));
    if (this.value === 0) {
      this.trigger = false;
    }
    else {
      this.trigger = true;
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    this.load();
  }

  removeAllProducts(array) {
    array.forEach((element) => {
      array = array.filter((item) => item !== element);
    });
    return array;
  }

  load() {
    this.total = 0;
    this.service.loadCartProducts(localStorage.getItem('currentUserId')).subscribe(data => {
      this.cartProducts = data;
      this.userData = data;
      this.cartProducts = this.cartProducts.cart;
      if (this.cartProducts.length === 0) {
        this.cartProductsDetails = [];
        this.total = 0;
        this.trigger = false;
      }
      else {
        this.cartProductsDetails = this.removeAllProducts(this.cartProductsDetails);
        this.qty = this.removeAllProducts(this.qty);
        this.cartProducts.forEach(element => {
          this.qty.push(element.qty);
          this.service.productsDetail(element.productId).subscribe(data => {
            this.cartData = data;
            this.cartProductsDetails.push(data);
            this.total = this.total + parseInt(this.cartData.price) * element.qty;
          });
        });
        this.numbers = Array(this.cartProducts.length).fill(0).map((x, i) => i);
        console.log(this.numbers);
      }
    });
  }

  productPage(id) {
    localStorage.setItem('product', id);
    this.router.navigateByUrl('feature/user/particularProduct');
  }

  remove(item) {
    this.cartProducts = this.cartProducts.filter(obj => obj.productId !== item.id);
    this.userData.cart = this.cartProducts;
    this.service.removeCartProduct(this.userData.id, this.userData).subscribe(data => {
      localStorage.setItem('cartItem', this.cartProducts.length);
      this.load();
    });
  }

  addQty(item) {
    if (this.qty[item] < 5) {
      this.qty[item] = this.qty[item] + 1;
      this.cartProducts[item].qty = this.qty[item];
      const data = {
        cart: this.cartProducts
      };
      this.service.updateQty(data).subscribe(data => {
        this.load();
      });
    }
  }

  removeQty(item) {
    if (this.qty[item] > 1){
      this.qty[item] = this.qty[item] - 1;
      this.cartProducts[item].qty = this.qty[item];
      const data = {
        cart: this.cartProducts
      };
      this.service.updateQty(data).subscribe(data => {
        this.load();
      });
    }
    else {
      const data = {
        "id": this.cartProductsDetails[item].id,
        "qty": this.qty[item]
      };
      console.log(data);

      this.remove(data);
    }
    // this.load();
  }

  checkout() {
    const data = {
      cart: this.cartProducts,
      total: this.total,
      cartItemDetails: this.cartProductsDetails,
      cartBool: true
    };
    this.sendService.sendMessage(data);
    this.router.navigateByUrl('/feature/user/checkoutPage/shippingAddress');
  }

}
