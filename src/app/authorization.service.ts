import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private API = `http://localhost:3000/api/`;

  userLogin: boolean = localStorage.getItem('token') ? true : false;

  constructor(private http: HttpClient) {
    console.log(this.userLogin);
  }

  authorization(user: User): Observable<User> {
    const url = `${this.API}login`;
    return this.http.post<User>(url, user).pipe(catchError(this.handleError));
  }

  createProfile(user: User): Observable<User> {
    const url = `${this.API}singup`;
    return this.http.post<User>(url, user).pipe(catchError(this.handleError));
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
