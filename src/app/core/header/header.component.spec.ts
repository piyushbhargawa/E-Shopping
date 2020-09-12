import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule, MatMenuModule],
      providers: [MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the login page' , () => {
    component.login();
  });

  it('should redirect to the profile page' , () => {
    component.openDialog();
  });
  it('should redirect to the product page and show the searched product' , () => {
    component.search();
  });
  it('should redirect to the product page and show the product related to this categories' , () => {
    component.elect('Electronics');
  });
  it('should redirect to the home page and log out the current user and empty the localstorage' , () => {
    component.logout();
  });
  it('should redirect to the home page' , () => {
    component.home();
  });
  it('should redirect to the cart page' , () => {
    component.cart();
  }); 

});
