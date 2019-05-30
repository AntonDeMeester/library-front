import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs/index';
import { tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { Book } from '../models/book.model';
import { Genre } from '../models/genre.model';
import { environment } from '../../environments/environment';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = environment.backendUrl;
  private tokenEndPoint = this.baseUrl + '/token/';
  private booksEndPoint = this.baseUrl + '/books/';
  private registerEndPoint = this.baseUrl + '/register/';
  private genreEndPoint = this.baseUrl + '/genres/';

  private csrfToken: string;

  public token$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {
    this.token$ = new Subject<string>();
    this.token$.subscribe(token => this.setToken(token));
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.tokenEndPoint, {username: email, password})
      .pipe(
        tap(response => {
          console.log('Token is ' + response.token);
          this.token$.next(response.token);
          this.setToken(response.token);
        }),
        catchError( (error: HttpErrorResponse) => {
            this.snackbarService.display('Could not log in, please try again.');
            return throwError(error);
          }
        )
      );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isLoggedIn()) {
      this.clearToken();
      this.router.navigate(['login']);
      this.snackbarService.display('Logged out.');
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  getBooks(genreFilter: string = null): Observable<Book[]> {
      console.log('Getting books: genre filter is: ' + genreFilter);
      let params = new HttpParams();
      if (genreFilter) {
          console.log('Setting genre filter');
          params = params.append('genre', genreFilter);
      }
      return this.http.get<Book[]>(this.booksEndPoint, { params })
      .pipe(
          tap(books => {
          console.log(books);
          }),
      );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksEndPoint + id)
    .pipe(
      tap(book => {
        console.log(book);
      })
    );
  }

  registerBook(file: File): Observable<any[]> {
    const data: FormData = new FormData();
    data.append('image', file, 'fileName');
    return this.http.post<any[]>(this.registerEndPoint, data);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genreEndPoint);
  }
}
