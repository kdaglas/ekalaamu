import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthComponent } from './social-auth.component';
import {SharedImports} from '../../utils/test/shared-imports';
import {AuthService} from 'angularx-social-login';
import { authServiceSpy, socialAuthServiceSpy } from '../../helpers/tests/spies.spec';
import {SocialAuthService} from '../../services/social-auth/social-auth.service';
import {of} from 'rxjs';
import {triggerEvent} from '../../utils/test/utils';

describe('SocialAuthComponent', () => {
  let component: SocialAuthComponent;
  let fixture: ComponentFixture<SocialAuthComponent>;
  const sharedImports = new SharedImports();
  let authServiceMock;

  beforeEach(async(() => {
    authServiceMock = {
      ...authServiceSpy,
      authState: of('user data'),
      signIn: Promise.resolve( 'Arnold' )
    };
    TestBed.configureTestingModule({
      imports: [...sharedImports.getSharedImports()],
      declarations: [ SocialAuthComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: SocialAuthService, useValue: socialAuthServiceSpy }
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SocialAuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign-up user using google', () => {
    // @ts-ignore
    const spy = spyOn(component, 'signInWithGoogle');
    const buttonNa = fixture.nativeElement.querySelector('#googleBtn');
    buttonNa.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

  });
});
