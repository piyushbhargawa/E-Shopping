import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductsComponent } from './best-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonChartService } from '../common-chart.service';

describe('BestProductsComponent', () => {
  let component: BestProductsComponent;
  let fixture: ComponentFixture<BestProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestProductsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CommonChartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should sort the first array and sort second array according to the first array', () => {
    component.foo([1,2,3,4,5]);
  });
});
