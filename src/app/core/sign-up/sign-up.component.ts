import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { passValidator, mobileValidator, pasValidator } from './validator';
import * as CryptoJS from 'crypto-js';
import { SignUpService } from '../sign-up.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  hide = true;
  hide1 = true;
  minDate: Date;
  maxDate: Date;
  selectedFile = null;
  selection;
  imgSrc:string = 'assets/avatar.png';
  public signUpForm: FormGroup;
  encPassword = 'qwertyuiop';

  constructor(private service : SignUpService, private snack: MatSnackBar, private router: Router) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear +0, 1, 0);
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      firstName:  new FormControl('', [Validators.required]),
      lastName:  new FormControl('', []),
      email:  new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), mobileValidator]),
      password:  new FormControl('', [Validators.required, pasValidator]),
      confirmPassword:  new FormControl('', [passValidator]),
      languages:  new FormControl('', [Validators.required]),
      radio:  new FormControl('', []),
      date: new FormControl('', [])
    });
  }

  checkRadio(event) {
    console.log(this.imgSrc);
    if(event.value === 'female' && this.imgSrc === 'assets/avatar.png') {
      this.imgSrc = 'assets/avatar1.png';
    }
    else if(event.value === 'male' && this.imgSrc === 'assets/avatar1.png') {
      this.imgSrc = 'assets/avatar.png';
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.signUpForm.controls[controlName].hasError(errorName);
  }
  languages = new FormControl('', [Validators.required]);
  languageList: string[] = ['English', 'Hindi', 'Kannada', 'French', 'Tamil', 'Telugu', 'German'];

  createUser() {
    var form = this.signUpForm;
    const data = {
      id : form.controls['userName'].value,
      first_name : form.controls['firstName'].value,
      last_name : form.controls['lastName'].value,
      password : CryptoJS.AES.encrypt(form.controls['password'].value.trim(), this.encPassword.trim()).toString(),
      email : form.controls['email'].value,
      mobile : form.controls['mobile'].value,
      languages : form.controls['languages'].value,
      gender : form.controls['radio'].value,
      photo : this.imgSrc,
      dateOfBirth :  form.controls['date'].value,
      cart: [],
      address: [],
      order: [],
      admin : false
    };
    this.service.onSignUp(data).subscribe(data => {
      console.log(data);
      this.snack.open('Sign Up successfully','', {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.router.navigateByUrl('/login');
    });
  }

  onFileSelected(event) {
      console.log(event);
      // this.selectedFile = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.imgSrc = <any>event.target.result;
        }
      }
  }
}
