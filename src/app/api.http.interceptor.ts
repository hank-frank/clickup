import {
    HttpErrorResponse,
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService, private apiService: ApiService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        console.log('catching 401, bad login');
                        this.toastr.error('Error', `${error.status}`);
                    }
                    return throwError(error);
                }),
                finalize(() => {
                    console.log(`"${req.urlWithParams}"`);
                })
            );
    }
}