import { Component, OnInit } from '@angular/core';
import { UsersProfileService } from './users-profile.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {
  userData: any = [];
  constructor(private service: UsersProfileService) {
    this.loadAllUsers();
  }

  ngOnInit(): void {
  }

  removeAllProducts() {
    this.userData.forEach((element) => {
      this.userData = this.userData.filter((item) => item !== element);
    });
  }


  loadAllUsers() {
    let data1;
    this.service.allUsers().subscribe(data => {
      data1 = data;
      data1.forEach(element => {
        if (element.admin === false) {
          this.userData.push(element);
          var timeDiff = Math.abs(Date.now() - element.dateOfBirth);
          var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
          console.log(age);
        }
      });
    });
  }
}
