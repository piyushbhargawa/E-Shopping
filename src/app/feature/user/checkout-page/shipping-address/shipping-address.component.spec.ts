import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAddressComponent } from './shipping-address.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonService } from '../common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressDetailsService } from '../address-details.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('ShippingAddressComponent', () => {
  let component: ShippingAddressComponent;
  let fixture: ComponentFixture<ShippingAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAddressComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      providers: [ CommonService, AddressDetailsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load address', () => {
    component.load();
  });
  it('should add address', () => {
    component.add();
  });
  it('should update address', () => {
    const data = {
      name: 'piyush',
      mobile: '123457890',
      pincode: '123456',
      address: 'qwertyui',
      town: 'qwertui',
      state: 'qwertyu',
      update: true
    }
    component.update(data);
  });
  it('should delete address', () => {
    const data = {
      name: 'piyush',
      mobile: '123457890',
      pincode: '123456',
      address: 'qwertyui',
      town: 'qwertui',
      state: 'qwertyu'
    }
    component.deleteAddress(data);
  });
  it('should choose the selected address', () => {
    const data = {
      name: 'piyush',
      mobile: '123457890',
      pincode: '123456',
      address: 'qwertyui',
      town: 'qwertui',
      state: 'qwertyu'
    }
    component.Address(data);
  });
});
