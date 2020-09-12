import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from '../common.service';
import { AddressDetailsService } from '../address-details.service';
import { CheckoutCartService } from '../../_service/checkout-cart.service';
import { PaymentOptionService } from '../payment-option.service';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ CommonService, AddressDetailsService, CheckoutCartService, PaymentOptionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to paypal payment gateway', () => {
    component.initConfig();
  });
  it('should redirect to confirmation page', () => {
    component.cod('Cash On Delivery');
  });
});
