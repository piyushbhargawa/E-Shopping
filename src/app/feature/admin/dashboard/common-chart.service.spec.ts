import { TestBed } from '@angular/core/testing';

import { CommonChartService } from './common-chart.service';

describe('CommonChartService', () => {
  let service: CommonChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
