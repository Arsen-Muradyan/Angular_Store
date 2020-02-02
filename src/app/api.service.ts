import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  private SERVER_URL = "http://localhost:3000/products";
  constructor(private httpClient: HttpClient) {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unkown Error";
    if (error.error instanceof ErrorEvent) {
      // Client Side Error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server Side error
      errorMessage = `Error Code: ${error.status}\nMessage ${error.message}`;
    }
    return throwError(errorMessage);
  }
  public get() {
    return this.httpClient
      .get(this.SERVER_URL)
      .pipe(catchError(this.handleError));
  }
}
