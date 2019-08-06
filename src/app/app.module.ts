import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialAuthComponent } from './components/social-auth/social-auth.component';
import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedInLoginProvider,
  SocialLoginModule
} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
import { MaterialModule } from './modules/material/material.module';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('571564205334-612trs472fui899locjk9mdri8nbs5qm.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('427296194667526')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('77aybh4rfe5lig', false, 'en_US')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SocialAuthComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialLoginModule,MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
