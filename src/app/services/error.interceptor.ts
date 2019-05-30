import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackbarService: SnackbarService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse) => {
        console.log(error);
        let errorMessage = '';
        if (error.error) {
          errorMessage = error.error;
        } else if (error.error && error.error instanceof Array && error.error.length > 0) {
          errorMessage = error.error[0];
        } else if (error.message) {
          errorMessage = error.message;
        } else {
          errorMessage = 'Something went wrong.';
        }

        // Show the error
        this.snackbarService.display(errorMessage, 'dismiss', {duration: 2000});

        console.log(error);
        return throwError(error);
      })
    );
  }
}
