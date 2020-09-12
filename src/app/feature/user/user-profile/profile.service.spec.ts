import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileService', () => {
  let service: ProfileService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });
    service = TestBed.inject(ProfileService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
