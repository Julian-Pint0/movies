import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpParams, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, mergeMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('\n\nEjecutando Interceptor....')
    
    let clonHttp: HttpRequest<any>;


    clonHttp = req.clone( { url: req.url+`?api_key=${environment.api_key}&language=es&page=1` } );

    return next.handle(clonHttp);

  }

}
