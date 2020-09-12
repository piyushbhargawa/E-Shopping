import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularProductComponent } from './particular-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductDetailsService } from '../_service/product-details.service';
import { DetailsService } from './details.service';
import { CheckoutCartService } from '../_service/checkout-cart.service';

describe('ParticularProductComponent', () => {
  let component: ParticularProductComponent;
  let fixture: ComponentFixture<ParticularProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularProductComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule],
      providers: [ ProductDetailsService, DetailsService, CheckoutCartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to the cart page', () => {
    component.cart();
  });
  it('should add product to the cart', () => {
    component.addingToCart();
  });
  it('should redirect to the checkout page', () => {
    component.buyNow();
  });
  it('should change the image', () => {
    component.changeImage('assets/avatar.png');
  });
});
