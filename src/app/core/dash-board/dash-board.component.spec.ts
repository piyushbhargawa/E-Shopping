import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardComponent } from './dash-board.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DashboardService } from './dashboard.service';
import { ExpectedConditions } from 'protractor';

describe('DashBoardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [DashboardService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // router = TestBed.get(Router);
    // location = TestBed.get(Location);
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });

  it('should send category', async() => {
    component.elect('Electronics');
  });

  it('should send id', async() => {
    component.openParticularPage('s20');
  });

  it('should send category', () => {
    component.openPage('Electronics');
  });

});
