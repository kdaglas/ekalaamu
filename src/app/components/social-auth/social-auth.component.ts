import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import { SocialAuthService } from '../../services/social-auth/social-auth.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.sass']
})
export class SocialAuthComponent implements OnInit {

  user: SocialUser;

  constructor(
    private authService: AuthService,
    private socialAuth: SocialAuthService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe( user => {
      this.user = user;
    });
  }

  signInWithGoogle = (): void => {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(user => {
        this.socialAuth.authenticate(user.authToken, 'google-oauth2').subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  signInWithFacebook = () => {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(user => {
        this.socialAuth.authenticate(user.authToken, 'facebook').subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  signInWithLinkedIn = () => {
    this.socialAuth.authenticateLinkedIN().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
