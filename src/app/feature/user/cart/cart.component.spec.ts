import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonChartService } from '../../admin/dashboard/common-chart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { CheckoutCartService } from '../_service/checkout-cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CartService, CheckoutCartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const item = {
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
  it('should remove all the elements from the array', () => {
    component.removeAllProducts([1,2,3,4]);
  });
  it('should load all the products', () => {
    component.load();
  });
  it('should redirect to that product page', () => {
    component.productPage('s20');
  });
  it('should remove that product from the cart', () => {
    component.remove(item);
  });
  it('should increase the quantity of that product', () => {
    component.addQty(1);
  });
  it('should decrease the quantity of that product', () => {
    component.removeQty(1);
  });
  it('should redirect to that checkout page', () => {
    component.checkout();
  });
});
