import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/shared/_service/filter.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  loader = true;
  centered = true;
  image: any = [];
  constructor(private router: Router, private service: FilterService, private imageService: DashboardService) { }

  ngOnInit(): void {
    let temp;
    this.imageService.getImageData().subscribe(data => {
      temp = data;
      this.image = temp[0].image1;
      setTimeout(() => {
        this.loader = false;
      }, 3100);
    });
  }

  elect(event) {
    this.service.sendMessage(event.target.textContent);
    localStorage.setItem('category',event.target.textContent);
    this.router.navigateByUrl('/productPage');
  }

  openParticularPage(id) {
    localStorage.setItem('product', id);
    this.router.navigateByUrl('/feature/user/particularProduct');
  }

  openPage(name) {
    this.service.sendMessage(name);
    localStorage.setItem('category',name);
    this.router.navigateByUrl('/productPage');
  }
}
