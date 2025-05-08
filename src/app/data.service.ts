import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from './interface';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`http://localhost:3000/api/book`)
                    /*.pipe(
                      catchError((err: HttpErrorResponse) => {
                        console.error("Error !", err);
                        return [];
                      })
                    )*/;
  }

  getSearchBook(key: any): Observable<IBook[]> {
    return this.http.get<IBook[]>(`http://localhost:3000/api/book/${key}`)
                    .pipe(
                      catchError((err: HttpErrorResponse) => {
                        console.error("Error !", err);
                        return [];
                      })
                    );
  }
  postNewBook(bookdt: IBook) {
    return this.http.post<any>("/post/book", bookdt);
  }
}
