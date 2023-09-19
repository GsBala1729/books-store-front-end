import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BlockOptionsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request method is OPTIONS
    if (req.method === 'OPTIONS') {
      // Block the OPTIONS request
      return throwError('OPTIONS requests are blocked.');
    } else {
        // If not an OPTIONS request, continue with the request as usual
        return next.handle(req);
    }
  }
}
