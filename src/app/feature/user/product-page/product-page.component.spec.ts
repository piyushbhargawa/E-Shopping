import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductDetailsService } from '../_service/product-details.service';
import { ProductsService } from './products.service';
import { FilterService } from 'src/app/shared/_service/filter.service';
import { CheckoutCartService } from '../_service/checkout-cart.service';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule],
      providers: [ProductDetailsService, ProductsService, FilterService, CheckoutCartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const data = {
    "id": "Iphone 11 pro",
    "brand": "Apple",
    "price": "120000",
    "image": [
      "assets/iphone11.jpg"
    ],
    "category": "Electronics",
    "subcategory": "Mobile",
    "description": [
      "RAM: 8GB",
      "Internal Storage: 128GB",
      "Camera: Quad rear camera - 64MP OIS F2.0 tele camera + 12MP F2.2 ultra wide + 12MP (2PD) OIS F1.8 wide + VGA depth camera | 10MP (2PD) OIS F2.2 front punch hole camera | rear LED flash"
    ]
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should remove all the duplicate element from the array', () => {
    expect(component.removeDuplicates([1, 2, 3, 1, 2, 1, 2])).toEqual([1, 2, 3]);
  });
  it('should format the number', () => {
    expect(component.formatLabel(21000)).toEqual('21k');
  });
  it('should toggle the nav', () => {
    component.toggleNav();
  });
  it('should remove all the products', () => {
    component.removeAllProducts();
  });
  it('should load all the products', () => {
    component.loadProducts();
  });
  it('should redirect to the particular product page', () => {
    component.openParticularPage(data);
  });
  it('should redirect to the checkout page', () => {
    component.buyNow(data);
  });
  it('should add the product into the cart', () => {
    component.cart(data);
  });
  it('should load the product according to the filter', () => {
    component.slider('asdas');
  });


});
