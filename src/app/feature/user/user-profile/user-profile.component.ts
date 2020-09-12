import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { AuthenticationService } from 'src/app/shared/_service/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  data;
  id: string = 'user';
  plainText: string;
  encryptText: string;
  encPassword: string;
  decPassword: string;
  conversionEncryptOutput: string;
  conversionDecryptOutput: string;
  imgSrc;

  constructor(private http: HttpClient, private service: ProfileService, public auth: AuthenticationService) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    this.service.profile(localStorage.getItem('currentUserId')).subscribe(data => {
      console.log(data);
      this.data = data;
      this.id = this.data.id;
      console.log(this.data);
      this.imgSrc = this.data.photo;
    });
  }

  fileInput(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgSrc = <any>event.target.result;
        console.log(event.target.result);
        this.data.photo = this.imgSrc;
        console.log(this.data.photo);
        this.service.updateProfile(this.id, this.data).subscribe(data => {
          console.log(data);
        });
      }
    }
  }

}
