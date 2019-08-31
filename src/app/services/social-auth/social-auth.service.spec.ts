import { TestBed } from '@angular/core/testing';

import { SocialAuthService } from './social-auth.service';
import {SharedImports} from '../../utils/test/shared-imports';
import {HttpClient} from '@angular/common/http';
import {httpClientSpy} from '../../helpers/tests/spies.spec';
import {authenticateData, authResponse} from '../../helpers/tests/mock-data';
import {of} from 'rxjs';


describe('SocialAuthService', () => {
  const sharedImports = new SharedImports();
  let service: SocialAuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      providers: [
        {
          provide: HttpClient, useValue: httpClientSpy
        }
      ]
    });
    service = TestBed.get(SocialAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user', () => {
    httpClientSpy.post.and.returnValue(of(authResponse));
    service.authenticate('12wsqadweq23wefrefrdagreggrthygbeythbrtywrrgrgw', '/google')
      .subscribe(
        value => {
          expect(value.access_token).toEqual('12wsqadweq23wefrefrdagreggrthygbeythbrtywrrgrgw');
        }
      );
  });
});
