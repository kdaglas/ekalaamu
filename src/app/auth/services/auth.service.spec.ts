import { TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { httpClientSpy, authServiceSpy } from 'src/app/helpers/tests/spies.spec';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { newUser } from 'src/app/helpers/tests/mock-data';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy}]
    });

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    },
  ));

  it('should send a login request as expected', () => {
    authServiceSpy.currentUserSubject.and.returnValue(of(true));
    httpClientSpy.post.and.returnValue(of({token: 'testtoken'}));
    service.signup(newUser).subscribe( res => {
      expect(res.token).toBe('testtoken');
    });
  });
});
