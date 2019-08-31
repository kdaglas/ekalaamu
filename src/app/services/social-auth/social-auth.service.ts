import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthService {
  url = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticate = (accessToken: string, route: string) => {
    return this.httpClient.post<any>(
      `${this.url}${route}`,
      {
        access_token: accessToken
      }
    );
  }
}
