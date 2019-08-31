import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  action = 'close';
  config = {
    verticalPosition: 'top',
    horizontalPosition: 'right'
  } as MatSnackBarConfig;

  constructor(private snackBar: MatSnackBar) {}

  onSuccess = (message: string) =>
    this.snackBar.open(message, this.action, {...this.config, panelClass: ['toast-success']})
  onInfo = (message: string) =>
    this.snackBar.open(message, this.action, {...this.config, panelClass: ['toast-info']})
  onFailure = (message: string) =>
    this.snackBar.open(message, this.action, {...this.config, panelClass: ['toast-error']})
}
