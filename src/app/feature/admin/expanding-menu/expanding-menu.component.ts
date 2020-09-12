import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expanding-menu',
  templateUrl: './expanding-menu.component.html',
  styleUrls: ['./expanding-menu.component.css']
})
export class ExpandingMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('/admin');
  }

  products() {
    localStorage.setItem('category', 'false');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate(['admin/products']));
  }

  users() {
    this.router.navigateByUrl('/admin/users');
  }
}
