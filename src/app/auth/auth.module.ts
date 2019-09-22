import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignupComponent,
    SocialAuthComponent,
  ],
  imports: [
    RouterModule.forChild(AuthRoutingModule),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthModule { }
