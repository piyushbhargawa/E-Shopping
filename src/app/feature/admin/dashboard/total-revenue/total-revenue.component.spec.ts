import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueComponent } from './total-revenue.component';
import { CommonChartService } from '../common-chart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TotalRevenueComponent', () => {
  let component: TotalRevenueComponent;
  let fixture: ComponentFixture<TotalRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalRevenueComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CommonChartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
