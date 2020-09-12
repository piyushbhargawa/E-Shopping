import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';

describe('LoginService', () => {
  let service: LoginService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const data = {
    userName: 'Piyush',
    password: '1234'
  };

  it('should be check the login details', () => {
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
    service.onLogin('Ironman').subscribe(data1 => {
      expect(data1).toEqual(data2);
    });
    var request  = mockHttp.expectOne(environment.BASE_URL+"login?id=Ironman");
    expect(request.request.method).toBe('GET');
    request.flush(data2);
  });

});
