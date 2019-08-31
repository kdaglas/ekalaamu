import { TestBed } from '@angular/core/testing';
import { ToasterService } from './toaster.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ToasterService', () => {
  let service;
  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

  const toastData = {
    message: 'hello',
    title: 'world',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, BrowserAnimationsModule],
      providers: [{ provide: MatSnackBar, useValue: matSnackBarSpy} ]
    });
    service = TestBed.get(ToasterService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('shows success toast', () => {
    service.onSuccess('');
    expect(matSnackBarSpy.open).toHaveBeenCalled();
  });

  it('shows info toast', () => {
    service.onInfo('');
    expect(matSnackBarSpy.open).toHaveBeenCalled();
  });

  it('shows error toast', () => {
    service.onFailure(toastData.message);
    expect(matSnackBarSpy.open).toHaveBeenCalled();
  });
});
