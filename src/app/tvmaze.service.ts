import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { TVInfo } from './models/TVInfo';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  private API: string = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) {}

  searchTitle(title: string): Observable<TVInfo[]> {
    const url = `${this.API}search/shows?q=${title}`;
    return this.http.get<TVInfo[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
