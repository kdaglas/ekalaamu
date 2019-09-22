import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthComponent } from './social-auth.component';
import { SharedImports } from '../../../utils/test/shared-imports';
import { AuthService } from 'angularx-social-login';
import { authServiceSpy, socialAuthServiceSpy } from '../../../helpers/tests/spies.spec';
import { SocialAuthService } from '../../../services/social-auth/social-auth.service';
import { of, throwError } from 'rxjs';
import { triggerEvent } from '../../../utils/test/utils';
import { Router } from '@angular/router';
import { ToasterService } from '../../../shared/services/toaster.service';

describe('SocialAuthComponent', () => {
  let component: SocialAuthComponent;
  let fixture: ComponentFixture<SocialAuthComponent>;
  const sharedImports = new SharedImports();
  let authServiceMock;
  let toasterService;
  let toasterServiceErrorSpy;
  let toasterServiceInfoSpy;
  let router: Router;
  let routerSpy;
  authServiceMock = {
    ...authServiceSpy,
    authState: of('user data'),
    signIn: () => Promise.resolve('Arnold')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      declarations: [SocialAuthComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: SocialAuthService, useValue: socialAuthServiceSpy }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SocialAuthComponent);
        component = fixture.componentInstance;
        router = TestBed.get(Router);
        toasterService = TestBed.get(ToasterService);
        toasterServiceErrorSpy = spyOn(toasterService, 'onFailure');
        toasterServiceInfoSpy = spyOn(toasterService, 'onInfo');
        routerSpy = spyOn(router, 'navigate');
        routerSpy.and.returnValue(null);
        fixture.detectChanges();
      });
  }));

  const setUp = (selector: string): void => {
    socialAuthServiceSpy.authenticate.and.returnValue(of({ firstName: 'test', token: '31trwedhsnadjwydthf' }));
    const buttonNa = fixture.nativeElement.querySelector(selector);
    buttonNa.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(routerSpy).toHaveBeenCalled();
    });
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign-up user using google', () => {
    // @ts-ignore
    setUp('#googleBtn');
  });

  it('should sign-up user using google', () => {
    // @ts-ignore
    setUp('#facebookBtn');
  });

  it('should display toaster on user sign-up using linkedIn', () => {
    socialAuthServiceSpy.authenticate.and.returnValue(of({ firstName: 'test', token: '31trwedhsnadjwydthf' }));
    const buttonNa = fixture.nativeElement.querySelector('#linkedInBtn');
    buttonNa.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(toasterServiceInfoSpy).toHaveBeenCalledWith('Sorry, this service is currently not available');
    });
  });

  it('should throw error when something goes wrong', () => {
    socialAuthServiceSpy.authenticate.and.returnValue(throwError({}));
    const buttonNa = fixture.nativeElement.querySelector('#googleBtn');
    buttonNa.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(toasterServiceErrorSpy).toHaveBeenCalledWith('Sorry, an Error occurred');
    });
  });

});
