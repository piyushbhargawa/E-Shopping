import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { ProfileService } from '../profile.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import 'jspdf';
import 'jspdf-autotable';
declare let jsPDF;

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ProfileService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
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

  const orderData = {
      "address": {
        "name": "Black",
        "mobile": "55555555",
        "pincode": "1111",
        "Address": "Wakanda",
        "town": "wakanda",
        "state": "wakanda"
      },
      "productsDetail": [
        {
          "productId": "Cosmograph Daytona",
          "qty": 1
        }
      ],
      "paymentDetails": "Cash On Delivery",
      "totalAmount": "750000"
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a pdf', () => {
    component.exportAsPDF(data, orderData,1);
  });
  it('should make invoice', () => {
    component.invoice({id: '5', products: "S20", total: '70500'});
  });
});
