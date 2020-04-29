import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Loginuser } from './loginuser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/';
 // _url2='http://localhost:5001';
  constructor(private _http: HttpClient) { }

  enroll (user: User) {
    return this._http.post<any>(this._url+'enroll', user)
      .pipe(catchError(this.errorHandler))
  }
  login(luser: Loginuser)
  {

    return this._http.post<any>(this._url+'login', luser)
      .pipe(catchError(this.errorHandler))
  }

  getFoods() {
  return this._http.get(this._url+'dashboard')
   //console.log('ok');
  // return this._http.get(this._url2)
}
getloc()
{
  return this._http.get(this._url+'dashboard')
   //console.log('ok');
}
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
