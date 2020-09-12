import { Component, OnInit } from '@angular/core';
import { FilterService } from '../_service/filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  brands: any = [];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  shouldRun = true;

  onclick(event) {
    console.log(event.checked);
    if (event.checked) {
      this.brands.push(event.source.value);
    }
    else {
      this.brands = this.brands.filter(item => item !== event.source.value);
    }
    console.log(this.brands);
    this.filterService.sendMessage(this.brands);
  }
}
