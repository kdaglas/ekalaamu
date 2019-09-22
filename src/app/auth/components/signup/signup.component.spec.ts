import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { authServiceSpy, routerSpy } from 'src/app/helpers/tests/spies.spec';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [SignupComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }, { provide: Router, useValue: routerSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#signup routes to main page after user signup', () => {
    authServiceSpy.signup.and.returnValue(of({ token: 'token' }));
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });
});
