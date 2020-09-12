import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseSalesComponent } from './category-wise-sales.component';
import { CommonChartService } from '../common-chart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryWiseSalesComponent', () => {
  let component: CategoryWiseSalesComponent;
  let fixture: ComponentFixture<CategoryWiseSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWiseSalesComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CommonChartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
