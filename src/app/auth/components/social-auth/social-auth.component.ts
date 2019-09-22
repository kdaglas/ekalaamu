import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from 'angularx-social-login';
import { SocialAuthService } from '../../../services/social-auth/social-auth.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../../shared/services/toaster.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit {

  user: SocialUser;

  constructor(
    private authService: AuthService,
    private socialAuth: SocialAuthService,
    private router: Router,
    public toaster: ToasterService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  socialSignIn = (socialStrategy: string): void => {
    switch (socialStrategy) {
      case 'google':
        this.socialAuthentication(GoogleLoginProvider.PROVIDER_ID, '/google');
        break;
      case 'facebook':
        this.socialAuthentication(FacebookLoginProvider.PROVIDER_ID, '/facebook');
        break;
      default:
        this.signInWithLinkedIn();
    }
  }

  socialAuthentication = (strategy: any, route: string): void => {
    this.authService.signIn(strategy)
      .then(user => {
        this.socialAuth.authenticate(user.authToken, route).subscribe(
          res => {
            localStorage.setItem('access_token', res.token);
            this.router.navigate(['/']);
          },
          () => {
            this.toaster.onFailure('Sorry, an Error occurred');
          }
        );
      });
  }

  signInWithLinkedIn = () => {
    this.toaster.onInfo('Sorry, this service is currently not available');
  }

}
