import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import * as CryptoJS from "crypto-js";
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/shared/_service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  checked = false;
  hide = true;
  showMsg: boolean = false;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  public loginForm: FormGroup;
  decPassword = "qwertyuiop";

  constructor(private _auth: AuthenticationService, private router: Router, private service: LoginService, private snack: MatSnackBar) {
    // if (this._auth.loggedIn) {
    //   this.router.navigate(['home']);
    // }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.maxLength(20)
      ]),
      password: new FormControl("", [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  login() {
    // this.router.navigateByUrl('/admin');
    this.service
      .onLogin(this.loginForm.controls["userName"].value)
      .subscribe(data => {
        var data1:[] = <any>data;
          if(data1.length == 0) {
            this.snack.open('User Name Not Found','', {
              duration: 2000,
              verticalPosition: 'bottom',
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            this.loginForm.controls['userName'].setValue('');
          }
          else{
          var pass = CryptoJS.AES.decrypt(
            data[0].password.trim(),
            this.decPassword.trim()
          ).toString(CryptoJS.enc.Utf8);
          if (this.loginForm.controls["password"].value == pass) {
            console.log("user is valid");
            this.snack.open('login successfully!!','', {
              duration: 2000,
              verticalPosition: 'bottom',
              // panelClass: ['mat-toolbar', 'mat-warm']
              panelClass: ['green-snackbar']
            });
            if(data[0].admin === true ) {
              this.loading = true;
              console.log("admin");
              localStorage.setItem('admin', data[0].admin);
              // this.router.navigate(['/admin']);
              // this._auth.login(this.loginForm.controls['userName'].value, pass).subscribe(data => {
              //   console.log('hi');
              //   this.router.navigate(['/admin']);
              // });
              if(this._auth.login(this.loginForm.controls['userName'].value, pass)){
                console.log('hi');
                this.router.navigate(['/admin']);}
                // this.router.navigateByUrl('/admin');
            }
            else{
              if(this._auth.login(this.loginForm.controls['userName'].value, pass))
             {   console.log('hi');
                this.router.navigate(['/home']);}
              // this.router.navigateByUrl('');
              // if (this._auth.login(this.loginForm.controls['userName'].value, this.loginForm.controls['password'].value)) {
                // this.router.navigateByUrl('/home');
              // }
            }
          }
          else {
            this.snack.open('User Not Found','', {
              duration: 2000,
              verticalPosition: 'bottom',
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            this.loginForm.controls['userName'].setValue('');
            this.loginForm.controls['password'].setValue('');
          }
         }
      });
  }

  signUp() {
    this.router.navigateByUrl("/signUp");
  }
}
