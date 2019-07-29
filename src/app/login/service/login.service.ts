import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public signup = (newUser) => this.http.post(`${environment.baseUrl}/users`, newUser).pipe(map( (user: any) => {
    if (user.token) {
      this.currentUserSubject.next({ username: user.username, token: user.token });
      sessionStorage.setItem(`token`, JSON.stringify(user.token));
    }
    return user;
  }))

  public login = (user) => this.http.post(`${environment.baseUrl}/login`, user).pipe(map( (result: any) => {
    console.log(result)
    console.log(this.currentUserSubject)
    if (result.token) {
      // this.currentUserSubject.next({ username: "",token: result.token });
      sessionStorage.setItem(`token`, JSON.stringify(user.token));
    }
    return result;
  }))
}
