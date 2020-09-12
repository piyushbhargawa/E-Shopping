import { TestBed } from '@angular/core/testing';

import { UsersProfileService } from './users-profile.service';

describe('UsersProfileService', () => {
  let service: UsersProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
