import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;
    const authToken = localStorage.getItem('token')
    if (authToken) {
        requestToForward = req.clone({ setHeaders: { "Authorization": 'Token ' + authToken } });
    }
    return next.handle(requestToForward);
  }
}
