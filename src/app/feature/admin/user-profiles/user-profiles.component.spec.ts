import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesComponent } from './user-profiles.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('UserProfilesComponent', () => {
  let component: UserProfilesComponent;
  let fixture: ComponentFixture<UserProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilesComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should remove all the products from the array', () => {
    component.removeAllProducts();
  });
  it('should load all the users', () => {
    component.loadAllUsers();
  });
});
