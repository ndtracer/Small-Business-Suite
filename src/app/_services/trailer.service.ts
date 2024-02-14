import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators"

import { environment } from "src/environments/environment";
import { Trailer } from '../_models/trailer'



@Injectable({ providedIn: 'root'})
export class TrailerService {
  public trailerSubject:
  BehaviorSubject<Trailer | null>;
  public trailer:
  Observable<Trailer | null>;


  constructor(
    private router: Router,
    private http: HttpClient
    ) {
      this.trailerSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('trailer')!));
      this.trailer = this.trailerSubject.asObservable();
    }

    public get trailerValue() {
      return this.trailerSubject.value;
    }

    addNewTrailer(trailer: Trailer) {
      return this.http.post(`${environment.apiUrl}/trailers`, trailer)
    }

    getAllTrailers() {
      return this.http.get<Trailer[]>(`${environment.apiUrl}/trailers`)

    }

    getTrailerById(id: string) {
      return this.http.get<Trailer>(`${environment.apiUrl}/trailers/${id}`);
    }

    updateTrailer(id: string, params: any) {
      return this.http.put(`${environment.apiUrl}/trailers/${id}`, params)
      .pipe(map(x => {
          // update local storage
          const trailer = { ...this.trailerValue, ...params };
          localStorage.setItem('trailer', JSON.stringify(trailer));

          // publish updated trailer to subscribers
          this.trailerSubject.next(trailer);
        return x;
      }));
    }

    deleteTrailer(id: string) {
      return this.http.delete
      (`${environment.apiUrl}/trailers/${id}`)
      .pipe(map(x => {
        return x;
      }));
    }
}
