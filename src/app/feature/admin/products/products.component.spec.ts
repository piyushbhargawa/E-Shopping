import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminService } from '../service/admin.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule, MatDialogModule, MatSnackBarModule],
      providers: [AdminService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
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
  it('should load all the products', () => {
    component.loadProduct();
  });
  it('should toggle the navbar', () => {
    component.toggleNav();
  });
  it('should add the product', () => {
    component.add();
  });
  it('should delete the products', () => {
    component.delete(data);
  });
  it('should update the products', () => {
    component.update(data);
  });

});
