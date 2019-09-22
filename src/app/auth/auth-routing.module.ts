import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';

export const AuthRoutingModule: Routes = [
  {
    path: 'auth/signup',
    component: SignupComponent,
  }
];
