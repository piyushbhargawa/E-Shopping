import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';

describe('SignUpService', () => {
  let service: SignUpService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignUpService]
    });
    service = TestBed.inject(SignUpService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post data by hitting API', () => {
    const data = {
      id : 'Ironman',
      first_name : 'tony',
      last_name : 'stark',
      password : 'Pepper@12',
      email : 'tonystark@starkIndustries.com',
      mobile : '1234567890',
      languages : ['English','Hindi'],
      gender : 'Male',
      photo : 'assets/avatar.png',
      cart: [],
      address: [],
      order: [],
      admin : false
    };
    const data2 = {
      id : 'Ironman',
      first_name : 'tony',
      last_name : 'stark',
      password : 'Pepper@12',
      email : 'tonystark@starkIndustries.com',
      mobile : '1234567890',
      languages : ['English','Hindi'],
      gender : 'Male',
      photo : 'assets/avatar.png',
      cart: [],
      address: [],
      order: [],
      admin : false
    };
    service.onSignUp(data).subscribe(data1 => {
      expect(data1).toEqual(data2);
    });
    var request  = mockHttp.expectOne(environment.BASE_URL+"login");
    expect(request.request.method).toBe('POST');
    request.flush(data2);
  });

});
