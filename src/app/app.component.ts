import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingCart';
  searchText;
  checked = false;
  hide = true;
  constructor(private router: Router) {
    // setTimeout(function(){ this.loader=false; }, 1000);
  }
  ngOnInit(): void {
  }
}
