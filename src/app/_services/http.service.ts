import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize, tap } from 'rxjs/operators';
import { TrailerService } from './trailer.service';

@Injectable({
  providedIn: "root"
})
export class HTTPService {
  constructor(
    private http: HttpClient,
    private trailerService: TrailerService,

    ) {}}
