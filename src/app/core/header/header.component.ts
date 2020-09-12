import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/_service/authentication.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../login.service';
import { FilterService } from 'src/app/shared/_service/filter.service';

export interface DialogData {
  username: string;
  name: string;
  email: string;
  mobile: string;
  gender: string;
  photo;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currentUser;
  searchText;
  imgSrc;
  dialogBox: boolean;
  constructor(private router: Router,
    public authenticationService: AuthenticationService,
    public dialog: MatDialog, public service: LoginService,
    private searchService: FilterService) {
    this.authenticationService.currentUser.subscribe(data => {
      console.log(data);
      this.currentUser = data;
    });
    this.dialogBox = false;
  }

  ngOnInit() {
    this.service.onLogin(localStorage.getItem('currentUserId')).subscribe(data => {
      console.log(data);
      this.currentUser = data;
    });
  }

  openDialog(): void {
    this.router.navigateByUrl('/feature/user/userProfile/profile');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  search() {
    this.searchService.sendMessage(this.searchText);
    localStorage.setItem('category', this.searchText);
    this.searchText = '';
    if (this.authenticationService.isAdmin() !== 'true')
      // this.router.navigateByUrl('/productPage');
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['productPage']));
    else
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate(['admin/products']));
      // this.router.navigateByUrl('/admin/products');
  }

  elect(event) {
    this.searchService.sendMessage(event);
    localStorage.setItem('category', event);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['productPage']));
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
    this.currentUser = this.authenticationService.currentUser;
    console.log(this.currentUser);
  }

  home() {
    if (this.authenticationService.isAdmin() !== 'true')
      this.router.navigateByUrl('/');
    else
      this.router.navigateByUrl('/admin');
  }

  cart() {
    if (this.authenticationService.loggedIn())
      this.router.navigateByUrl('/feature/user/cart');
    else
      this.router.navigateByUrl('/login')
  }
}


@Component({
  selector: 'profileDialog',
  templateUrl: 'profileDialog.html'
})
export class profileDialog {

  constructor(
    public dialogRef: MatDialogRef<profileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
