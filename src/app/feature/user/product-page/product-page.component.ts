import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductsService } from "./products.service";
import { FilterService } from "src/app/shared/_service/filter.service";
import { PageEvent } from "@angular/material/paginator";
import { Product } from "./products";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductDetailsService } from '../_service/product-details.service';
import { CheckoutCartService } from '../_service/checkout-cart.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  products: Array<Product> = [];
  filterBrands = [];
  priceFilter = [];
  min;
  max;
  noProd: boolean = true;
  datBool: boolean = true;
  brands = [];
  showSidebar: boolean;
  pageEvent: PageEvent;
  length = 0;
  index = 0;
  value = 950000;
  noProduct = 'assets/ss.jpg';

  constructor(
    private service: ProductsService,
    private router: Router,
    private categoryService: FilterService,
    private particularProductService: ProductDetailsService,
    private checkoutService: CheckoutCartService,
    private activeRoute: ActivatedRoute,
    private snack: MatSnackBar
  ) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };

    // this.router.events.subscribe((evt) => {
    //   if (evt instanceof NavigationEnd) {
    //     this.router.navigated = false;
    //     window.scrollTo(0, 0);
    //   }
    // });

  }

  ngOnInit(): void {
    this.loadProducts();
  }


  removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  toggleNav() {
    this.showSidebar = !this.showSidebar;
  }

  removeAllProducts() {
    this.products.forEach((element) => {
      this.products = this.products.filter((item) => item !== element);
    });
  }

  loadProducts() {
    let category;
    if (!this.categoryService.getMessage()) {
      category = localStorage.getItem('category');
    }
    else
      category = this.categoryService.getMessage();
    this.service.Products(category).subscribe(data => {
      var keys = Object.keys(data);
      this.length = keys.length;
      if (this.length === 0) {
        this.noProd = false;
      }
      var len = this.index + 8;
      if (this.length < this.index + 8) {
        len = this.length;
      }
      var value = Object.values(data);
      value.forEach(element => {
        this.filterBrands.push(element.brand);
        this.priceFilter.push(element.price);
      });
      this.filterBrands = this.removeDuplicates(this.filterBrands);
      this.min = Math.min(...this.priceFilter);
      this.max = Math.max(...this.priceFilter);
      console.log(this.min, this.max);
      this.removeAllProducts();
      console.log(this.products);
      for (let i = this.index; i < len; i++) {
        if (this.brands.length !== 0) {
          this.brands.forEach(element => {
            if (element === data[i].brand) {
              if (data[i].price >= this.min && data[i].price <= this.value) {
                this.products.push(data[i]);
              }
            }
          });
        }
        else {
          if (data[i].price >= this.min && data[i].price <= this.value) {
            this.products.push(data[i]);
          }
        }
      }
      setTimeout(() => {
        this.datBool = false;
      }, 1500);
    });
  }

  pagination(event) {
    this.index = event.pageIndex * 8;
    this.loadProducts();
  }

  brandsFilter(event) {
    if (event.checked)
      this.brands.push(event.source.value);
    else
      this.brands = this.brands.filter((item) => item !== event.source.value);
    this.loadProducts();
  }

  openParticularPage(data) {
    this.particularProductService.sendMessage(data);
    console.log(data.id);
    localStorage.setItem('product', data.id);
    this.router.navigateByUrl('/feature/user/particularProduct');
  }

  slider(event) {
    this.loadProducts();
  }

  buyNow(product) {
    const cartProducts = {
      "productId": product.id,
      "qty": 1
    };
    const data = {
      cart: [cartProducts],
      total: product.price,
      cartItemDetails: [product],
      cartBool: false
    };
    this.checkoutService.sendMessage(data);
    this.router.navigateByUrl('/feature/user/checkoutPage/shippingAddress');
  }

  cart(product) {
    let userData: any = [];
    var index = -1;
    this.service.getUserData().subscribe(data => {
      userData = data;
      const cartData = {
        "productId": product.id,
        "qty": 1
      };
      userData.cart.forEach(element => {
        if (element.productId === cartData.productId) {
          index = element;
        }
      });
      if (index === -1) {
        userData.cart.push(cartData);
      }
      this.service.addingProduct(userData).subscribe(data => {
        console.log(data);
        localStorage.setItem('cartItem', userData.cart.length);
        this.snack.open('Product Added to cart', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      });
    });
  }
}
