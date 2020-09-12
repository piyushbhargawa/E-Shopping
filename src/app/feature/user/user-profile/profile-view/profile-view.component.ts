import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileService } from "../profile.service";
import { Profile } from "./profile";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
})
export class ProfileViewComponent implements OnInit {
  data: Profile;
  id = "user";
  name = "user";
  constructor(private http: HttpClient, private service: ProfileService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const URL = "http://localhost:3000/login?id=Ironman";
    // this.http.get(URL).subscribe(data => {
    //   console.log(data);
    //   this.data = data[0];
    // });
    this.service
      .profile(localStorage.getItem("currentUserId"))
      .subscribe((data) => {
        this.data = <any>data;
        this.id = this.data.id;
        this.name = this.data.first_name + " " + this.data.last_name;
      });
  }

  update() {
    console.log(this.data);
    this.service.updateProfile(this.id, this.data).subscribe((data) => {
      console.log(data);
    });
  }
}
