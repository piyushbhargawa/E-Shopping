import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProductsCategoryWiseComponent } from './total-products-category-wise.component';
import { CommonChartService } from '../common-chart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TotalProductsCategoryWiseComponent', () => {
  let component: TotalProductsCategoryWiseComponent;
  let fixture: ComponentFixture<TotalProductsCategoryWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProductsCategoryWiseComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CommonChartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProductsCategoryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
