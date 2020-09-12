import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from '../profile.service';
import { pasValidator } from 'src/app/core/sign-up/validator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule],
      providers: [ProfileService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return validation error', () => {
    expect(component.hasError('password','required')).toEqual(true);
  });
  it('should update the password', () => {
    component.updatePassword();
  });
});
