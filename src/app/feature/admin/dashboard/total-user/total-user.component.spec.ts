import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUserComponent } from './total-user.component';
import { CommonChartService } from '../common-chart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TotalUserComponent', () => {
  let component: TotalUserComponent;
  let fixture: ComponentFixture<TotalUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalUserComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [CommonChartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
