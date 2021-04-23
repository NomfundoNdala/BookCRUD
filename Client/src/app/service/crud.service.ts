import { BookInterface } from './../model/book-interface';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  REST_API: string = 'http://localhost:5000/books';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  AddBook (data: BookInterface): Observable<any> {
    return this.httpClient.post(this.REST_API, data, {headers: this.httpHeaders});
  }

  GetBooks () {
    return this.httpClient.get(this.REST_API);
  }

  GetBook (id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders });

  }

  updateBook (id: string, data: any): Observable<any> {
    
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders });
  }

  deleteBook (id: string): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders });
  }

  handleError (error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
