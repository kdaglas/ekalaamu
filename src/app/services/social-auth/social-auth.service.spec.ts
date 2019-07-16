import { TestBed } from '@angular/core/testing';

import { SocialAuthService } from './social-auth.service';
import {SharedImports} from '../../utils/test/shared-imports';


describe('SocialAuthService', () => {
  const sharedImports = new SharedImports();
  let service: SocialAuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
    });
    service = TestBed.get(SocialAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
