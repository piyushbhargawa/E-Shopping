import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import * as CryptoJS from "crypto-js";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { passValidator, pasValidator } from 'src/app/core/sign-up/validator';
import { ToastService } from './toast-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  password;
  decPassword = "qwertyuiop";
  hide = true;
  hide1 = true;
  hide2 = true;
  changePassForm;
  userData;

  constructor(private service: ProfileService, private snack: MatSnackBar) {
    this.changePassForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required, pasValidator]),
      password: new FormControl('', [Validators.required, pasValidator]),
      confirmPassword: new FormControl('', [passValidator]),
    });
  }

  ngOnInit(): void {
    this.service.profile(localStorage.getItem('currentUserId')).subscribe(data => {
      this.userData = data
      this.password = data;
      this.password = this.password.password;
      this.password = CryptoJS.AES.decrypt(
        this.password.trim(),
        this.decPassword.trim()
      ).toString(CryptoJS.enc.Utf8);
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.changePassForm.controls[controlName].hasError(errorName);
  }

  updatePassword() {
    if (this.password === this.changePassForm.controls['oldPassword'].value) {
      let pas= this.changePassForm.controls['password'].value;
      this.userData.password = CryptoJS.AES.encrypt(
        pas.trim(),
        this.decPassword.trim()
      ).toString();
      console.log(this.userData);
      this.service.updateProfile(this.userData.id, this.userData).subscribe(data => {
        this.snack.open('Password has been successfully changed', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      });
    }
    else {
      this.snack.open('Password not match', '', {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    }
  }
}
