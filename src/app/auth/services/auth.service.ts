import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public signup = (newUser) => this.http.post(`${environment.baseDevUrl}/signup`, newUser).pipe(map( (user: any) => {
    if (user.token) {
      this.currentUserSubject.next({ username: user.username, token: user.token });
      sessionStorage.setItem(`user`, JSON.stringify(user));
    }
    return user;
  }))
}
