import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./login/service/login.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToasterService} from "./shared/services/toaster.service";
import { MaterialModule} from "./modules/material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ErrorInterceptorService} from "./shared/intercepters/error-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, ToasterService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
