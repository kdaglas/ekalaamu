import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { ErrorInterceptorService } from './error-interceptor.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { authServiceSpy, toasterServiceSpy } from 'src/app/helpers/tests/spies.spec';
import { ToasterService } from '../../services/toaster.service';

describe('ErrorInterceptorService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorInterceptorService,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: ToasterService, useValue: toasterServiceSpy }
      ],
    });

    service = TestBed.get(ErrorInterceptorService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('intercepts error', () => {
    const spy = jasmine.createSpyObj('HttpHandler', ['handle']);
    const req = {};
    const error = { status: 401 };

    spy.handle.and.returnValue(throwError(error));

    service.intercept(req, spy).subscribe(() => {}, err => {});
  });
});
