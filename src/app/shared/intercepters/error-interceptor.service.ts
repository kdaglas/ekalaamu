import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService} from "../../login/service/login.service";
import { ToasterService } from '../services/toaster.service';
import { environment } from "../../../environments/environment";

const errorHandler = (toaster: ToasterService) => (error: any, caught: Observable<any>): ObservableInput<any> => {
  if(error.url===`${environment.baseUrl}/login`){
    toaster.onFailure(error.error.Errors);
    return []
  }
  toaster.onFailure(error.error.Errors[0]);
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
