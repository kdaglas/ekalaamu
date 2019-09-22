import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import {AuthComponent} from './auth.component';

describe('AuthLayoutComponent', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AuthComponent]
    }).compileComponents();
  });

  it('should create the authLayoutComponent', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const authLayoutComponent = fixture.debugElement.componentInstance;
    expect(authLayoutComponent).toBeTruthy();
  });
});
