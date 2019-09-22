import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToasterService } from '../services/toaster.service';

const errorHandler = (toaster: ToasterService) => (error: any, caught: Observable<any>): ObservableInput<any> => {
  toaster.onFailure(error.error.errors[0]);
  return [];
};

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private toaster: ToasterService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
        errorHandler(this.toaster)
      )
    );
  }
}
