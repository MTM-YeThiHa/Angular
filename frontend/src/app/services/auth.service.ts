import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, throwError } from 'rxjs';

const apiUrl = 'http://localhost:3000/api/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: any;

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:3000/api/login";
  signupUrl = "http://localhost:3000/api/signup";

  isUserLoggedIn: boolean = false;

  login(email: string, password: string) {
    const data = {
      "email": email,
      "password": password
    }

    return this.http.post(this.loginUrl, data)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  signup(fullName: string, email: string, password: string) {
    const body = {
      "fullName": fullName,
      "email": email,
      "password": password
    }

    return this.http.post(this.signupUrl, body)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  private httpErrorHandler(error: HttpErrorResponse) {
    if(error.error instanceof HttpErrorResponse) {
      console.error("A client side error occured. The error message is " + error.message);
    } else {
      alert("Username, password wrong.");
      console.error("A server side error occured. The error message is " + error.message);
    }
    return throwError("Error occured.");
  }

  logout() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('loginUser');
  }
 
}
