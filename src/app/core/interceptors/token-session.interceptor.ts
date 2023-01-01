import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';


const CHECK_COOKIE = new HttpContextToken<boolean>(()=>false);
export function checkCookie(){
  return new HttpContext().set(CHECK_COOKIE, true)
}
@Injectable()
export class TokenSessionInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(CHECK_COOKIE))
    {
       const token = localStorage.getItem('access_token');
    const currentRequest = request.clone(
      {
        setHeaders:{
          authorization: `Bearer ${token}`
        }
      }
    )
    request = currentRequest;
    return next.handle(request);
    }
    return next.handle(request);
  }
}
