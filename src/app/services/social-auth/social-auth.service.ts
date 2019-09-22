import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthService {
  url = environment.baseUrl;
  client_id = environment.client_id;
  client_secret = environment.client_secret;
  callBack = 'http://localhost:4200/social';

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticate = (accessToken: string, backendType: string) => {
    return this.httpClient.post<any>(
      // tslint:disable-next-line:max-line-length
      `${this.url}convert-token?grant_type=convert_token&client_id=${this.client_id}&client_secret=${this.client_secret}&backend=${backendType}&token=${accessToken}`,
      {}
    );
  }

  authenticateLinkedIN = () => {
    return this.httpClient.get<any>(
      // tslint:disable-next-line:max-line-length
      'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77aybh4rfe5lig&redirect_uri=http://localhost:4200/auth/callback&state=1qaz2wsx3edc&scope=r_liteprofile%20r_emailaddress%20w_member_social',
    );
  }
}
